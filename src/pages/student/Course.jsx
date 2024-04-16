import video from'../images/start video.svg'
import related from'../images/related.jpg'
import Footer from'../components/Footer'
import Header from'../components/Header'
const Course = () => {
return (<>
    <Header/>
<div className="enroll Container">
    <h1>Introduction to Product Design <span>(Free)</span></h1>
    <h2>John Smith <span>Sr. Product Designer</span></h2>
    <h3>Lessons <span>(32)</span></h3>
    <div className="d-flex">
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
<img src={video} alt="" />
    </div>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>03</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={video} alt="" />
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
<img src={video} alt="" />
    </div>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>03</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={video} alt="" />
    </div>
    <div className="one-course d-flex justify-content-between align-items-center">
        <div className='d-flex gap-3'>
        <h3>04</h3>
<div className="time">
    <h4>introduction to UX</h4>
<p>10:00</p>
</div>
</div>
<img src={video} alt="" />
    </div>
    <a href="">See More</a>
    </div>
    <div className="related">
        <img src={related} alt="" />
    </div>
    </div>
</div>
    <Footer/>
</>
)
}

export default Course
