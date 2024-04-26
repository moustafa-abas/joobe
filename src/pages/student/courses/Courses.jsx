import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import course1 from'../../../images/course1.jpg'
import course2 from'../../../images/course2.jpg'
import course3 from'../../../images/course3.jpg'
import course6 from'../../../images/course6.jpg'
import arrow from'../../../images/arrow.svg'
import star from'../../../images/star-icon.svg'
const Courses = () => {
    var cards =document.getElementsByClassName("course");
    [...cards].forEach(card=>{
        card.addEventListener("click",()=>{
            location.replace('/courses/course_details')
        })
    }
    )
return (
    <courses>
<Header/>
<>
<div className="courses-group ">
        <div className="head mt-5 mb-4  Container d-flex justify-content-between">
        <h2 className='fs-3 fw-bolder'>Best Seller</h2>
        
        <p className='d-flex fs-6 '><a href="/courses/all-courses">See More <img src={arrow} alt="" className='ms-2' /></a></p>
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


<Footer/>
</courses>
)
}

export default Courses
