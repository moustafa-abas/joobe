import left from'../../images/landing-left.jpg'
import right from'../../images/landing-right.png'
import learn from'../../images/Learn More icon.svg'
import smile from'../../images/smile.svg'
import jobs from'../../images/jobs icon.svg'
import internship from'../../images/intership icon.svg'
import courses from'../../images/courses icon.svg'
import quiz from'../../images/quiz icon.svg'
import community from'../../images/community icon.svg'
import creative from'../../images/creative icon.svg'
import quizzes from'../../images/quizes.svg'
import course1 from'../../images/course1.jpg'
import course2 from'../../images/course2.jpg'
import course3 from'../../images/course3.jpg'
import course4 from'../../images/course4.jpg'
import course5 from'../../images/course5.jpg'
import course6 from'../../images/course6.jpg'
import arrow from'../../images/arrow.svg'
import star from'../../images/star-icon.svg'
import Job from '../../components/job'
import Footer from "../../components/Footer"
import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getJobs } from '../store/JobsSlice'
import {  getCourses } from '../store/CoursesSlice'

const Home = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(getJobs())
dispatch(getCourses())
    },[])
return (
<div className="home">
<Header/> 
        <div className='landing Container d-flex mt-3'>
            <div className='left d-flex flex-column'>
                <img src={left} alt="" />
                <div className='buttons d-flex flex-column flex-md-row gap-3 mt-4'>
                <button className="start px-5 py-2 ">Get Started</button>
                <button className="learn py-2 fw-light text-dark "><img src={learn} alt="" className='w-25 border-0 me-3' />Learn More</button>
                </div>
            </div>
            <div className='right'>
            <img src={right} alt="" />
            </div>
        </div>

<div className="services  mt-5 py-5">
<h1 className="text-center fw-bold mb-4">Services</h1>
<ul className="d-flex flex-column flex-sm-row flex-wrap mx-auto justify-content-center ">
<li className="white d-flex flex-column py-4 fw-bolder fs-5"><img src={courses} alt="" className='mb-3 pb-3 ' />Courses</li>
<li className="blue d-flex flex-column fw-bolder fs-5 py-4"><img src={jobs} alt="" className='mb-3 pb-3'/> Jops</li>
<li className="white d-flex flex-column fw-bolder fs-5 py-4"><img src={internship} alt="" className='mb-3 pb-3' /> Internships</li>
<li className="blue d-flex flex-column fw-bolder fs-5 py-4"><img src={quiz} alt="" className='mb-3 pb-3' /> Quizzes</li>
<li className="white d-flex flex-column fw-bolder fs-5 py-4"><img src={community} alt="" className='mb-3 pb-3' /> Community</li>
<li className="blue d-flex flex-column fw-bolder fs-5 py-4"><img src={creative} alt="" className='mb-3 pb-3' /> Creative Resume</li>
</ul>
    </div>


<div className='slider Container d-none d-xl-flex flex-column px-5   my-5'>
        <main className='py-4 ps-5 w-50'>
        <h2 className='fw-bold'>Learn & Get jop</h2>
        <p className='fs-3 fw-lighter my-4'>With Jobee you can get courses and get offers for work very easily</p>
        <button  className='py-3'><a href="/jobs" className='fs-5 fw-light'>Apply now</a> </button>
        </main>
<div className="bullets d-flex justify-content-center mb-4 ">
    <div className="bullet1 rounded-circle mx-1"></div>
    <div className="bullet2 rounded-circle mx-1"></div>
    <div className="bullet3 rounded-circle mx-1"></div>
    <div className="bullet4 rounded-circle mx-1"></div>
</div>
</div>
    <div className='Container'>
    <img src={smile} alt="" className='w-100 '/>
<img src={quizzes} alt=""  className="w-100 my-5"/>
    </div> 
 <div className='courses my-5'>
    <h1 className='fs2 fw-bold text-center'>Courses</h1>
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
        <p className='d-flex fs-6 '>See More <img src={arrow} alt="" className='ms-2' /></p>
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
</div>

    <div className=" jobs Container">
        <h1 className='text-center fw-bold fs-1 py-5'>Job Lists</h1>

<Job/>
        <button className='button py-2 mx-auto my-5 fs-5 fw-semibold'>View All</button>
    </div>
 <Footer/> 
</div>
)
}

export default Home
