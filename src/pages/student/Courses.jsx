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
        <div className="back">
    <div className="landing Container d-flex">
        <left>
    <img src={Logo} alt=""  className="logo"/>
<h2>Design a User Experience for Social Good & Prepare for Jobs</h2>
        <p>This course is part of <span>Google UX Design Professional Certificate</span></p>
        <button>Enroll Now</button>
        <p><span className="text-decoration-none">141,864</span> already enrolled</p>
        </left>
        <right>
        <img src={course} alt="" className="mb-4 w-100"/>
        <h2> Course</h2>
        <p className="brd">Gain insight into a topic and learn the fundamentals</p>
        <h2>4.8 <img src={star} alt="" /><span>(3,066 reviews)</span>
        <img src={like} alt=""  className="like"/> <span>99%</span></h2>
        <h2>Beginner level</h2>
        <p>No previous experience necessary</p>
        <h2>24 hours (approximately) </h2>
            <h2>Flexible schedule</h2>
        <p>Learn at your own pace</p>
        </right>
    </div>

    </div>
    <div className="about Container ">
                <ul className=" d-flex">
                <li><NavLink to="" className='filter' activeClassName="active">About</NavLink></li>
                <li><NavLink to="/" className='filter' activeClassName="active">Outcomes</NavLink></li>
                <li><NavLink to="/" className='filter' activeClassName="active">Lessons</NavLink></li>
                <li><NavLink to="/" className='filter' activeClassName="active">Certificate</NavLink></li>
                <li><NavLink to="/" className='filter' activeClassName="active">Recommendations</NavLink></li>
                <li><NavLink to="/" className='filter' activeClassName="active">Reviews</NavLink></li>
            </ul>
            <h2>About course</h2>
            <p>Apply each step of the UX design thinking framework (empathize, define, ideate, prototype, test) to create a  project focused on social good.Apply each step of the UX design thinking framework (empathize, dte, , test)    focused on social good.Apply each step of the UX design thinking framework (empathize, define, ideate, prototype, test) to create a  project focused on social good. <span>Read More</span></p>
            <h3>students <span>Language</span></h3>
            <h4>120,200 <span>English</span></h4>
            <h3>Last update <span>Subtitle</span></h3>
            <h4>Tuesday, January 9 <span>English & Arabic</span></h4>
            <h3>Level <span>Access</span></h3>
            <h4>Junior <span>Web & Mobile</span></h4>
            <h2>What you&apos;ll learn</h2>
            <div className="learn d-flex flex-wrap justify-content-between">
                <p><img src={trueIcon} alt="" />Apply each step of the UX design thinking framework (empathize, define, ideate, prototype, test) to create a  project focused on social good.</p>
                <p><img src={trueIcon} alt="" />Build wireframes, mockups, and low-fidelity and high-fidelity prototypes for a dedicated mobile app and a responsive website. </p>
                <p><img src={trueIcon} alt="" />Prepare to successfully interview for an entry-level UX design job.</p>
                <p><img src={trueIcon} alt="" />Determine if freelance design work is a good career fit.</p>
            </div>
            <h2 className="mt-0">Skills you&apos;ll gain</h2>
            <div className="skills">
        <ul className="d-flex justify-content-between">
            <li>Usability Testing</li>
            <li>User Experience (UX)</li>
            <li>UX design jobs</li>
            <li>Prototype</li>
            <li className='UXD'>User Experience Design (UXD)</li>
        </ul>
        </div>
        
        <div className="enroll">
    <h2>Lessons <span>(32)</span></h2>
    <div className="content">
    <h2 className="d-flex justify-content-between">Section 1 - introduction <span>15 Min</span></h2>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>01</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={video} alt="" />
    </div>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>02</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={lock} alt="" />
    </div>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>03</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={lock} alt="" />
    </div>
    <h2 className="d-flex justify-content-between">Section 2 - Fundamentals <span>45 Min</span></h2>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>01</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={lock} alt="" />
    </div>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>02</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={lock} alt="" />
    </div>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>03</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={lock} alt="" />
    </div>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>04</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={lock} alt="" />
    </div>
    <a href="">See More</a>
    </div>
    </div>
</div>

<div className='Courses '>
    <div className="courses ">
        <div className="head Container d-flex justify-content-between">
        <h2>Recommend for you</h2>
        <p className='d-flex'>See More <img src={arrow} alt="" /></p>

        </div>
        <div className=' group d-flex'>
            <div className="course">
                <img src={course1} alt="" />
                <div className="info ">
                        <h1 className='d-flex justify-content-between'>Fundamental Of User Experience <span className='d-flex align-items-center'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between'>$250.00 <span>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course2} alt="" />
                <div className="info ">
                        <h1 className='d-flex justify-content-between'>Data base for junior <span className='d-flex align-items-center'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between'>$250.00 <span>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course3} alt="" />
                <div className="info ">
                        <h1 className='d-flex justify-content-between'>Learn Html , Css, Js and React<span className='d-flex align-items-center'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between'>$250.00 <span>Best Seller</span></p>
                </div>
            </div>
            <div className="course">
                <img src={course6} alt="" />

                <div className="info ">
                        <h1 className='d-flex justify-content-between'>First flutter To-do project <span className='d-flex align-items-center'><img src={star} alt="" />4.9</span> </h1>
                        <h2 className='d-flex justify-content-between'>Mostafa Abas <span>English</span></h2>
                        <p className='d-flex justify-content-between'>$250.00 <span>Best Seller</span></p>
                </div>
            </div>
        </div>
    </div>
 


 
        </div>
        <div className="members Container d-flex gap-4">
