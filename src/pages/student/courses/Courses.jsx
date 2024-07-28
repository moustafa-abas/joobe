import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import course1 from'../../../images/course1.jpg'
import course2 from'../../../images/course2.jpg'
import course3 from'../../../images/course3.jpg'
import course6 from'../../../images/course6.jpg'
import arrow from'../../../images/arrow.svg'
import star from'../../../images/star-icon.svg'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCourses } from "../../store/CoursesSlice"
import Course from "../../../components/Course"
const Courses = () => {
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(getCourses())
    }, [])
    const allCourses=useSelector((state)=>state.courses.courses)
return (
    <div className="courses">
<Header/>
<>
<div className="courses-group ">
        <div className="head mt-5 mb-4  Container d-flex justify-content-between">
        <h2 className='fs-3 fw-bolder'>Best Seller</h2>
        <p className='d-flex fs-6 '><a href="/courses/all-courses">See More <img src={arrow} alt="" className='ms-2' /></a></p>
        </div>
        <div className=' group d-flex overflow-scroll gap-5  ms-5'>
    {allCourses?.map((course)=>(
<Course data={course} key={course._id}/>
    ))
}
        </div>
    </div>
    </>
<Footer/>
</div>
)
}

export default Courses
