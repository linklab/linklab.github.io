from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.shapes import MSO_SHAPE
from pptx.dml.color import RGBColor

# 새 프레젠테이션 생성
prs = Presentation()
slide = prs.slides.add_slide(prs.slide_layouts[5])

# 박스(사각형) 추가 함수
def add_box(slide, left, top, width, height, text, font_size=14,
            fill_color=(255, 255, 255), outline_color=(0, 0, 0)):
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, height)
    shape.text = text
    # 텍스트 서식 설정
    for paragraph in shape.text_frame.paragraphs:
        for run in paragraph.runs:
            run.font.size = Pt(font_size)
    # 배경색 지정
    fill = shape.fill
    fill.solid()
    fill.fore_color.rgb = RGBColor(*fill_color)
    # 외곽선 색 지정
    shape.line.color.rgb = RGBColor(*outline_color)
    return shape

# 기본 박스 크기 및 간격 (인치 단위)
box_width = Inches(2.0)
box_height = Inches(0.7)
vertical_spacing = Inches(0.5)

# 슬라이드 전체 너비 (pptx 내부 단위는 EMU이지만, Inches()를 사용)
slide_width = prs.slide_width

# 1. 최상단: 대학명 박스
top_node = add_box(slide, Inches(4), Inches(0.5), box_width, box_height,
                   "한국기술교육대학교", font_size=16, fill_color=(173, 216, 230))

# 2. 두 번째 레벨: 학부/학과 박스 (총 11개)
# 목록: 기계공학부, 메카트로닉스공학부, 전기·전자·통신공학부, 컴퓨터공학부,
#      디자인·건축공학부, 에너지신소재화학공학부, 산업경영학부, 고용서비스정책학과,
#      교양학부, HRD학과, 융합학과
# 화면 폭에 맞춰 두 행으로 배치 (첫 행 6개, 두 번째 행 5개)
second_row_top = Inches(1.5)
third_row_top = Inches(2.5)

academic_units_row1 = [
    "기계공학부",
    "메카트로닉스공학부",
    "전기·전자·통신공학부",
    "컴퓨터공학부",
    "디자인·건축공학부",
    "에너지신소재화학공학부"
]
academic_units_row2 = [
    "산업경영학부",
    "고용서비스정책학과",
    "교양학부",
    "HRD학과",
    "융합학과"
]

# 첫 번째 행 박스 간격 계산
num_boxes_row1 = len(academic_units_row1)
space_between_row1 = (slide_width - (num_boxes_row1 * box_width)) / (num_boxes_row1 + 1)

row1_boxes = []
current_left = space_between_row1
for unit in academic_units_row1:
    box = add_box(slide, current_left, second_row_top, box_width, box_height, unit)
    row1_boxes.append(box)
    current_left += box_width + space_between_row1

# 두 번째 행 박스 간격 계산
num_boxes_row2 = len(academic_units_row2)
space_between_row2 = (slide_width - (num_boxes_row2 * box_width)) / (num_boxes_row2 + 1)

row2_boxes = []
current_left = space_between_row2
for unit in academic_units_row2:
    box = add_box(slide, current_left, third_row_top, box_width, box_height, unit)
    row2_boxes.append(box)
    current_left += box_width + space_between_row2

# 3. 하위 전공 추가
# (1) 디자인·건축공학부의 하위 전공: 디자인공학전공, 건축공학전공
# 디자인·건축공학부는 row1의 5번째 박스(index 4)
design_box = row1_boxes[4]
sub_top = design_box.top + box_height + vertical_spacing
sub_width = box_width / 2 - Inches(0.1)
sub_height = box_height

add_box(slide, design_box.left, sub_top, sub_width, sub_height,
        "디자인공학전공", font_size=12, fill_color=(240, 230, 140))
add_box(slide, design_box.left + sub_width + Inches(0.2), sub_top, sub_width, sub_height,
        "건축공학전공", font_size=12, fill_color=(240, 230, 140))

# (2) 에너지신소재화학공학부의 하위 전공: 에너지신소재공학전공, 화학생명공학전공
# 에너지신소재화학공학부는 row1의 6번째 박스(index 5)
energy_box = row1_boxes[5]
sub_top_energy = energy_box.top + box_height + vertical_spacing

add_box(slide, energy_box.left, sub_top_energy, sub_width, sub_height,
        "에너지신소재공학전공", font_size=12, fill_color=(152, 251, 152))
add_box(slide, energy_box.left + sub_width + Inches(0.2), sub_top_energy, sub_width, sub_height,
        "화학생명공학전공", font_size=12, fill_color=(152, 251, 152))

# PPTX 파일 저장
prs.save("조직도_박스형태.pptx")
print("조직도_박스형태.pptx 파일이 생성되었습니다.")
