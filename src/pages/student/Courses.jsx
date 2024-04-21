import Header from "../components/Header"
import course1 from'../images/course1.jpg'
import course2 from'../images/course2.jpg'
import course3 from'../images/course3.jpg'
import course4 from'../images/course4.jpg'
import course5 from'../images/course5.jpg'
import course6 from'../images/course6.jpg'
import arrow from'../images/arrow.svg'
import star from'../images/star-icon.svg'
import starR from'../images/star-icon-review.svg'
import Logo from '../images/logo.jpg'
import course from '../images/course2.jpg'
import like from '../images/like.svg'
import video from '../images/start video.svg'
import lock from '../images/ep_lock.svg'
import trueIcon from '../images/List → Item → SVG.svg'
import member1 from '../images/member1.png'
import member2 from '../images/member2.png'
import member3 from '../images/member3.png'
import member4 from '../images/member4.png'
import Footer from "../components/Footer"
import { useState } from "react"
import { NavLink } from "react-router-dom"
const Courses = () => {
    const [page, setPage] = useState("my courses");
    var cards =document.getElementsByClassName("course");
    [...cards].forEach(card=>{
        card.addEventListener("click",()=>{
            setPage("course details")
        })
    }
    )
return (
    <courses>
<Header/>
{page==="my courses"?
<>
<div className="courses-group ">
        <div className="head mt-5 mb-4  Container d-flex justify-content-between">
        <h2 className='fs-3 fw-bolder'>Best Seller</h2>
        <p className='d-flex fs-6 ' onClick={()=>{
            setPage("all courses")
        }}>See More <img src={arrow} alt="" className='ms-2' /></p>
        </div>
        <div className=' group d-flex overflow-scroll gap-5  ms-5'>
            <div className="course">
                <img src={course1} alt="" />
                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Fundamental Of User Experience <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" className='me-2'/>4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <div className="range ">
                            <div className="level level1 position-absolute">
                            </div>
                        </div>
                        <h2 className='mt-2 d-flex justify-content-between'>Continue </h2>
                        </div>
            </div>
            <div className="course">
                <img src={course2} alt="" />
                <div className="info mt-3">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Data base for junior <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <div className="range ">
                            <div className="level level1 position-absolute">
                            </div>
                        </div>
                        <h2 className='mt-2 d-flex justify-content-between'>Continue </h2>
                        </div>
            </div>
            <div className="course">
                <img src={course3} alt="" />
                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Learn Html , Css, Js and React<span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <div className="range ">
                            <div className="level  position-absolute">
                            </div>
                        </div>
                        <h2 className='mt-2 d-flex justify-content-between'>Start course </h2>
                        </div>
            </div>
            <div className="course">
                <img src={course6} alt="" />

                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>First flutter To-do project <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <div className="range ">
                            <div className="level  position-absolute">
                            </div>
                        </div>
                        <h2 className='mt-2 d-flex justify-content-between'>Start course </h2>
                        </div>
            </div>
        </div>
    </div>
<div className="courses-group ">
        <div className="head mt-5 mb-4  Container d-flex justify-content-between">
        <h2 className='fs-3 fw-bolder'>Best Seller</h2>
        <p className='d-flex fs-6 '>See More <img src={arrow} alt="" className='ms-2' /></p>
        </div>
        <div className=' group d-flex overflow-scroll gap-5  ms-5'>
            <div className="course">
                <img src={course1} alt="" />
                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Fundamental Of User Experience <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" className='me-2'/>4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <div className="range ">
                            <div className="level level3 position-absolute">
                            </div>
                        </div>
                        <h2 className='mt-2 d-flex justify-content-between'>Completed </h2>
                        </div>
            </div>
            <div className="course">
                <img src={course2} alt="" />
                <div className="info mt-3">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Data base for junior <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <div className="range ">
                            <div className="level level3 position-absolute">
                            </div>
                        </div>
                        <h2 className='mt-2 d-flex justify-content-between'>Completed </h2>
                        </div>
            </div>
            <div className="course">
                <img src={course3} alt="" />
                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Learn Html , Css, Js and React<span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <div className="range ">
                            <div className="level level3 position-absolute">
                            </div>
                        </div>
                        <h2 className='mt-2 d-flex justify-content-between'>Completed </h2>
                        </div>
            </div>
            <div className="course">
                <img src={course6} alt="" />

                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>First flutter To-do project <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <div className="range ">
                            <div className="level level3 position-absolute">
                            </div>
                        </div>
                        <h2 className='mt-2 d-flex justify-content-between'>Completed </h2>
                        </div>
            </div>
        </div>
    </div>


    </>
    :
    page==="all courses"?
    <>
    <h1 className="text-center fw-bold mt-5">All Courses</h1>
    <div className="courses-group ">
        <div className="head mt-5 mb-4  Container d-flex justify-content-between">
        <h2 className='fs-3 fw-bolder'>Best Seller</h2>
        </div>
        <div className=' group d-flex overflow-scroll gap-5  ms-5'>
            <div className="course">
                <img src={course1} alt="" />
                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Fundamental Of User Experience <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" className='me-2'/>4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between fw-bold'>$250.00 <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course2} alt="" />
                <div className="info mt-3">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Data base for junior <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between fw-bold'>$250.00 <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course3} alt="" />
                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Learn Html , Css, Js and React<span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between fw-bold'>$250.00 <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course6} alt="" />

                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>First flutter To-do project <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between fw-bold'>$250.00 <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
                </div>
            </div>
        </div>
    </div>
    <div className="courses-group ">

    <div className="head mt-5 mb-4  Container d-flex justify-content-between">
    <h2 className='fs-3 fw-bolder '>Free Courses</h2>
    </div>
    <div className=' group d-flex overflow-scroll gap-5 ms-5'>
        <div className="course">
            <img src={course4} alt="" />
            <div className="info mt-3 ">
                    <h1 className='d-flex justify-content-between fs-6 fw-bold'>Fundamental Of User Experience <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                    <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                    <p className='d-flex justify-content-between fw-bold'>Free <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
            </div>
        </div>
        <div className="course">
            <img src={course5} alt="" />
            <div className="info mt-3 ">
                    <h1 className='d-flex justify-content-between fs-6 fw-bold'>Data base for junior <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                    <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                    <p className='d-flex justify-content-between fw-bold'>Free <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
            </div>
        </div>

        <div className="course">
            <img src={course6} alt="" />

            <div className="info mt-3 ">
                    <h1 className='d-flex justify-content-between  fs-6 fw-bold'>First flutter To-do project <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                    <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                    <p className='d-flex justify-content-between fw-bold'>Free <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
            </div>
        </div>
        <div className="course">
            <img src={course3} alt="" />
            <div className="info mt-3 ">
                    <h1 className='d-flex justify-content-between fs-6 fw-bold'>Learn Html , Css, Js and React<span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                    <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                    <p className='d-flex justify-content-between fw-bold'>Free <span >Best Seller</span></p>
            </div>
        </div>
    </div>
</div>
    <div className="courses-group ">

    <div className="head mt-5 mb-4  Container d-flex justify-content-between">
    <h2 className='fs-3 fw-bolder '>For You</h2>
    </div>
    <div className=' group d-flex overflow-scroll gap-5 ms-5'>
        <div className="course">
            <img src={course2} alt="" />
            <div className="info mt-3 ">
                    <h1 className='d-flex justify-content-between fs-6 fw-bold'>Fundamental Of User Experience <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                    <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                    <p className='d-flex justify-content-between fw-bold'>Free <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
            </div>
        </div>
        <div className="course">
            <img src={course1} alt="" />
            <div className="info mt-3 ">
                    <h1 className='d-flex justify-content-between fs-6 fw-bold'>Data base for junior <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                    <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                    <p className='d-flex justify-content-between fw-bold'>Free <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
            </div>
        </div>

        <div className="course">
            <img src={course4} alt="" />

            <div className="info mt-3 ">
                    <h1 className='d-flex justify-content-between  fs-6 fw-bold'>First flutter To-do project <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                    <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                    <p className='d-flex justify-content-between fw-bold'>Free <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
            </div>
        </div>
        <div className="course">
            <img src={course6} alt="" />
            <div className="info mt-3 ">
                    <h1 className='d-flex justify-content-between fs-6 fw-bold'>Learn Html , Css, Js and React<span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                    <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                    <p className='d-flex justify-content-between fw-bold'>Free <span >Best Seller</span></p>
            </div>
        </div>
    </div>
</div>


</>

    :page==="course details"?
    <div className="details">
        <div className="back mt-4= ">
    <div className="landing Container d-flex flex-column-reverse flex-lg-row pt-5 gap-5 ">
        <left className=" ">
    <img src={Logo} alt=""  className="logo "/>
<h2 className="mt-5 fw-semibold pe-5 me-5">Design a User Experience for Social Good & Prepare for Jobs</h2>
        <h6 className="my-4">This course is part of <span className="fw-semibold text-decoration-underline">Google UX Design Professional Certificate</span></h6>
        <submitButton className='py-3 mb-3 '><a href="/payment"> Enroll Now</a></submitButton>
        <h6><span className="text-decoration-none fw-bold">141,864</span> already enrolled</h6>
        <ul className=" d-flex my-5 justify-content-between flex-wrap flex-md-nowrap px-2  pb-4">
                <li><NavLink to=""  activeClassName="active">About</NavLink></li>
                <li><NavLink to="/"  activeClassName="active">Outcomes</NavLink></li>
                <li><NavLink to="/"  activeClassName="active">Lessons</NavLink></li>
                <li><NavLink to="/"  activeClassName="active">Certificate</NavLink></li>
                <li><NavLink to="/"  activeClassName="active">Recommendations</NavLink></li>
                <li><NavLink to="/"  activeClassName="active">Reviews</NavLink></li>
            </ul>
            <div className="about">
            <h4 className="fw-semibold">About course</h4>
<p className="mt-4 mb-5">Apply each step of the UX design thinking framework (empathize, define, ideate, prototype, test) to create a  project focused on social good.Apply each step of the UX design thinking framework (empathize, dte, , test)    focused on social good.Apply each step of the UX design thinking framework (empathize, define, ideate, prototype, test) to create a  project focused on social good. <span className="fw-semibold text-decoration-underline">Read More</span></p>
            <div className="width my-5 w-50 ">
<h5 className="d-flex justify-content-between">students <span>Language</span></h5>
<h6 className="d-flex justify-content-between my-3">120,200 <span  >English </span></h6>
<h5 className="d-flex justify-content-between" >Last update <span>Subtitle</span></h5>
<h6 className="d-flex justify-content-between my-3">Tuesday, January 9 <span>English & Arabic</span></h6>
<h5 className="d-flex justify-content-between">Level <span>Access</span></h5>
<h6 className="d-flex justify-content-between my-3">Junior <span>Web & Mobile</span></h6>
</div>
</div>

<h4 className="fw-semibold mt-5">What you&apos;ll learn</h4>
<div className="learn d-flex flex-column flex-sm-row justify-content-between gap-5 g-3">
    <div className="left w-50">
    <p className=" d-flex align-items-center my-4"><img src={trueIcon} alt="" className="me-3"/>Apply each step of the UX design thinking framework (empathize, define, ideate, prototype, test) to create a  project focused on social good.</p>
    <p className=" d-flex align-items-center my-4 "><img src={trueIcon} alt="" className="me-3"/>Prepare to successfully interview for an entry-level UX design job.</p>
    </div>
    <div className="right w-50">
    <p className=" d-flex align-items-center my-4"><img src={trueIcon} alt="" className="me-3"/>Build wireframes, mockups, and low-fidelity and high-fidelity prototypes for a dedicated mobile app and a responsive website. </p>
    <p className=" d-flex align-items-center my-4"><img src={trueIcon} alt="" className="me-3"/>Determine if freelance design work is a good career fit.</p>
</div>
</div>
<h4 className="fw-semibold mt-3 mb-4">Skills you&apos;ll gain</h4>
<ul className="skills d-flex justify-content-between flex-column flex-md-row  ps-0">
<li>Usability Testing</li>
<li>User Experience (UX)</li>
<li>UX design jobs</li>
<li>Prototype</li>
<li >User Experience Design (UXD)</li>
</ul>



        </left>
        <right className="mx-auto p-3 mt-5 ">
        <img src={course} alt="" className="mb-4 w-100"/>
        <h5 className="fw-semibold"> Course</h5>
        <h6 className="brd pb-2">Gain insight into a topic and learn the fundamentals</h6>
        <h6 className="d-flex align-items-center my-4 "><span className="fs-5 fw-semibold me-1">4.8 </span><img src={star} alt="" width={15} className="me-1"/> < tag className="brd2 pe-2">(3,066 reviews)</tag>
        <img src={like} alt=""  className="like ms-2 me-1 "/> 99%</h6>
        <h5 className="fw-semibold">Beginner level</h5>
        <h6  >No previous experience necessary</h6 >
        <h5 className="fw-semibold">24 hours (approximately) </h5>
            <h5 className="fw-semibold">Flexible schedule</h5>
        <h6 >Learn at your own pace</h6 >
        </right>
    </div>

    </div>


    <div className="courses-group ">
        <div className="head mt-5 mb-4  Container d-flex justify-content-between">
        <h2 className='fs-3 fw-bolder'>Recommend for you</h2>
        <p className='d-flex fs-6 ' onClick={()=>{
            setPage("all courses")
        }}>See More <img src={arrow} alt="" className='ms-2' /></p>
        </div>
        <div className=' group d-flex overflow-scroll gap-5  ms-5'>
            <div className="course">
                <img src={course1} alt="" />
                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Fundamental Of User Experience <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" className='me-2'/>4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between fw-bold'>$250.00 <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course2} alt="" />
                <div className="info mt-3">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Data base for junior <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between fw-bold'>$250.00 <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course3} alt="" />
                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>Learn Html , Css, Js and React<span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between fw-bold'>$250.00 <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course6} alt="" />

                <div className="info mt-3 ">
                        <h1 className='d-flex justify-content-between fs-6 fw-bold'>First flutter To-do project <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between fw-bold'>$250.00 <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
                </div>
            </div>
        </div>
    </div>
    
        <div className="members Container flex-wrap flex-md-nowrap d-flex gap-4">
<div className="member p-3">
    <div className="info d-flex align-items-center gap-3">
        <img src={member1} alt="" />
        <hgroup>
            <h6 className="fw-semibold"> ahmed ali
<p className="fw-medium mt-1">Learner since 2018</p></h6>
        </hgroup>
    </div>
    <p className="my-3">&#39;To be able to take courses at my own pace and rhythm has been an amazing experience.</p>
</div>
<div className="member p-3">
    <div className="info d-flex align-items-center gap-3">
        <img src={member2} alt="" />
        <hgroup>
            <h6 className="fw-semibold"> Gamal mostafa
<p className="fw-medium mt-1">Learner since 2020</p></h6>
        </hgroup>
    </div>
    <p className="my-3">&#39;To be able to take courses at my own pace and rhythm has been an amazing experience.</p>
</div>
<div className="member p-3">
    <div className="info d-flex align-items-center gap-3">
        <img src={member3} alt="" />
        <hgroup>
            <h6 className="fw-semibold"> yehia ahmed
<p className="fw-medium mt-1">Learner since 2020</p></h6>
        </hgroup>
    </div>
    <p className="my-3">&#39;To be able to take courses at my own pace and rhythm has been an amazing experience.</p>
</div>
<div className="member p-3">
    <div className="info d-flex align-items-center gap-3">
        <img src={member4} alt="" />
        <hgroup>
            <h6 className="fw-semibold"> Abdullah zikrallah
<p className="fw-medium mt-1">Learner since 2020</p></h6>
        </hgroup>
    </div>
    <p className="my-3">&#39;To be able to take courses at my own pace and rhythm has been an amazing experience.</p>
</div>
        </div>

        <div className="reviews Container d-flex flex-column flex-md-row gap-5  my-5 ">
            <div className="left mt-5 ">
                <h5 className="fw-semibold">Learner reviews</h5>
                <h3 className="gap-2 d-flex align-items-center fw-semibold my-4"> <img src={starR} alt="" />4.8 <span className="fs-6 fw-normal">3,066 reviews</span></h3>
                <div className="d-flex mb-2 align-items-center gap-3"><h6 className="fw-bold">5 stars</h6><progress value={.9} className="w-100"/><h6 >88.58%</h6></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h6 className="fw-bold">4 stars</h6><progress value={.3} className="w-100"/><h6>9.34%</h6></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h6 className="fw-bold" >3 stars</h6><progress value={.2} className="w-100"/><h6>1.13%</h6></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h6 className="fw-bold">2 stars</h6><progress value={.1} className="w-100"/><h6>0.38%</h6></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h6 className="fw-bold">1 stars</h6><progress value={0} className="w-100"/><h6>0.54%</h6></div>
            </div>
            <div className="right ">
                <p className="text-center">Showing 3 of 3066</p>
                <div className="member d-flex my-4 w-100 py-4 pe-5 ps-4 gap-4">
        <img src={member1} alt=""  className="rounded-circle h-100 "/>
    <div className="info  align-items-center gap-3">
            <h6 className="d-flex justify-content-between flex-column flex-md-row  fw-semibold "> Yahia Ahmed
<h6 className="d-sm-flex align-items-center gap-1 pt-2 pt-md-0 fw-semibold"><img src={star} alt="" width={15}/> 5 .  <span className="fw-normal">  Reviewed on Oct 16, 2022</span></h6></h6>
    <p className="mt-1">Awesome course series! I learned a lot throughout the journey. I love how Google 
emphasizes inclusive and ethical design. Everything will nourish my growth. Thank 
you, Google!</p>
    </div>
</div>
                <div className="member d-flex my-4 w-100 py-4 pe-5 ps-4 gap-4">
        <img src={member2} alt=""  className="rounded-circle h-100 "/>
    <div className="info  align-items-center gap-3">
            <h6 className="d-flex justify-content-between flex-column flex-md-row fw-semibold "> Yahia Ahmed
<h6 className="d-sm-flex align-items-center gap-1 pt-2 pt-md-0 fw-semibold"><img src={star} alt="" width={15}/> 5 .  <span className="fw-normal">  Reviewed on Oct 16, 2022</span></h6></h6>
    <p className="mt-1">Awesome course series! I learned a lot throughout the journey. I love how Google 
emphasizes inclusive and ethical design. Everything will nourish my growth. Thank 
you, Google!</p>
    </div>
</div>
                <div className="member d-flex my-4 w-100 py-4 pe-5 ps-4 gap-4">
        <img src={member3} alt=""  className="rounded-circle h-100 "/>
    <div className="info  align-items-center gap-3">
            <h6 className="d-flex justify-content-between flex-column flex-md-row fw-semibold "> Yahia Ahmed
<h6 className="d-sm-flex align-items-center gap-1 pt-2 pt-md-0 fw-semibold"><img src={star} alt="" width={15}/> 5 .  <span className="fw-normal">  Reviewed on Oct 16, 2022</span></h6></h6>
    <p className="mt-1">Awesome course series! I learned a lot throughout the journey. I love how Google 
emphasizes inclusive and ethical design. Everything will nourish my growth. Thank 
you, Google!</p>
    </div>
</div>
<p className="text-center text-decoration-underline text-dark ">View more reviews</p>
            </div>
        </div>
    </div>
    :<></>
}
<Footer/>
</courses>
)
}

export default Courses
