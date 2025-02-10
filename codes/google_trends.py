# streamlit run /Users/yhhan/git/linklab.github.io/codes/google_trends.py

import trafilatura
import streamlit as st
from datetime import datetime, timedelta
import time
import json
import re
from pytrends.request import TrendReq
import pandas as pd


class GoogleTrendsScraper:
    def __init__(self):
        self.pytrends = TrendReq(hl='ko', tz=540)  # Korean language, UTC+9 timezone

    def build_payload_with_retry(self, kw_list, retries=3, delay=10):
        """지수 백오프를 사용하여 build_payload를 호출합니다."""
        for attempt in range(retries):
            try:
                self.pytrends.build_payload(
                    kw_list,
                    cat=0,
                    timeframe='now 1-d',
                    geo='KR',
                    gprop=''
                )
                return True
            except Exception as e:
                if 'returned a response with code 429' in str(e):
                    st.warning(f"요청이 제한되었습니다. {delay}초 후에 재시도합니다.")
                    time.sleep(delay)
                    delay *= 2  # 대기 시간 두 배로 증가
                else:
                    st.error(f"요청 중 오류가 발생했습니다: {str(e)}")
                    return False
        return False

    def get_interest_score(self, keyword):
        """키워드의 24시간 관심도를 가져옵니다."""

        try:
            # 현재 시간과 24시간 전 시간을 계산
            end_time = datetime.now()
            start_time = end_time - timedelta(days=1)

            # timeframe 형식: 'YYYY-MM-DD HH:mm:ss' -> timeframe 형식 수정: 'now 1-d' 사용
            timeframe = 'now 1-d'
            success = self.build_payload_with_retry([keyword])
            if not success:
                return {
                    'current': 'N/A',
                    'avg': 'N/A',
                    # 'trend': [] 그래프 삭제
                }

            # 관심도 데이터 가져오기
            interest_df = self.pytrends.interest_over_time()

            if not interest_df.empty and keyword in interest_df.columns:
                # 24시간 동안의 평균, 최대, 최소 관심도 계산
                avg_score = interest_df[keyword].mean()
                # max_score = interest_df[keyword].max()
                # min_score = interest_df[keyword].min()
                current_score = interest_df[keyword].iloc[-1]

                return {
                    'current': f"{current_score:.0f}",
                    'avg': f"{avg_score:.0f}",
                    # 'max': f"{max_score:.0f}",
                    # 'min': f"{min_score:.0f}"
                    # 'trend': interest_df[keyword].tolist()  # 시계열 데이터 삭제
                }
            return {
                'current': 'N/A',
                'avg': 'N/A',
                # 'max': 'N/A',
                # 'min': 'N/A'
                # 'trend': [] # 시계열 데이터 삭제
            }

        except Exception as e:
            st.error(f"{keyword}의 관심도를 가져오는 중 오류가 발생했습니다: {str(e)}")
            return {
                'current': 'N/A',
                'avg': 'N/A',
                # 'trend': [] 시계열 데이터 삭제
            }

    def fetch_trending_keywords(self):
        try:
            # 트렌딩 키워드 가져오기
            trending_searches_df = self.pytrends.trending_searches(pn='south_korea')
            if trending_searches_df.empty:
                st.error("트렌드 데이터를 가져올 수 없습니다.")
                return []

            trends = []
            keywords = trending_searches_df.head(10).values.flatten().tolist()

            # 문제 키워드 제외
            problem_keywords = ['수능) 국어']
            keywords = [kw for kw in keywords if kw not in problem_keywords]

            # 키워드를 5개씩 묶기
            for i in range(0, len(keywords), 5):
                batch = keywords[i:i + 5]
                # st.write(f"Processing batch: {batch}")  # 디버깅용 로그 추가를 삭제
                time.sleep(60)  # 대기 시간 1분으로 처리(5명씩)
                try:
                    success = self.build_payload_with_retry(batch)
                    if not success:
                        st.error(f"Failed to build payload for batch: {batch}")
                        continue  # 다음 배치로 넘어감

                    interest_df = self.pytrends.interest_over_time()

                    if interest_df.empty:
                        st.error(f"No data returned for batch: {batch}")
                        continue  # 다음 배치로 넘어감

                    for keyword in batch:
                        # st.write(f"Processing keyword: {keyword}")  # 키워드 처리 로그 추가를 삭제
                        try:
                            if keyword in interest_df.columns:
                                avg_score = interest_df[keyword].mean()
                                current_score = interest_df[keyword].iloc[-1]
                                # trend_data = interest_df[keyword].tolist() 시계열데이터 삭제
                            else:
                                avg_score = 'N/A'
                                current_score = 'N/A'
                            # trend_data = [] 시계열 데이터 삭제

                            trends.append({
                                'rank': keywords.index(keyword) + 1,
                                'keyword': keyword,
                                'traffic': {
                                    'current': f"{current_score:.0f}" if current_score != 'N/A' else 'N/A',
                                    'avg': f"{avg_score:.0f}" if avg_score != 'N/A' else 'N/A',
                                    # 'trend': trend_data 시계열 데이터 삭제
                                },
                                'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                            })
                        except Exception as e:
                            st.error(f"Error processing keyword '{keyword}': {str(e)}")
                            continue
                except Exception as e:
                    st.error(f"Error processing batch {batch}: {str(e)}")
                    continue
            st.write(f"Total trends collected: {len(trends)}")
            return trends

        except Exception as e:
            st.error(f"트렌드 데이터를 가져오는 중 오류가 발생했습니다: {str(e)}")
            return []

    def get_cached_trends(self, cache_duration=300):  # 5분 캐시
        current_time = time.time()

        if (hasattr(self, '_cache') and hasattr(self, '_cache_time') and
                current_time - self._cache_time < cache_duration):
            return self._cache

        # 새로운 데이터 가져오기
        trends = self.fetch_trending_keywords()
        self._cache = trends
        self._cache_time = current_time

        return trends


def main():
    st.title("Google Trends Korea Real-time")

    # Create a placeholder for auto-refresh status
    status_container = st.empty()
    scraper = GoogleTrendsScraper()

    # 새로고침 버튼
    if st.button("새로고침"):
        st.experimental_rerun()

    # 현재 시간을 표시할 placeholder
    with status_container:
        st.write(f"{datetime.now().strftime('%Y-%m-%d %H:%M')} 현재 실시간 인기 검색어 TOP 10")

    # 데이터 로딩 중 표시
    with st.spinner('데이터를 불러오는 중...'):
        trends = scraper.get_cached_trends()

    if trends:
        for trend in trends:
            with st.container():
                col1, col2 = st.columns([3, 1])
                with col1:
                    st.write(f"**{trend['rank']}. {trend['keyword']}**")
                with col2:
                    traffic = trend['traffic']
                    st.write(f"현재 관심도: {traffic['current']}")
                    st.write(f"평균 관심도: {traffic['avg']}")

                # 트렌드 라인 추가
                # if traffic['trend']:
                #     chart_data = pd.DataFrame({
                #         '시간': pd.date_range(end=datetime.now(), periods=len(traffic['trend']), freq='h'),
                #        '관심도': traffic['trend']
                #    })
                #    # st.line_chart(chart_data.set_index('시간')) 시계열데이터 삭제

                st.write(f"시간: {trend['timestamp']}")
                st.divider()
    else:
        st.warning("트렌드 데이터를 가져올 수 없습니다.")


if __name__ == "__main__":
    main()