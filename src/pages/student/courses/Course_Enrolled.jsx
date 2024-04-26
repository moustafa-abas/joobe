import video from'../../../images/start video.svg'
import related from'../../../images/related.jpg'
import video1 from'../../../images/20240327_171700.mp4'
import lock from '../../../images/ep_lock.svg'

import Footer from'../../../components/Footer'
import Header from'../../../components/Header'
const Course_Enrolled = () => {
return (<>
    <Header/>
    <div className='watch Container mt-4'>
    <video src={video1} className='w-100 ' controls  ></video>
    <h2 className='fw-semibold mt-3'>Introduction to Product Design <span className='fs-6 fw-normal'>(Free)</span></h2>
    <h5 className='fw-bold mb-4'>John Smith <span className='fs-6 fw-normal ms-2'>Sr. Product Designer</span></h5>
    <div className='d-flex gap-2 flex-column flex-sm-row'>
    <div className="enroll Container mt-1">
<h4 className="fw-semibold ">Lessons <span>(32)</span></h4>
<h6 className="d-flex justify-content-between my-4">Section 1 - introduction <span className="fw-semibold">15 Min</span></h6>
<div className="video d-flex justify-content-between align-items-center mb-4">
<div className='d-flex gap-3 align-items-center'>
<h3 className="p-3 rounded-circle fw-semibold fs-5" >01</h3>
<div className="time">
<h5 className="fw-semibold ">introduction to UX</h5>
<h6>10:00</h6>
</div>
</div>
<img src={video} alt="" className="me-3"  />
</div>
<div className="video d-flex justify-content-between align-items-center mb-4">
<div className='d-flex gap-3 align-items-center'>
<h3 className="p-3 rounded-circle fw-semibold fs-5" >02</h3>
<div className="time">
<h5 className="fw-semibold">introduction to UX</h5>
<h6>10:00</h6>
</div>
</div>
<img src={lock} alt=""  className="me-3"/>
</div>
<div className="video d-flex justify-content-between align-items-center mb-4">
<div className='d-flex gap-3 align-items-center'>
<h3 className="p-3 rounded-circle fw-semibold fs-5" >03</h3>
<div className="time">
<h5 className="fw-semibold">introduction to UX</h5>
<h6>10:00</h6>
</div>
</div>
<img src={lock} alt=""  className="me-3"/>
</div>
<h6 className="d-flex justify-content-between my-4">Section 2 - Fundamentals <span className="fw-semibold">45 Min</span></h6>
<div className="video d-flex justify-content-between align-items-center mb-4">
<div className='d-flex gap-3 align-items-center'>
<h3 className="p-3 rounded-circle fw-semibold fs-5" >01</h3>
<div className="time">
<h5 className="fw-semibold">introduction to UX</h5>
<h6>10:00</h6>
</div>
</div>
<img src={lock} alt=""  className="me-3"/>
</div>
<div className="video d-flex justify-content-between align-items-center mb-4">
<div className='d-flex gap-3 align-items-center'>
<h3 className="p-3 rounded-circle fw-semibold fs-5" >02</h3>
<div className="time">
<h5 className="fw-semibold">introduction to UX</h5>
<h6>10:00</h6>
</div>
</div>
<img src={lock} alt=""  className="me-3"/>
</div>
<div className="video d-flex justify-content-between align-items-center mb-4">
<div className='d-flex gap-3 align-items-center'>
<h3 className="p-3 rounded-circle fw-semibold fs-5" >03</h3>
<div className="time">
<h5 className="fw-semibold">introduction to UX</h5>
<h6>10:00</h6>
</div>
</div>
<img src={lock} alt=""  className="me-3"/>
</div>
<a href="" className="text-decoration-underline d-flex justify-content-center my-5 ">See More</a>
</div>
    <div className="related">
        <img src={related} alt="" className='w-100'/>
    </div>
    </div>
    <Footer/>
    </div>
</>
)
}

export default Course_Enrolled
