import React from 'react'
import { SiFigma, SiMongodb, SiMui, SiNodedotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { UilHtml5, UilCss3Simple, UilJavaScript, UilReact } from '@iconscout/react-unicons'
import 'react-vertical-timeline-component/style.min.css';
import { HiAcademicCap } from 'react-icons/hi'
import { FaBootstrap, FaSchool, FaUniversity } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FcCopyright } from 'react-icons/fc';
import '../css/resume.css'
export default function Resume() {
    return (
        <>
            <section className='edg'>


                <div className='container-fluid'  >
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="edu ">
                                <div class=" text-light">
                                    <h1 className='text-center text-warning' >Education</h1>
                                </div>

                                <VerticalTimeline>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                        date="2019 - 2022"
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={<HiAcademicCap />}
                                    >
                                        <h3 className="vertical-timeline-element-title">Bachelor's of Computer Application</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Dr.Babasaheb Ambedkar Marathwada Univerisity</h4>
                                        <p>
                                            Aurangabad , Maharashtra.
                                            <p>Percentage : 69%</p>
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2018 - 2019"
                                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                        icon={<FaUniversity />}
                                    >
                                        <h3 className="vertical-timeline-element-title">HSC</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Maharashtra Sate Board</h4>
                                        <p>
                                            Aurangabad, Maharashtra
                                            <p>Percentage: 73.08%</p>
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2016 - 2017"
                                        contentStyle={{ background: 'rgb(90, 150, 50)', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(90, 150, 50)' }}
                                        iconStyle={{ background: 'rgb(90, 150, 50)', color: '#fff' }}
                                        icon={<FaSchool />}
                                    >
                                        <h3 className="vertical-timeline-element-title">SSC</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Maharashtra State Board</h4>
                                        <p>
                                            Aurangabad, Maharashtra.
                                            <p>Percentage - 73.80%</p>
                                        </p>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <hr className='text-danger line' /> */}
            </section>
            {/* <section className='skl'>
                <div className="container">
                    <div className="skills pt-5 ">
                        <h1 className='text-light text-center'>Skills</h1>
                        <div className="skill my-4 d-flex justify-content-center align-items-center">
                            <div className="col-sm-3 gap-sm-2 mx-auto gap-lg-4 col-lg-10 d-flex flex-wrap justify-content-between align-items-center">
                                <div className="col-sm-3 gap-sm-2 gap-lg-5 col-lg-10 d-flex flex-wrap justify-content-between align-items-center mx-auto">
                                    <div className="icon align-items-center justify-content-center">
                                        <FcCopyright size="140" />
                                        <p className=' mx-3' style={{ color: '#764abc' }}><strong>C Programming</strong></p>
                                    </div>

                                    <div className="icon align-items-center justify-content-center">
                                        <UilHtml5 size="140" color="#E48600" />
                                        <p className='text-warning mx-5'><strong>HTML</strong></p>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        <UilCss3Simple size="140" color="#006DE4" />
                                        <p className='text-primary mx-5'><strong>CSS</strong></p>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        <FaBootstrap size="140" color="#764abc" />
                                        <p className=' mx-4' style={{ color: '#764abc' }}><strong>Bootstrap 5</strong></p>
                                    </div>

                                </div>

                                <div className="col-sm-3 gap-sm-2 gap-lg-5 col-lg-10 d-flex flex-wrap justify-content-between align-items-center mx-auto">
                                    <div className="icon align-items-center justify-content-center">
                                        < UilJavaScript size="140" color="#FFEF07" />
                                        <p className=' mx-5' style={{ color: "#ffee07" }} ><strong>Javascript</strong></p>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        < UilReact size="140" color="#0785FF" />
                                        <p className='text-primary mx-5'><strong>React js</strong></p>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        <SiRedux size="140" color="#765abc" />
                                        <p className=' mx-5' style={{ color: '#765abc' }}><strong>Redux</strong></p>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        <SiNodedotjs size="140" color="#07ff24" />
                                        <p className=' mx-5' style={{ color: '#07ff24' }}><strong>Node Js</strong></p>
                                    </div>
                                </div>
                                <div className="col-sm-3 gap-sm-2 gap-lg-5 col-lg-10 d-flex flex-wrap justify-content-between align-items-center mx-auto">
                                    <div className="icon align-items-center justify-content-center">
                                        <SiTypescript size="130" color="#0785ff" />
                                        <p className=' mx-4' style={{ color: '#0785FF' }}><strong>TypeScript</strong></p>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        <TbBrandNextjs size="140" color="white" />
                                        <p className=' mx-5' style={{ color: '#fFF' }}><strong>Next JS</strong></p>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        <SiMui size="130" color="0785FF" />
                                        <p className=' mx-5' style={{ color: '#0785FF' }}><strong>MUI</strong></p>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        <SiTailwindcss size="140" color="white" />
                                        <p className=' mx-4' style={{ color: 'white' }}><strong>Tailwind CSS</strong></p>
                                    </div>

                                    <div className="col-mg-10 gap-lg-5 gap-sm-2 d-flex flex-wrap justify-content-between align-items-center mx-auto">
                                        <div className="icon align-items-center justify-content-center">
                                            <SiMongodb size="140" color="#084e10" />
                                            <p className='mx-4' style={{ color: '#084e10' }}><strong>Mongo DB</strong></p>
                                        </div>
                                        <div className="icon align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" data-name="Layer 1" viewBox="0 0 256 256" id="adobe-photoshop"><g data-name="Photo Surface"><rect width="240" height="232" x="8" y="12" fill="#001e36" data-name="Outline no shadow" rx="42"></rect></g><path fill="#31a8ff" d="M58 182.88V74a1 1 0 011.12-1.12C67.23 72.67 76.8 72 89.28 72c14.72 0 25.52 3.07 32.4 9.68A32.6 32.6 0 01132 106.16q0 18.09-12.8 26.88T87 141.84L78 142v40.72A1.13 1.13 0 0176.72 184H59.28C58.43 184 58 183.63 58 182.88zM78 87.62V127s4.56-.18 10-.18q10.73 0 17.36-4.72T112 106.64q0-9.44-5.84-14.56T89.28 87c-1.81 0-3.6 0-5.36.08s-3.2.08-4.32.08S77.88 87.12 78 87.62zM198 158c0 12.25-8 18-8 18v-.06c-.48.47-1 .91-1.51 1.34Q180.23 184 166.16 184t-23-5.18a1.51 1.51 0 01-1-1.63V162.12a1 1 0 01.4-.89.54.54 0 01.72.08 36.41 36.41 0 0022.24 7.78q5.59 0 8.56-2a6.15 6.15 0 003-5.27 7.72 7.72 0 00-2.4-5.75q-2.4-2.36-9.44-5.11-12.81-5-17.84-10.78A20.48 20.48 0 01142 126a22.84 22.84 0 017.84-17.21q7.51-6.81 21.44-6.81 13 0 20 3.57c.53.32.8 1 .8 2.1v13.45c0 1.3-.48 1.62-1.44 1a34.53 34.53 0 00-18.72-5.67c-3.74 0-6.48.71-8.24 2.11a6.27 6.27 0 00-2.64 5 6.9 6.9 0 002.24 5.11q2.24 2.19 9.44 5.1 12.56 4.91 18 10.32l.09.09C194.54 147.59 198 152.31 198 158z"></path></svg>
                                        <p className=' mx-4' style={{ color: 'aqua' }}><strong>Photoshop</strong></p>
                                    </div>
                                        <div className="icon align-items-center justify-content-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" id="figma"><path fill="#0ACF83" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"></path><path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"></path><path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"></path><path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"></path><path fill="#1ABCFE" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"></path></svg>
                                            <p className=' mx-4' style={{ color: 'white' }}><strong>Figma</strong></p>
                                        </div>
                                    </div>
                                    <div className="icon align-items-center justify-content-center">
                                        <svg size="140px" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" width="120" height="120" version="1" viewBox="0 0 512 512" id="adobe-adobe-xd"><path fill="#FF26BE" d="M93.867,12.801h324.267c51.733,0,93.867,42.133,93.867,93.867v311.467
			c0,51.733-42.133,93.867-93.867,93.867H93.867c-51.733,0-93.867-42.133-93.867-93.867V106.668
			C0.001,54.934,42.134,12.801,93.867,12.801"></path><path fill="#2E001F" d="M98.133,34.134h315.733c42.667,0,76.8,34.133,76.8,76.8v302.933c0,42.667-34.133,76.8-76.8,76.8H98.133
			c-42.667,0-76.8-34.133-76.8-76.8V110.934C21.333,68.268,55.466,34.134,98.133,34.134"></path><path fill="#FFF" d="M205.28,257.32l60.041,116.436c1.072,1.715,0.429,3.431-1.287,3.431h-37.526
			c-1.973,0.261-3.857-0.905-4.503-2.788c-13.724-28.305-27.733-57.682-42.029-88.132h-0.214
			c-12.866,28.734-26.804,60.041-40.742,88.346c-0.703,1.484-2.219,2.41-3.86,2.359H99.565c-2.144,0-2.359-1.715-1.287-3.002
			l58.969-113.006l-56.824-112.577c-0.746-0.719-0.768-1.907-0.049-2.653c0.402-0.417,0.974-0.625,1.55-0.563h36.882
			c2.144,0,3.216,0.429,3.86,2.359c13.509,28.734,27.018,56.824,39.884,85.558h0.429c12.437-28.305,26.161-56.824,39.241-84.915
			c1.072-1.715,1.715-2.788,3.86-2.788h34.524c1.715,0,2.359,1.287,1.287,3.216L205.28,257.32z M278.401,292.058
			c0-49.963,32.165-88.989,84.915-88.989c3.722-0.075,7.445,0.068,11.15,0.429v-55.752c0-1.184,0.96-2.144,2.144-2.144l0,0h34.524
			c1.715,0,2.144,0.643,2.144,1.715v195.991c-0.126,7.021,0.232,14.043,1.072,21.014c0,1.501,0,1.715-1.287,2.359
			c-17.146,8.175-35.899,12.424-54.895,12.437C311.638,379.117,278.401,350.383,278.401,292.058z M374.467,237.163
			c-3.942-1.606-8.185-2.337-12.437-2.144c-26.804,0-45.031,20.8-45.031,55.323c0,39.455,18.441,55.323,42.457,55.323
			c5.036,0.141,10.054-0.659,14.796-2.359V237.163H374.467z"></path><path fill="#FF26BE" d="M205.28,257.32l60.041,116.436c1.072,1.715,0.429,3.431-1.287,3.431h-37.526
				c-1.973,0.261-3.857-0.905-4.503-2.788c-13.724-28.305-27.733-57.682-42.029-88.132h-0.214
				c-12.866,28.734-26.804,60.041-40.742,88.346c-0.703,1.484-2.219,2.41-3.86,2.359H99.565c-2.144,0-2.359-1.715-1.287-3.002
				l58.969-113.006l-56.824-112.577c-0.746-0.719-0.768-1.907-0.049-2.653c0.402-0.417,0.974-0.625,1.55-0.563h36.882
				c2.144,0,3.216,0.429,3.86,2.359c13.509,28.734,27.018,56.824,39.884,85.558h0.429c12.437-28.305,26.161-56.824,39.241-84.915
				c1.072-1.715,1.715-2.788,3.86-2.788h34.524c1.715,0,2.359,1.287,1.287,3.216L205.28,257.32z M278.401,292.058
				c0-49.963,32.165-88.989,84.915-88.989c3.722-0.075,7.445,0.068,11.15,0.429v-55.752c0-1.184,0.96-2.144,2.144-2.144l0,0h34.524
				c1.715,0,2.144,0.643,2.144,1.715v195.991c-0.126,7.021,0.232,14.043,1.072,21.014c0,1.501,0,1.715-1.287,2.359
				c-17.146,8.175-35.899,12.424-54.895,12.437C311.638,379.117,278.401,350.383,278.401,292.058z M374.467,237.163
				c-3.942-1.606-8.185-2.337-12.437-2.144c-26.804,0-45.031,20.8-45.031,55.323c0,39.455,18.441,55.323,42.457,55.323
				c5.036,0.141,10.054-0.659,14.796-2.359V237.163H374.467z" opacity=".15"></path></svg>
                                        <p className=' mx-4' style={{ color: 'white' }}><strong>Adobe XD</strong></p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div class="ag-format-container">
                <div class="ag-courses_box">
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>
                            <div class="ag-courses-item_title text-center">
                            <FcCopyright size="140" />
                            </div>
                            <div class="ag-courses-item_date-box text-center">
                                <span class="ag-courses-item_date" style={{ color: '#764abc' }} >
                                   C Programming
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>
                            <div class="ag-courses-item_title ">
                            <UilHtml5 size="140" color="#E48600" />
                            </div>

                            <div class="ag-courses-item_date-box text-warning">
                               
                                <span class="ag-courses-item_date">
                                   HTML
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title ">
                            <UilCss3Simple size="140" color="#006DE4" />
                            </div>

                            <div class="ag-courses-item_date-box text-primary">
                              
                                <span class="ag-courses-item_date">
                                   CSS
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <FaBootstrap size="140" color="#764abc" />
                            </div>

                            <div class="ag-courses-item_date-box">
                              
                                <span class="ag-courses-item_date" style={{color:'#764abc'}} >
                                    Bootstrap 
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            < UilJavaScript size="140" color="#FFEF07" />
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#FFEF07'}} >
                              
                                <span class="ag-courses-item_date">
                                    Javascript
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            < UilReact size="140" color="#0785FF"/>
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#0785FF'}} >
                              
                                <span class="ag-courses-item_date">
                                    Reactjs
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <SiRedux size="140" color="#765abc" />
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#765abc'}} >
                              
                                <span class="ag-courses-item_date">
                                   Redux
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <SiTypescript size="130" color="#0785ff" />
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#0785ff'}} >
                              
                                <span class="ag-courses-item_date">
                                   TypeScript
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <SiNodedotjs size="140" color="#07ff24" />
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#07ff24'}} >
                              
                                <span class="ag-courses-item_date">
                                   Nodejs
                                </span>
                            </div>
                        </a>
                    </div>
                   
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <TbBrandNextjs size="140" color="white" />
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#fff'}} >
                              
                                <span class="ag-courses-item_date">
                                   Nexjs
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <SiMui size="130" color="0785FF" />
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#0785ff'}} >
                              
                                <span class="ag-courses-item_date">
                                   Nexjs
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <SiTailwindcss size="140" color="white" />
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#fff'}} >
                              
                                <span class="ag-courses-item_date">
                                   Tailwind CSS
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <SiMongodb size="140" color="#084e10" />
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#084e10'}} >
                              
                                <span class="ag-courses-item_date">
                                   Mongo DB
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" data-name="Layer 1" viewBox="0 0 256 256" id="adobe-photoshop"><g data-name="Photo Surface"><rect width="240" height="232" x="8" y="12" fill="#001e36" data-name="Outline no shadow" rx="42"></rect></g><path fill="#31a8ff" d="M58 182.88V74a1 1 0 011.12-1.12C67.23 72.67 76.8 72 89.28 72c14.72 0 25.52 3.07 32.4 9.68A32.6 32.6 0 01132 106.16q0 18.09-12.8 26.88T87 141.84L78 142v40.72A1.13 1.13 0 0176.72 184H59.28C58.43 184 58 183.63 58 182.88zM78 87.62V127s4.56-.18 10-.18q10.73 0 17.36-4.72T112 106.64q0-9.44-5.84-14.56T89.28 87c-1.81 0-3.6 0-5.36.08s-3.2.08-4.32.08S77.88 87.12 78 87.62zM198 158c0 12.25-8 18-8 18v-.06c-.48.47-1 .91-1.51 1.34Q180.23 184 166.16 184t-23-5.18a1.51 1.51 0 01-1-1.63V162.12a1 1 0 01.4-.89.54.54 0 01.72.08 36.41 36.41 0 0022.24 7.78q5.59 0 8.56-2a6.15 6.15 0 003-5.27 7.72 7.72 0 00-2.4-5.75q-2.4-2.36-9.44-5.11-12.81-5-17.84-10.78A20.48 20.48 0 01142 126a22.84 22.84 0 017.84-17.21q7.51-6.81 21.44-6.81 13 0 20 3.57c.53.32.8 1 .8 2.1v13.45c0 1.3-.48 1.62-1.44 1a34.53 34.53 0 00-18.72-5.67c-3.74 0-6.48.71-8.24 2.11a6.27 6.27 0 00-2.64 5 6.9 6.9 0 002.24 5.11q2.24 2.19 9.44 5.1 12.56 4.91 18 10.32l.09.09C194.54 147.59 198 152.31 198 158z"></path></svg>
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'aqua'}} >
                              
                                <span class="ag-courses-item_date">
                                   Photoshop
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" id="figma"><path fill="#0ACF83" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"></path><path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"></path><path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"></path><path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"></path><path fill="#1ABCFE" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"></path></svg>
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'#F24E1E'}} >
                              
                                <span class="ag-courses-item_date">
                                  Figma
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link text-center">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                            <svg size="140px" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" width="120" height="120" version="1" viewBox="0 0 512 512" id="adobe-adobe-xd"><path fill="#FF26BE" d="M93.867,12.801h324.267c51.733,0,93.867,42.133,93.867,93.867v311.467
			c0,51.733-42.133,93.867-93.867,93.867H93.867c-51.733,0-93.867-42.133-93.867-93.867V106.668
			C0.001,54.934,42.134,12.801,93.867,12.801"></path><path fill="#2E001F" d="M98.133,34.134h315.733c42.667,0,76.8,34.133,76.8,76.8v302.933c0,42.667-34.133,76.8-76.8,76.8H98.133
			c-42.667,0-76.8-34.133-76.8-76.8V110.934C21.333,68.268,55.466,34.134,98.133,34.134"></path><path fill="#FFF" d="M205.28,257.32l60.041,116.436c1.072,1.715,0.429,3.431-1.287,3.431h-37.526
			c-1.973,0.261-3.857-0.905-4.503-2.788c-13.724-28.305-27.733-57.682-42.029-88.132h-0.214
			c-12.866,28.734-26.804,60.041-40.742,88.346c-0.703,1.484-2.219,2.41-3.86,2.359H99.565c-2.144,0-2.359-1.715-1.287-3.002
			l58.969-113.006l-56.824-112.577c-0.746-0.719-0.768-1.907-0.049-2.653c0.402-0.417,0.974-0.625,1.55-0.563h36.882
			c2.144,0,3.216,0.429,3.86,2.359c13.509,28.734,27.018,56.824,39.884,85.558h0.429c12.437-28.305,26.161-56.824,39.241-84.915
			c1.072-1.715,1.715-2.788,3.86-2.788h34.524c1.715,0,2.359,1.287,1.287,3.216L205.28,257.32z M278.401,292.058
			c0-49.963,32.165-88.989,84.915-88.989c3.722-0.075,7.445,0.068,11.15,0.429v-55.752c0-1.184,0.96-2.144,2.144-2.144l0,0h34.524
			c1.715,0,2.144,0.643,2.144,1.715v195.991c-0.126,7.021,0.232,14.043,1.072,21.014c0,1.501,0,1.715-1.287,2.359
			c-17.146,8.175-35.899,12.424-54.895,12.437C311.638,379.117,278.401,350.383,278.401,292.058z M374.467,237.163
			c-3.942-1.606-8.185-2.337-12.437-2.144c-26.804,0-45.031,20.8-45.031,55.323c0,39.455,18.441,55.323,42.457,55.323
			c5.036,0.141,10.054-0.659,14.796-2.359V237.163H374.467z"></path><path fill="#FF26BE" d="M205.28,257.32l60.041,116.436c1.072,1.715,0.429,3.431-1.287,3.431h-37.526
				c-1.973,0.261-3.857-0.905-4.503-2.788c-13.724-28.305-27.733-57.682-42.029-88.132h-0.214
				c-12.866,28.734-26.804,60.041-40.742,88.346c-0.703,1.484-2.219,2.41-3.86,2.359H99.565c-2.144,0-2.359-1.715-1.287-3.002
				l58.969-113.006l-56.824-112.577c-0.746-0.719-0.768-1.907-0.049-2.653c0.402-0.417,0.974-0.625,1.55-0.563h36.882
				c2.144,0,3.216,0.429,3.86,2.359c13.509,28.734,27.018,56.824,39.884,85.558h0.429c12.437-28.305,26.161-56.824,39.241-84.915
				c1.072-1.715,1.715-2.788,3.86-2.788h34.524c1.715,0,2.359,1.287,1.287,3.216L205.28,257.32z M278.401,292.058
				c0-49.963,32.165-88.989,84.915-88.989c3.722-0.075,7.445,0.068,11.15,0.429v-55.752c0-1.184,0.96-2.144,2.144-2.144l0,0h34.524
				c1.715,0,2.144,0.643,2.144,1.715v195.991c-0.126,7.021,0.232,14.043,1.072,21.014c0,1.501,0,1.715-1.287,2.359
				c-17.146,8.175-35.899,12.424-54.895,12.437C311.638,379.117,278.401,350.383,278.401,292.058z M374.467,237.163
				c-3.942-1.606-8.185-2.337-12.437-2.144c-26.804,0-45.031,20.8-45.031,55.323c0,39.455,18.441,55.323,42.457,55.323
				c5.036,0.141,10.054-0.659,14.796-2.359V237.163H374.467z" opacity=".15"></path></svg>
                            </div>

                            <div class="ag-courses-item_date-box" style={{color:'white'}} >
                              
                                <span class="ag-courses-item_date">
                                  Adobe XD
                                </span>
                            </div>
                        </a>
                    </div>

                   









                </div>
            </div>
        </>

    )
}
