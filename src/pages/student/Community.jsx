import Header from'../components/Header'
import Footer from'../components/Footer'
import job1 from'../images/job2.svg'
import job2 from'../images/Avatar.svg'
import job3 from'../images/job4.svg'
import job4 from'../images/job3.svg'
import arrow from'../images/arrow.svg'
import back from'../images/community profile.jpg'
import photo from'../images/Group 64.jpg'
import coin from'../images/coin.jpg'
import cv from'../images/community cv.svg'
import profile from'../images/me.jpg'
import photoShare from'../images/heroicons_photo.svg'
import video from'../images/lucide_video.svg'
import file from'../images/mynaui_file.svg'
import points from'../images/3points.svg'
import likes from'../images/likes.svg'
import comment from'../images/comment.svg'
import share from'../images/share.svg'
import yahia from'../images/yahia.svg'
import post from'../images/post.png'
import { useState } from 'react'
const Community = () => {
    const [isComment, setIsComment] = useState(false)
return (
    <>
<community>
<Header/>
<div className="community Container d-flex position-relative mt-4">
    
<div className="profile d-none d-sm-block p-2 text-center ">
    <img src={back} alt="" className='w-100 '/>
<img src={photo} alt="valid source" className='profile   rounded-circle '/>
    <h1 className='mt-3 fs-5 fw-light'>Mostafa Abas</h1>
    <p className=' fs6'>moustafa3bas@gmail.com</p>
    <div className="container2">
    <div className="boxes  d-flex justify-content-center gap-5">
<div className="box w-50 py-2 ">
<h3 className='fs-6 fw-semibold'>Track Name</h3>
<h4 className='fs-6 fw-semibold'> Front End</h4>
</div>
<div className="box w-50 py-2">
<h3 className='fs-6 fw-semibold'>Tests Score</h3>
<h4 className='fs-6 fw-semibold'> <img src={coin} alt=""  className='me-2'/>125</h4>
</div>
    </div>
    <div className="skills text-start">
        <h2 className='text-start mt-4 fs-4 fw-semibold pb-2 ' >Skills</h2>
<div className="skill ">
<p> 
<span>Usability Testing</span> 
<span>UX design jobs</span> 
</p>
<p>
    <span>Prototype</span>
    <span>User Experience (UX)</span>
</p>
<p>
    <span>User Experience Design (UXD)</span>
</p>
</div>
    </div>
    <h2 className='text-start mt-5 fs-4 fw-semibold '>Your CV</h2>
    <img src={cv} alt="" className='my-3 w-100' />
    <h2 className='text-start mt-4 fs-4 fw-semibold '>MyCV.pdf</h2>
    <submitButton className='mx-auto my-4 py-3'>Change</submitButton>
    </div>
    </div>



<div className="publish p-1 overflow-y-scroll ">
    <div className="head">
    <div className="group d-flex mb-2">
    <label htmlFor="" className='ms-2'><img src={profile} alt="" className='rounded-circle' /></label>
        <input type="text" placeholder='What do you want to talk about?' className='border-0 ms-3 ' />
</div>
<ul className='d-flex'>
    <li className='d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold'><img src={photoShare} alt="" /> Photo</li>
    <li className='d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold'><img src={video} alt="" />Video</li>
    <li className='d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold'><img src={file} alt="" />File</li>
    <li className='d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold active'>Post</li>
</ul>
</div>
<div className="post py-2 px-3">
    <div className="info d-flex">
<img src={profile} alt=""  className='source rounded-circle'/>
<div className="name ms-3 mt-1">
<h5>Mostafa Abas</h5>
<h6>1 h</h6>
</div>
<img src={points} alt="" className='more' />
    </div>
    <div className="content">
        <h2 className='my-3 fs-5 fw-light'>On a first-time visit to New Orleans, there&apos;s so much to see and do.</h2>
    </div>
    <div className="tools d-flex justify-content-between mt-3">
        <div className="likes">
            <h3 className='fs-6 fw-semibold '>Likes</h3>
            <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={likes} alt=""  /> 110</p>
        </div>
        <div className="comment" onClick={()=>{
            setIsComment(!isComment)
        }}>
        <h3 className='fs-6 fw-semibold'>Comments</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={comment} alt="" />32</p>
        </div>
        <div className="share">
        <h3 className='fs-6 fw-semibold'>Share</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={share} alt="" />32</p>
            
        </div>
    </div>
    {isComment? <div className="comments d-flex flex-column" >
        <input type="text"
        placeholder='Write a comment'
        className='py-3 px-2'
        />
        <div className="one-comment d-flex align-items-center my-3 gap-3">
            <img src={yahia} alt="" className='source' />
            <div className="info">
                <h2 className='fs-6 fw-semibold'> Yahia ahmed</h2>
                <h3 className='fs-6 fw-light'>there&apos;s so much to see and do.</h3>
            </div>
        </div>
        <div className="one-comment d-flex align-items-center my-3  gap-3">
            <img src={yahia} alt="" className='source' />
            <div className="info">
                <h2 className='fs-6 fw-semibold'> Yahia ahmed</h2>
                <h3 className='fs-6 fw-light'>there&apos;s so much to see and do.</h3>
            </div>
        </div>
        </div>:<></>
        }
</div>
<div className="post py-2 px-3">
    <div className="info d-flex">
<img src={profile} alt=""  className='source rounded-circle'/>
<div className="name ms-3 mt-1">
<h5>Mostafa Abas</h5>
<h6>1 h</h6>
</div>
<img src={points} alt="" className='more' />
    </div>
    <div className="content">
        <h2 className='my-3 fs-5 fw-light'>On a first-time visit to New Orleans, there&apos;s so much to see and do.</h2>
    </div>
    <div className="tools d-flex justify-content-between mt-3">
        <div className="likes">
            <h3 className='fs-6 fw-semibold '>Likes</h3>
            <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={likes} alt=""  /> 110</p>
        </div>
        <div className="comment" >
        <h3 className='fs-6 fw-semibold'>Comments</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={comment} alt="" />32</p>
        </div>
        <div className="share">
        <h3 className='fs-6 fw-semibold'>Share</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={share} alt="" />32</p>
            
        </div>
    </div>

</div>
<div className="post py-2 px-3">
    <div className="info d-flex">
<img src={profile} alt=""  className='source rounded-circle'/>
<div className="name ms-3 mt-1">
<h5>Mostafa Abas</h5>
<h6>1 h</h6>
</div>
<img src={points} alt="" className='more' />
    </div>
    <div className="content">
        <h2 className='my-3 fs-5 fw-light'>I have a error response formats for HTTP APIs</h2>
        <img src={post} alt="" />

    </div>
    <div className="tools d-flex justify-content-between mt-3">
        <div className="likes">
            <h3 className='fs-6 fw-semibold '>Likes</h3>
            <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={likes} alt=""  /> 110</p>
        </div>
        <div className="comment" >
        <h3 className='fs-6 fw-semibold'>Comments</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={comment} alt="" />32</p>
        </div>
        <div className="share">
        <h3 className='fs-6 fw-semibold'>Share</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={share} alt="" />32</p>
            
        </div>
    </div>

</div>
<div className="post py-2 px-3">
    <div className="info d-flex">
<img src={profile} alt=""  className='source rounded-circle'/>
<div className="name ms-3 mt-1">
<h5>Mostafa Abas</h5>
<h6>1 h</h6>
</div>
<img src={points} alt="" className='more' />
    </div>
    <div className="content">
        <h2 className='my-3 fs-5 fw-light'>On a first-time visit to New Orleans, there&apos;s so much to see and do.</h2>
    </div>
    <div className="tools d-flex justify-content-between mt-3">
        <div className="likes">
            <h3 className='fs-6 fw-semibold '>Likes</h3>
            <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={likes} alt=""  /> 110</p>
        </div>
        <div className="comment" onClick={()=>{
            setIsComment(!isComment)
        }}>
        <h3 className='fs-6 fw-semibold'>Comments</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={comment} alt="" />32</p>
        </div>
        <div className="share">
        <h3 className='fs-6 fw-semibold'>Share</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={share} alt="" />32</p>
            
        </div>
    </div>
    {isComment? <div className="comments d-flex flex-column" >
        <input type="text"
        placeholder='Write a comment'
        className='py-3 px-2'
        />
        <div className="one-comment d-flex align-items-center my-3 gap-3">
            <img src={yahia} alt="" className='source' />
            <div className="info">
                <h2 className='fs-6 fw-semibold'> Yahia ahmed</h2>
                <h3 className='fs-6 fw-light'>there&apos;s so much to see and do.</h3>
            </div>
        </div>
        <div className="one-comment d-flex align-items-center my-3  gap-3">
            <img src={yahia} alt="" className='source' />
            <div className="info">
                <h2 className='fs-6 fw-semibold'> Yahia ahmed</h2>
                <h3 className='fs-6 fw-light'>there&apos;s so much to see and do.</h3>
            </div>
        </div>
        </div>:<></>
        }
</div>
<div className="post py-2 px-3">
    <div className="info d-flex">
<img src={profile} alt=""  className='source rounded-circle'/>
<div className="name ms-3 mt-1">
<h5>Mostafa Abas</h5>
<h6>1 h</h6>
</div>
<img src={points} alt="" className='more' />
    </div>
    <div className="content">
        <h2 className='my-3 fs-5 fw-light'>On a first-time visit to New Orleans, there&apos;s so much to see and do.</h2>
    </div>
    <div className="tools d-flex justify-content-between mt-3">
        <div className="likes">
            <h3 className='fs-6 fw-semibold '>Likes</h3>
            <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={likes} alt=""  /> 110</p>
        </div>
        <div className="comment" >
        <h3 className='fs-6 fw-semibold'>Comments</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={comment} alt="" />32</p>
        </div>
        <div className="share">
        <h3 className='fs-6 fw-semibold'>Share</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={share} alt="" />32</p>
            
        </div>
    </div>

</div>
<div className="post py-2 px-3">
    <div className="info d-flex">
<img src={profile} alt=""  className='source rounded-circle'/>
<div className="name ms-3 mt-1">
<h5>Mostafa Abas</h5>
<h6>1 h</h6>
</div>
<img src={points} alt="" className='more' />
    </div>
    <div className="content">
        <h2 className='my-3 fs-5 fw-light'>I have a error response formats for HTTP APIs</h2>
        <img src={post} alt="" />

    </div>
    <div className="tools d-flex justify-content-between mt-3">
        <div className="likes">
            <h3 className='fs-6 fw-semibold '>Likes</h3>
            <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={likes} alt=""  /> 110</p>
        </div>
        <div className="comment" >
        <h3 className='fs-6 fw-semibold'>Comments</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={comment} alt="" />32</p>
        </div>
        <div className="share">
        <h3 className='fs-6 fw-semibold'>Share</h3>
        <p className='fs-6 fw-semibold d-flex align-items-center gap-1'><img src={share} alt="" />32</p>
            
        </div>
    </div>

</div>
</div>

<div className="suggestion d-none d-lg-block  p-3">
    <h1 className='fs-6 fw-semibold'>Some jops for you</h1>
    <div className="job  d-flex ">
        <img src={job2} alt="" />
<div className="info ms-3 mt-3 ">
    <h2>Junior Digital Designer</h2>
    <h3>Sarayaher</h3>
    <p>Cairo, Egypt, (on site), Part Time</p>
</div>
    </div>
    <div className="job  d-flex ">
        <img src={job1} alt="" />
<div className="info mt-3 ms-3 ">
    <h2>Junior Digital Designer</h2>
    <h3>Sarayaher</h3>
    <p>Cairo, Egypt, (on site), Part Time</p>
</div>
    </div>
    <div className="job  d-flex ">
        <img src={job4} alt="" />
<div className="info mt-3 ms-3 ">
    <h2>Junior Digital Designer</h2>
    <h3>Sarayaher</h3>
    <p>Cairo, Egypt, (on site), Part Time</p>
</div>
    </div>
    <div className="job  d-flex ">
        <img src={job3} alt="" />
<div className="info mt-3 ms-3 ">
    <h2>Junior Digital Designer</h2>
    <h3>Sarayaher</h3>
    <p>Cairo, Egypt, (on site), Part Time</p>
</div>
    </div>
    <p className='text-decoration-underline mt-3 fw-semibold'>See More jobs <img src={arrow} alt=""  className='ms-2'/></p>
</div>
</div>

</community>
<Footer/>
</>
)
}

export default Community
