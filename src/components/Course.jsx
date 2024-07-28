import course1 from'../images/course1.jpg'
import star from'../images/star-icon.svg'

const Course = (data) => {
  const course=data.data
  return (
    <div className="course">
    <img src={course1} alt="" />
    <div className="info mt-3 ">
            <h1 className='d-flex justify-content-between fs-6 fw-bold'>{course?.title} <span className='d-flex align-items-center fw-lighter'><img src={star} alt="" className='me-2'/>4.9</span> </h1>
            <h2 className='d-flex justify-content-between fw-light my-3'>Mostafa Abas <span>English</span></h2>
            <p className='d-flex justify-content-between fw-bold'>{course?.cost} <span className='fw-semibold d-flex align-items-center p-2 fw-bold'>Best Seller</span></p>
    </div>
</div>  )
}

export default Course