<div className="member">
    <div className="info d-flex align-items-center gap-3">
        <img src={member1} alt="" />
        <hgroup>
            <h1> ahmed ali
<p>Learner since 2018</p></h1>
        </hgroup>
    </div>
    <p>&#39;To be able to take courses at my own pace and rhythm has been an amazing experience.</p>
</div>
<div className="member">
    <div className="info d-flex align-items-center gap-3">
        <img src={member2} alt="" />
        <hgroup>
            <h1> Gamal mostafa
<p>Learner since 2020</p></h1>
        </hgroup>
    </div>
    <p>&#39;To be able to take courses at my own pace and rhythm has been an amazing experience.</p>
</div>
<div className="member">
    <div className="info d-flex align-items-center gap-3">
        <img src={member3} alt="" />
        <hgroup>
            <h1> yehia ahmed
<p>Learner since 2020</p></h1>
        </hgroup>
    </div>
    <p>&#39;To be able to take courses at my own pace and rhythm has been an amazing experience.</p>
</div>
<div className="member">
    <div className="info d-flex align-items-center gap-3">
        <img src={member4} alt="" />
        <hgroup>
            <h1> Abdullah zikrallah
<p>Learner since 2020</p></h1>
        </hgroup>
    </div>
    <p>&#39;To be able to take courses at my own pace and rhythm has been an amazing experience.</p>
</div>
        </div>
        <div className="reviews Container d-flex  ">
            <left className="mt-5">
                <h1>Learner reviews</h1>
                <div className="d-flex mb-2 align-items-center gap-1 "><h2 className="gap-1 d-flex"> <img src={starR} alt="" />4.8 </h2><h4>3,066 reviews</h4></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h3>5 stars</h3><div className="range  "><div className="level level3"></div></div><h4>88.58%</h4></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h3>4 stars</h3><div className="range  "><div className="level level2"></div></div><h4>9.34%</h4></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h3>3 stars</h3><div className="range  "><div className="level level1"></div></div><h4>1.13%</h4></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h3>2 stars</h3><div className="range  "><div className="level level1"></div></div><h4>0.38%</h4></div>
                <div className="d-flex mb-2 align-items-center gap-3"><h3>1 stars</h3><div className="range  "><div className="level "></div></div><h4>0.54%</h4></div>
            </left>
            <right>
                <p className="text-center">Showing 3 of 3066</p>
                <div className="member d-flex my-4 w-100">
        <img src={member1} alt="" />
    <div className="info  align-items-center gap-3">
            <h1 className="d-flex justify-content-between align-items-start"> Yahia Ahmed
<h2 className="d-flex align-items-center gap-1"><img src={star} alt="" /> 5 .  <span>  Reviewed on Oct 16, 2022</span></h2></h1>
    <p className="mt-1">Awesome course series! I learned a lot throughout the journey. I love how Google 
emphasizes inclusive and ethical design. Everything will nourish my growth. Thank 
you, Google!</p>
    </div>
</div>
                <div className="member d-flex my-4 w-100">
        <img src={member2} alt="" />
    <div className="info  align-items-center gap-3">
            <h1 className="d-flex justify-content-between align-items-start"> Yahia Ahmed
<h2 className="d-flex align-items-center gap-1"><img src={star} alt="" /> 5 .  <span>  Reviewed on Oct 16, 2022</span></h2></h1>
    <p className="mt-1">Awesome course series! I learned a lot throughout the journey. I love how Google 
emphasizes inclusive and ethical design. Everything will nourish my growth. Thank 
you, Google!</p>
    </div>
</div>
                <div className="member d-flex my-4 w-100">
        <img src={member3} alt="" />
    <div className="info  align-items-center gap-3">
            <h1 className="d-flex justify-content-between align-items-start"> Yahia Ahmed
<h2 className="d-flex align-items-center gap-1"><img src={star} alt="" /> 5 .  <span>  Reviewed on Oct 16, 2022</span></h2></h1>
    <p className="mt-1">Awesome course series! I learned a lot throughout the journey. I love how Google 
emphasizes inclusive and ethical design. Everything will nourish my growth. Thank 
you, Google!</p>
    </div>
</div>
<p className="text-center text-decoration-underline text-dark">View more reviews</p>
            </right>
        </div>
    </div>
    :<></>
}
<Footer/>
</courses>
)
}

export default Courses
