---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
permalink: /courses/common/computer_network_supplement
---

<section style="overflow-wrap: anywhere; word-wrap: anywhere;">
    <div class="cw-content container-fluid">
        <div class="cyw-container" style="width: 100%; margin-left: auto; margin-right: auto">
            <div class="container" style="width: 100%; margin-left: auto; margin-right: auto">
                <!--Start Container Div-->
                <div style="background-color:white;" class="container-fluid">
                    <!--Start Content Grid-->
                    <div class="row content">
                        <div class="content-fluid">
                            <div class="cw-content container-fluid">
                                <div class="cyw-container">
                                    <div class="container">
                                        <!--Start Container Div-->
                                        <div style="background-color:white;color:black" class="container-fluid">
                                            <!--Start Content Grid-->
                                            <div class="row content">
                                                <div class="content-wrapper">
                                                    <h2 class="title-level-2">
                                                        Computer Networks (컴퓨터 네트워크) - CSE133
                                                    </h2>
                                                </div>
                                                <br/>
                                                <div>
                                                     <strong>대역폭(bandwidth)</strong>
                                                    <br/>
                                                    “대역폭(bandwidth)“이라는 용어는 실제로 두 가지 맥락에서 사용될 수 있다. 이로 인해 혼동이 생길 수 있지만, 두 경우 모두 특정한 맥락에서 적절하게 사용된다.
                                                    <br/>
                                                    1.     주파수 대역에서의 대역폭: 이 경우, 대역폭은 특정 주파수 범위 내에서 신호가 전달될 수 있는 최대 주파수와 최소 주파수의 차이를 의미한다. 예를 들어, 1MHz에서 5MHz 사이의 주파수 대역을 사용하는 시스템의 대역폭은 4MHz이다. 이는 아날로그 신호 처리 및 통신 시스템에서 주로 사용된다.
                                                    <br/>
                                                    2.     전송률의 동의어로서의 대역폭: 디지털 통신에서 대역폭은 종종 데이터 전송률(transmission rate) 또는 처리 속도와 동의어로 사용된다. 이 경우 대역폭은 네트워크가 초당 전송할 수 있는 데이터의 양을 의미하며, 비트 퍼 세컨드(bps) 단위로 측정된다. 예를 들어, 인터넷 연결의 대역폭이 100Mbps라고 하면, 이는 네트워크가 초당 100메가비트의 데이터를 전송할 수 있음을 의미한다.
                                                </div>
                                                <br/>
                                                <div>
                                                    <strong>캡슐화 (Encapsulation)</strong>
                                                    <br/>
                                                    캡슐화는 네트워크 통신에서 데이터가 한 계층에서 다음 계층으로 전달될 때, 각 계층에서 그 계층에 필요한 정보를 데이터에 추가하는 과정을 일컫는다. 각 계층은 데이터를 처리하고, 그 계층에 필요한 헤더나 트레일러를 추가한 뒤, 이를 다음 계층으로 전달한다.
                                                    <br/>
                                                    예를 들어:
                                                    <br/>                                                    
                                                        1.	응용 계층 (Application Layer): 사용자의 데이터를 생성하고, 이를 전송 계층으로 전달한다.<br/>
                                                        2.	전송 계층 (Transport Layer): 응용 계층에서 받은 데이터를 세그먼트(segment)로 분할하고, 포트 번호와 같은 정보를 추가한 뒤 네트워크 계층으로 전달한다.<br/>
                                                        3.	네트워크 계층 (Network Layer): 전송 계층에서 받은 세그먼트에 IP 주소와 같은 정보를 포함한 헤더를 추가하여 패킷을 생성하고, 이를 데이터 링크 계층으로 전달한다.<br/>
                                                        4.	데이터 링크 계층 (Data Link Layer): 네트워크 계층에서 받은 패킷을 프레임(frame)으로 변환하고, MAC 주소와 같은 정보를 추가한 후 물리 계층으로 전달한다.<br/>
                                                        5.	물리 계층 (Physical Layer): 데이터를 실제로 전송할 수 있도록 비트(bit) 스트림으로 변환하여 전송 매체를 통해 상대방에게 전달한다.<br/>
                                                    <br/>
                                                    이러한 캡슐화 과정은 데이터가 발신지에서 수신지로 이동하는 동안 안전하고 일관되게 전달되도록 보장한다. 수신 측에서는 이 과정을 <strong>역캡슐화(decapsulation)</strong>라고 하며, 각 계층에서 추가된 정보를 제거하고 원래의 데이터를 복원한다.
                                                    </div>
                                            </div>
                                            <div class="clear"></div>
                                            <!--End Content Grid-->
                                        </div>
                                    </div>
                                </div>
                                <!--End Container Div-->
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <!--End Content Grid-->
                </div>
            </div>
        </div>
        <!--End Container Div-->
    </div>
</section>