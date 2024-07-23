{# !!! research_areas.html page, anchor links are synchronized to the old link pages and resources #}

{% extends "base.html" %}
{% block title %} Reinforcement Learning (강화 학습) {% endblock %}
{% block additional_style %}
    {# custom list styles for current page #}
    .list-style-1, .list-style-1 > :not(.list-style-2) {
    font-size: 14px;
    margin-left: 20px;
    list-style-type: decimal;
    }
    .list-style-2, .list-style-2 * {
    font-size: 14px;
    margin-left: 20px;
    list-style-type: circle;
    }
    .list-style-2 > :not(.list-style-1) {
    margin-top:    5px;
    margin-bottom: 10px;
    }
{% endblock %}

{% block body %}
<!-- page-title -->
<section class="page-title centred"
         style="background-image: url(/assets/images/landscape/koreatech_landscape_2.jpg);">
    <div class="container">
        <div class="content-box">
            <div class="title">Intelligent Network</div>
            <ul class="bread-crumb">
                <li><a href="/">Home</a></li>
                <li><a href="/menu/research">Research</a></li>
                <li>Research Areas</li>
                <li>Intelligent Network</li>
            </ul>
        </div>
    </div>
</section>
<!-- page-title end -->

<section>
    <div class="cw-content container-fluid">
        <div class="cyw-container">
            <div class="container">
                <!--Start Container Div-->

                <div style="background-color:white;" class="container-fluid">
                        <!--Start Content Grid-->
                        <section class="row content" style="padding-bottom:100px">
                            <section class="content-wrapper title-section">
                                <h2 class="title-level-2">Intelligent Networking (5G/6G)</h2>
                            </section>
                            <section style="padding: 0px 30px; width:100%" class="content-wrapper">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <article>
                                            <button class="accordion">Network Virtualization</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        CJ. Bernardos, A. Rahman, JC. Zuniga, LM. Contreras, P. Aranda, P. Lynch, "Network Virtualization Research Challenges," IETF RFC 8568, April, 2019.
                                                        <a href="https://tools.ietf.org/html/rfc8568" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <article>
                                            <button class="accordion">VNE Survey</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        H. Cao, S. Wu, Y. Hu, Y. Liu and L. Yang, "A survey of embedding algorithm for virtual network embedding," in China Communications, 2019.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8332001" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        R. Boutaba et. al., "A Comprehensive Survey on Machine Learning for Networking: Evolution, Applications and Research Opportunities," Journal of Internet Services and Applications, 2018.
                                                        <a href="https://www.dropbox.com/s/cx6i74uerjyg1tr/RL-04.%EB%8F%99%EC%A0%81%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.pdf?dl=0" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                        <ul class="inner_study">
                                                            <li>
                                                                Refer to pages 50 to 52 in section 7.1
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        H. Cao, H. Hu, Z. Qu and L. Yang, "Heuristic solutions of virtual network embedding: A survey," in China Communications, 2018.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8968720" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        A. Fischer et. al., "Virtual Network Embedding: A Survey," IEEE Communications Surveys & Tutorials, 2013.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6463372" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <article>
                                            <button class="accordion">Heuristic VNE Schemes</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        Zhang, Peiying, et al. "Security aware virtual network embedding algorithm using information entropy TOPSIS." Journal of Network and Systems Management 28.1, 2020.
                                                        <a href="https://link.springer.com/article/10.1007/s10922-019-09500-4" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        S. Karmoshi, A. Hawbani, A. Ghannami, S. Mohammed and M. Zhu, "VNE-Greedy: Virtual Network Embedding Algorithm Based on OpenStack Cloud Computing Platform," 2016 6th International Conference on Digital Home (ICDH), 2016.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8039098" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-info" style="font-size: large">[GRC]</span>
                                                        L. Gong, Y. Wen, Z. Zhu, and T. Lee, "Toward Profit-seeking Virtual Network Embedding Algorithm via Global Resource Capacity," IEEE INFOCOM, pp. 1–9, Apr. 2014.
                                                        <a href="https://ieeexplore.ieee.org/document/6847918" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-info" style="font-size: large">[NodeRank]</span>
                                                        M. Feng, L. Zhang, X. Zhu, J. Wang, Q. Qi and J. Liao, "Topology-aware virtual network embedding through the degree," National Doctoral Academic Forum on Information and Communications Technology, 2013.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6767296" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        H. Kim and S. Lee, "Greedy virtual network embedding under an exponential cost function," The International Conference on Information Network 2012, 2012.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6164380" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        X. Cheng, et. al., "Virtual Network Embedding Through Topology-Aware Node Ranking," ACM SIGCOMM Computer Communication Review, 2011.
                                                        <a href="https://www.researchgate.net/publication/220195180_Virtual_Network_Embedding_Through_Topology-Aware_Node_Ranking" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        M. Yu, Y. Yi, J. Rexford, and M. Chiang, “Rethinking Virtual Network Embedding: Substrate Support for Path Splitting and Migration,” ACM SIGCOMM Computer Communication Review, 2008.
                                                        <a href="https://dl.acm.org/doi/pdf/10.1145/1355734.1355737" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <article>
                                            <button class="accordion">MIP & LP-based VNE Schemes</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        N. Shahriar et al., “Virtual Network Survivability through Joint Spare Capacity Allocation and Embedding,” IEEE Journal on Selected Areas in Communications, 2018.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8314665" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-info" style="font-size: large">[D-ViNE]</span>
                                                        <span class="badge badge-info" style="font-size: large">[R-ViNE]</span>
                                                        M. Chowdhury, M. R. Rahman and R. Boutaba, "ViNEYard: Virtual Network Embedding Algorithms With Coordinated Node and Link Mapping," IEEE/ACM Transactions on Networking, 2012
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5951812" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <article>
                                            <button class="accordion">Bio-Inspired VNE Schemes</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <li>
                                                        Khoa T. D. Nguyen, Changcheng Huang, "Distributed Parallel Genetic Algorithm for Online Virtual Network Embedding," International Journal of Communication Systems, 2020
                                                        <a href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/dac.4691" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        P. Zhang, Y. Hong, X. Pang and C. Jiang, "VNE-HPSO: Virtual Network Embedding Algorithm Based on Hybrid Particle Swarm Optimization," IEEE Access, 2020
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9268984" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        L. Boyang, W. Muqing and Z. Haosen, "Virtual Network Embedding Based on Hybrid Adaptive Genetic Algorithm," IEEE 5th International Conference on Computer and Communications (ICCC), 2019.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9064173" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                        <article>
                                            <button class="accordion">Deep RL-based VNE Schemes</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <div>&nbsp;&nbsp;[2021]</div>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[GCN-DRL-VNE]</span> P. Zhang, et al., "Dynamic Virtual Network Embedding Algorithm based on Graph Convolution Neural Network and Reinforcement Learning," in IEEE Internet of Things Journal, 2021.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9475485" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[QS-DRL-VNE]</span> Wang, Chao, et al. "VNE Solution for Network Differentiated QoS and Security Requirements: from The Perspective of Deep Reinforcement Learning," Computing, 2021.
                                                        <a href="https://link.springer.com/article/10.1007/s00607-020-00883-w" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <br/>
                                                    <div>&nbsp;&nbsp;[2020]</div>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[GNN-VNE]</span> A. Rkhami, et.al., "On the Use of Graph Neural Networks for Virtual Network Embedding," 2020 International Symposium on Networks, Computers and Communications (ISNCC), 2020.
                                                        <a href="https://ieeexplore.ieee.org/abstract/document/9297270" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[TS-DRL-VNE]</span>
                                                        <span class="badge badge-warning" style="font-size: large">[FAM-DRL-VNE]</span>
                                                        <span class="badge badge-warning" style="font-size: large">[MPT-DRL-VNE]</span>
                                                        Zhang, Shidong, et al. "Network Resource Allocation Strategy Based on Deep Reinforcement Learning," IEEE Open Journal of the Computer Society 1, 2020.
                                                        <a href="https://www.researchgate.net/publication/341953595_Network_Resource_Allocation_Strategy_Based_on_Deep_Reinforcement_Learning" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[PN-VNE]</span> Wang, Cong, et al. "Modeling on Virtual Network Embedding Using Reinforcement Learning," Concurrency and Computation: Practice and Experience, 2020.
                                                        <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/cpe.6020" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[CDRL]</span> H. Yao, S. Ma, J. Wang, P. Zhang, C. Jiang and S. Guo, "A Continuous-Decision Virtual Network Embedding Scheme Relying on Reinforcement Learning," in IEEE Transactions on Network and Service Management, 2020.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8982091" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[PP-RL-VNE]</span> D. Andreoletti, T. Velichkova, G. Verticale, M. Tornatore and S. Giordano, "A Privacy-Preserving Reinforcement Learning Algorithm for Multi-Domain Virtual Network Embedding," in IEEE Transactions on Network and Service Management, 2020.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9187205" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[WSN-QL-VNE]</span> Afifi, Haitham, and Holger Karl. "Reinforcement Learning for Virtual Network Embedding in Wireless Sensor Networks." 2020 16th International Conference on Wireless and Mobile Computing, Networking and Communications (WiMob), 2020.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9253442" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[QL-VNE]</span> Y. Yuan, Z. Tian, C. Wang, F. Zheng, and Y. Lv, “A Q-learning-based Approach for Virtual Network Embedding in Data Center,” Neural Computing and Applications, 2020.
                                                        <a href="http://eds.b.ebscohost.com/eds/detail/detail?vid=0&sid=c02f8d5b-4813-48a7-9684-980d9a784ab4%40pdc-v-sessmgr02&bdata=Jmxhbmc9a28mc2l0ZT1lZHMtbGl2ZQ%3d%3d#AN=142471886&db=a9h" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[EAMCM]</span> P. T. Anh Quang, Y. Hadjadj-Aoul and A. Outtagarts, "Evolutionary Actor-Multi-Critic Model for VNF-FG Embedding," 2020 IEEE 17th Annual Consumer Communications & Networking Conference (CCNC), 2020.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9045434" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[A3C-GCN]</span> Z. Yan, J. Ge, Y. Wu, L. Li and T. Li, "Automatic Virtual Network Embedding: A Deep Reinforcement Learning Approach With Graph Convolutional Networks," in IEEE Journal on Selected Areas in Communications, 2020.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9060910" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <br/>
                                                    <div>&nbsp;&nbsp;[2019]</div>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[NVFdeep]</span> Y. Xiao, Q. Zhang, F. Liu, J. Wang, M. Zhao, Z. Zhang, and J. Zhang, "NFVdeep: Adaptive Online Service Function Chain Deployment with Deep Reinforcement Learning," ACM Proceedings of the International Symposium on Quality of Service (IWQoS), pages 1–21, NY, USA, 2019.
                                                        <a href="https://dl.acm.org/doi/10.1145/3326285.3329056" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[Data-driven]</span> H. Wang, Y. Wu, G. Min, J. Xu, and P. Tang, “Data-driven Dynamic Resource Scheduling for Network Slicing: A Deep Reinforcement Learning Approach,” Information Science, vol. 498, pp. 106–116, Sep. 2019.
                                                        <a href="https://www.sciencedirect.com/science/article/pii/S0020025519303986" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[DeepViNE]</span> M. Dolati, S. B. Hassanpour, M. Ghaderi, and A. Khonsari, "DeepViNE: Virtual Network Embedding with Deep Reinforcement Learning," IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS), pages 879–885, IEEE, 2019.
                                                        <a href="https://ieeexplore.ieee.org/document/8845171" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[VNE-TD]</span> S. Wang, J. Bi, J. Wu, A. V. Vasilakos, and Q. Fan, "VNE-TD: A Virtual Network Embedding Algorithm Based on Temporal-Difference Learning,” Computer Networks, vol. 161, pp. 251–263, Oct. 2019.
                                                        <a href="https://www.sciencedirect.com/science/article/pii/S138912861830584X" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <br/>
                                                    <div>&nbsp;&nbsp;[2018]</div>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[RDAM]</span> H. Yao, B. Zhang, P. Zhang, S Wu, C. Jiang, S. Guo, "RDAM: A Reinforcement Learning Based Dynamic Attribute Matrix Representation for Virtual Network Embedding," IEEE Transactions on Emerging Topics in Computing, 2018.
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8469054" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[Q-CD-VNE]</span> M. He, L. Zhuang, S. Tian, G. Wang, K. Zhang , "Multi-objective virtual network embedding algorithm based on Q-learning and curiosity-driven," EURASIP Journal on Wireless Communications and Networking, 2018.
                                                        <a href="https://jwcn-eurasipjournals.springeropen.com/articles/10.1186/s13638-018-1170-x" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[CNN-VNE]</span> H. Yao, X. Chen, M. Li, P. Zhang, L. Wang, "A Novel Reinforcement Learning Algorithm for Virtual Network Embedding," Neurocomputing, 2018.
                                                        <a href="https://www.sciencedirect.com/science/article/pii/S0925231218300420" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[Z-TORCH]</span> V. Sciancalepore, F. Z. Yousaf and X. Costa-Perez, "Z-TORCH: An Automated NFV Orchestration and Monitoring Solution," IEEE Transactions on Network and Service Management, 2018
                                                        <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8450000" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <br/>
                                                    <div>&nbsp;&nbsp;[2014]</div>
                                                    <li>
                                                        <span class="badge badge-warning" style="font-size: large">[Extended-QL-VNE]</span> R. Mijumbi, J.-L. Gorricho, J. Serrat, M. Claeys, F. D. Turck, and S. Latre, "Design and Evaluation of Learning Algorithms for Dynamic Resource Management in Virtual Networks," IEEE Network Operations and Management Symposium (NOMS), pages 1-9, 2014.
                                                        <a href="http://www.maps.upc.edu/rashid/files/NOMSPaper.pdf" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <lI>
                                                        <span class="badge badge-warning" style="font-size: large">[DQN-VNE]</span> R. Mijumbi, J.-L. Gorricho, J. Serrat, M. Claeys, J. Famaey, and F. D. Turck. "Neural Network-based Autonomous Allocation of Resources in Virtual Networks," IEEE European Conference on Networks and Communications (EuCNC), pages 1-6, 2014.
                                                        <a href="https://ieeexplore.ieee.org/document/6882668" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </lI>
                                                </ol>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <article>
                                            <button class="accordion">Deep RL-based Network Slicing Schemes</button>
                                            <div class="panel article-content-1 research-content">
                                                <ol class="study">
                                                    <div>&nbsp;&nbsp;[2021]</div>
                                                    <li>
                                                        Liu, Yongshuai, Jiaxin Ding and Xin Liu. “Resource Allocation Method for Network Slicing Using Constrained Reinforcement Learning.” 2021 IFIP Networking Conference, 2021.
                                                        <a href="https://dl.ifip.org/db/conf/networking/networking2021/1570719528.pdf" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        A. Rkhami, Y. Hadjadj-Aoul and A. Outtagarts, "Learn to improve: A novel deep reinforcement learning approach for beyond 5G network slicing," 2021 IEEE 18th Annual Consumer Communications & Networking Conference (CCNC), 2021.
                                                        <a href="https://ieeexplore.ieee.org/document/9369463" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Z. Mlika and S. Cherkaoui, "Network Slicing with MEC and Deep Reinforcement Learning for the Internet of Vehicles," IEEE Network, 2021.
                                                        <a href="https://ieeexplore.ieee.org/document/9318243" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Villota Jácome, et al., "Admission Control for 5G Network Slicing based on (Deep) Reinforcement Learning," TechRxiv, 2021.
                                                        <a href="https://www.techrxiv.org/articles/preprint/Admission_Control_for_5G_Network_Slicing_based_on_Deep_Reinforcement_Learning/14498190/1" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        B. Sihem, B. Bouziane, K. Adlen, "On using reinforcement learning for network slice admission control in 5G: Offline vs. online," International Journal of Communication Systems, 2021.
                                                        <a href="https://onlinelibrary.wiley.com/action/showCitFormats?doi=10.1002%2Fdac.4757" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Y. Kim and H. Lim, "Multi-Agent Reinforcement Learning-Based Resource Management for End-to-End Network Slicing," in IEEE Access, 2021.
                                                        <a href="https://ieeexplore.ieee.org/abstract/document/9400356" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Y. Shao, R. Li, Z. Zhao and H. Zhang, "Graph Attention Network-based DRL for Network Slicing Management in Dense Cellular Networks," 2021 IEEE Wireless Communications and Networking Conference (WCNC), 2021.
                                                        <a href="https://ieeexplore.ieee.org/abstract/document/9417321?casa_token=0VWha9qaWeQAAAAA:_J0dfHcmGXBM_zIjz_D3YpGDL7c_ic5Kyfp9ZNTnzhe7Zy7lT7CoWSQDImYVdwZ0JFeFqjmV6w" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Liu, Qiang, Nakjung Choi and Tao Han. “OnSlicing: online end-to-end network slicing with reinforcement learning.” Proceedings of the 17th International Conference on emerging Networking EXperiments and Technologies, 2021.
                                                        <a href="https://arxiv.org/abs/2111.01616" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <br/>
                                                    <div>&nbsp;&nbsp;[2020]</div>
                                                    <li>
                                                        Liu, Qiang, Tao Han, Ning Zhang and Ye Wang. “DeepSlicing: Deep Reinforcement Learning Assisted Resource Allocation for Network Slicing.” GLOBECOM, 2020.
                                                        <a href="https://arxiv.org/abs/2008.07614" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Liu, Qiang, Tao Han and Ephraim Moges. “EdgeSlice: Slicing Wireless Edge Computing Network with Decentralized Deep Reinforcement Learning.” 2020 IEEE 40th International Conference on Distributed Computing Systems, 2020.
                                                        <a href="https://arxiv.org/abs/2003.12911" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        L. Zhao and L. Li, "Reinforcement Learning for Resource Mapping in 5G Network Slicing," 2020 5th International Conference on Computer and Communication Systems (ICCCS), 2020.
                                                        <a href="https://ieeexplore.ieee.org/abstract/document/9118446" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Y. Liu, J. Ding and X. Liu, "A Constrained Reinforcement Learning Based Approach for Network Slicing," 2020 IEEE 28th International Conference on Network Protocols (ICNP), 2020.
                                                        <a href="https://ieeexplore.ieee.org/document/9259378" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <br/>
                                                    <div>&nbsp;&nbsp;[2019]</div>
                                                    <li>
                                                        Y. Liu, J. Ding and X. Liu, "A Constrained Reinforcement Learning Based Approach for Network Slicing," 2020 IEEE 28th International Conference on Network Protocols (ICNP), 2020.
                                                        <a href="https://ieeexplore.ieee.org/document/9259378" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        J. Koo, V. B. Mendiratta, M. R. Rahman and A. Walid, "Deep Reinforcement Learning for Network Slicing with Heterogeneous Resource Requirements and Time Varying Traffic Dynamics," 2019 15th International Conference on Network and Service Management (CNSM), 2019.
                                                        <a href="https://ieeexplore.ieee.org/document/9012702" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        V. Sciancalepore, X. Costa-Perez and A. Banchs, "RL-NSB: Reinforcement Learning-Based 5G Network Slice Broker," in IEEE/ACM Transactions on Networking, 2019.
                                                        <a href="https://ieeexplore.ieee.org/document/8765794" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Haozhe Wang, Yulei Wu, Geyong Min, Jie Xu, Pengcheng Tang, "Data-driven dynamic resource scheduling for network slicing: A Deep reinforcement learning approach," Information Sciences, 2019.
                                                        <a href="https://www.sciencedirect.com/science/article/pii/S0020025519303986" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Y. Kim, S. Kim, H. Lim, "Reinforcement Learning Based Resource Management for Network Slicing," Applied Sciences, 2019.
                                                        <a href="https://www.mdpi.com/2076-3417/9/11/2361" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        S. de Bast, R. Torrea-Duran, A. Chiumento, S. Pollin and H. Gacanin, "Deep Reinforcement Learning for Dynamic Network Slicing in IEEE 802.11 Networks," IEEE INFOCOM 2019.
                                                        <a href="https://ieeexplore.ieee.org/document/8845211" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                    <br/>
                                                    <div>&nbsp;&nbsp;[2018]</div>
                                                    <li>
                                                        R. Li et al., "Deep Reinforcement Learning for Resource Management in Network Slicing," in IEEE Access, 2018.
                                                        <a href="https://ieeexplore.ieee.org/document/8540003" target="_blank">
                                                            <img src="/assets/images/external_link.png" style="width: 1.5em;vertical-align:middle;"/>
                                                        </a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </section>

                            <br/>
                        </section>

                        <!--End Content Grid-->
                    </div>
            </div>
        </div>
        <!--End Container Div-->
    </div>
</section>
{% endblock %}

<!-- script for accordion -->
{% block additional_javascript %}
<script type="text/javascript">
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("acc_active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    for (var i = 0; i < acc.length; i++) {
        acc[i].click();
    }
</script>
{% endblock %}
