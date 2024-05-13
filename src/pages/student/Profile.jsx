import back from'../../images/profile1.jpg'
import edit from'../../images/Group.svg'
import photo from'../../images/Group 64.jpg'
import coin from'../../images/coin.png'
import cv from'../../images/cv.jpg'
import Header from "../../components/Header"
import { useState } from 'react'
import Footer from '../../components/Footer'
import Job from '../../components/job'
import { useSelector } from 'react-redux'

const Profile = () => {
    const data=JSON.parse(localStorage.getItem('allDAta'))
    const [src, setSrc] = useState(photo)
    const [coverSrc, setCoverSrc] = useState(back)
    const userData=useSelector((state)=>state.user.userData)
  const score=useSelector((state)=>state.quizzes.score)

    console.log(userData)
return (
<div className='profile'>
<Header/>
<div className='cv text-center'>
    <input type="file" id='cover'
    name='cover'
    accept='image/*'
    onChange={ (e)=>{setCoverSrc(URL.createObjectURL(e.target.files[0]))}  }/>
    <label htmlFor="cover" className='w-100 cover'>
        <img src={coverSrc} alt="valid source" className=' w-100 h-100 overflow-y-hidden'/>
    </label>
    <input type="file" id='photo'
    name='photo'
    accept='image/*'
    onChange={ (e)=>{setSrc(URL.createObjectURL(e.target.files[0]))}  }/>
    <label htmlFor="photo" className='file'>
        <img src={src} alt="valid source" className='profile rounded-circle'/>
        <img src={edit} alt=""  className='edit  p-2 bottom-0 end-0 rounded-circle position-absolute'/>
    </label>
    <h3 className='fw-semibold mt-5'>{data.username}</h3>
    <h5>{data.email}</h5>
    <div className=" width w-50 mx-auto">
    <div className="boxes  d-flex justify-content-center gap-3 my-5">
<h5 className='d-flex flex-column w-50 py-3 fw-semibold'> Track Name<span className='mt-3'>{data.track}</span></h5>
<h5 className='d-flex flex-column w-50 py-3 fw-semibold '> Tests Score<span className='mt-3 d-flex justify-content-center align-items-center fs-3'><img src={coin} alt="" className='me-2 'width={30}/>{score}</span></h5>
    </div>
    <div className="skills text-start">
        <h3 className='pb-3 mb-3 fw-semibold'>Skills</h3>
        <div className="skill d-flex flex-wrap gap-4 align-items-center">
{data.skills.map((skill)=>(
<span className='fw-medium px-2' key={skill}>{skill}</span> 
))}
    </div>
    </div>
    <h3 className='text-start mt-5 fw-semibold'>Your CV</h3>
    <img src={cv} alt="" className='my-3 w-100' />
    <h2 className='text-start fw-light '>MyCV.pdf</h2>
    <button  className="w-50 py-3 mt-4 mb-5 mx-auto">Change</button>
    </div>
    </div>
    <div className="Container">
    <h2 className='fw-semibold mb-5'>Jop Saved</h2>
    <Job/>
    </div>
    <Footer/>
</div>

)
}

export default Profile
