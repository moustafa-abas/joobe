import Header from'../../components/Header'
import Footer from'../../components/Footer'
import job1 from'../../images/job2.svg'
import job2 from'../../images/Avatar.svg'
import job3 from'../../images/job4.svg'
import job4 from'../../images/job3.svg'
import arrow from'../../images/arrow.svg'
import back from'../../images/community profile.jpg'
import photo from'../../images/Group 64.jpg'
import coin from'../../images/coin.png'
import cv from'../../images/community cv.svg'
import profile from'../../images/me.jpg'
import photoShare from'../../images/heroicons_photo.svg'
import video from'../../images/lucide_video.svg'
import file from'../../images/mynaui_file.svg'
import points from'../../images/3points.svg'
import likes from'../../images/likes.svg'
import comment from'../../images/comment.svg'
import share from'../../images/share.svg'
import yahia from'../../images/yahia.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  createPost, deletePost, getPost, getPosts } from '../store/CommunitySlice'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faXmark } from '@fortawesome/free-solid-svg-icons'
const Community = () => {
    const posts=useSelector((state)=>state.community.posts.data)
    console.log(posts)
    const [src, setSrc] = useState()

    const [push, setPush] = useState(false)
    const dispatch=useDispatch()
    const [isComment, setIsComment] = useState(false)
    const userData=useSelector((state)=>state.user.userData)
    const score=useSelector((state)=>state.quizzes.score)
    const { register, handleSubmit ,watch}  = useForm({
        defaultValues:{
            content:'',
            img:''
        }
      });
      const onSubmit = (data) => {
        const img=JSON.stringify(data.img[0])
        const data1={...data,img}
dispatch(createPost(data1))
        setPush(false)
      };

useEffect(()=>{
dispatch(getPosts())
},[dispatch])
const handleFileChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]))
};
return (
    <>
<Header/>
<div className="community Container d-flex position-relative mt-4">
<div className="profile d-none d-sm-block p-2 text-center ">
    <img src={back} alt="" className='w-100 '/>
<img src={photo} alt="valid source" className='profile   rounded-circle '/>
    <h1 className='mt-3 fs-5 fw-light'>{userData.username}</h1>
    <p className=' fs6'>{userData.email}</p>
    <div className="container2">
    <div className="boxes  d-flex justify-content-center gap-5">
<div className="box w-50 py-2 ">
<h3 className='fs-6 fw-semibold'>Track Name</h3>
<h4 className='fs-6 fw-semibold'> {userData.track}</h4>
</div>
<div className="box w-50 py-2">
<h3 className='fs-6 fw-semibold'>Tests Score</h3>
<h4 className='fs-5  fw-semibold'> <img src={coin} alt=""  className='me-2' width={25}/>{score}</h4>
</div>
    </div>
    <div className="skills text-start">
        <h2 className='text-start mt-4 fs-4 fw-semibold pb-2 ' >Skills</h2>
<div className="skill ">
{userData.skills.map((skill)=>(
<span className='px-2 fs-5' key={skill}>{skill}</span> 
))}
</div>
    </div>
    <h2 className='text-start mt-5 fs-4 fw-semibold '>Your CV</h2>
    <img src={cv} alt="" className='my-3 w-100' />
    <h2 className='text-start mt-4 fs-4 fw-semibold '>MyCV.pdf</h2>
    <button className='mx-auto my-4 py-3'>Change</button>
    </div>
    </div>


<div className="publish p-1 overflow-y-scroll ">
    <div className="head">
                <div className='d-flex align-items-center gap-3 mb-3 ms-3'><img src={profile} alt="" className='rounded-circle' width={50}/>
                <h5 className='text-secondary ' onClick={()=>{ setPush(true)}}>What do you want to talk about?</h5></div>
<ul className='d-flex p-0'>
    <li className='d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold'>
        <img src={photoShare} alt="" /> Photo</li>
    <li className='d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold'><img src={video} alt="" />Video</li>
    <li className='d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold'><img src={file} alt="" />File</li>
    <li className='d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold active'>Post</li>
</ul>
</div>
{posts?.map((post)=>(
<div className="post py-2 px-3" key={post._id}>
    <div className="info d-flex position-relative">
<img src={profile} alt=""  className='source rounded-circle'/>
<div className="name ms-3 mt-1">
<h5>Mostafa Abas</h5>
<h6>1 h</h6>
</div>
<img src={points} alt="" className='more  '  />
<div className='list d-flex position-absolute flex-column'>
<button className=' p-1  ' onClick={()=>dispatch(deletePost({id:post._id}))}>Delete</button>
<button className=' p-1  '  onClick={()=>dispatch(getPost({id:post._id}))}>edit</button>
</div>
    </div>
    <div className="content">
        <h2 className='my-3 fs-5 fw-light'>{post.content}</h2>
        {post.img?<img src={post.img} alt="" />:null}

    </div>
    <div className="tools d-flex justify-content-between mt-3">
        <div className="likes" onClick={()=>console.log(post._id)}>
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
))}


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
{
push?
<div className="push position-fixed  w-100 h-100 top-0 start-0">
<div className="center p-2  position-absolute start-50 top-50 text-dark">
<FontAwesomeIcon icon={faXmark} className='icon x position-absolute     p-2 'onClick={()=> {setPush(false)
    setSrc()}}/>
    <h2 className='text-center pb-3'>Create Post</h2>
    <form action="" onSubmit={ handleSubmit(onSubmit)} >
            <div className="group d-flex my-4">
    {/* <label htmlFor="" className='ms-2'><img src={profile} alt="" className='rounded-circle' width={50} /></label> */}
        <input type="text" placeholder='What do you want to talk about?' className='border-0 ms-3 d-flex  ' 
        {...register('content',
            {required:true}
        )
        }
        />
        </div >
        <div className='upload mt-5 border position-relative '>
        <input type="file" id='image' className='opacity-0 text-center w-100 position-relative '
    name='image'
    {...register('img')}
    accept='image/*'
    onChange={ handleFileChange}
    />
        <FontAwesomeIcon icon={faXmark}  className='icon position-absolute p-2 mt-2 z-2 'onClick={()=>setSrc()}/>

    <label htmlFor="image" className='start-50 w-100 h-100 top-50 text-center position-absolute file '>
            {src? <img src={src} alt="" className='w-100 h-100'/>:<div className='label position-absolute start-50 top-50 '>
    <FontAwesomeIcon icon={faImage} className='fs-2 mb-2'/>   
    <h5>Add Photo</h5>
         {/* <img src={src} alt="valid source" className='profile mt-3  rounded-circle'/> */}
        {/* <img src={edit} alt=""  className='edit position-absolute bottom-0 end-0 p-2 rounded-circle'/> */}
</div>
}
    </label>
</div>
    <button type='submit' className={`${!watch('content')?'text-bg-secondary':''}  w-100 py-2 mt-4`} disabled={!watch('content')}>Post</button>
</form>
</div>
</div>
:null}
</div>
<Footer/>
</>
)
}

export default Community
