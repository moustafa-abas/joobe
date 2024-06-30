import { useState } from 'react'
import edit from'../images/Group.svg'
import coin from'../images/coin.png'
import cv from'../images/cv.jpg'
import back from'../images/profile1.jpg'
import photo from'../images/Group 64.jpg'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const [src, setSrc] = useState(photo)
    const [coverSrc, setCoverSrc] = useState(back)
    const userData=useSelector((state)=>state.user.userData)
    const score=useSelector((state)=>state.quizzes.score)
console.log(userData)
  return (
<div className='profile text-center'>
    <img src={coverSrc} alt="" className='w-100 cover'/>
<div className="imgGroup mx-auto position-relative">
        <img src={src} alt="valid source" className='img rounded-circle position-relative w-100'/>
     <a href="/edit">

        <img src={edit} alt=""  className='edit  p-2 bottom-0 end-0 rounded-circle position-absolute 'width={60}/>
     </a>
        </div>
    <h3 className='fw-semibold mt-5'>{userData.username}</h3>
    <h5>{userData.email}</h5>
    <div className=" width w-50 mx-auto">
    <div className="boxes  d-flex justify-content-center gap-3 my-5">
<h5 className='d-flex flex-column w-50 py-3 fw-semibold'> Track Name<span className='mt-3'>{userData.track}</span></h5>
<h5 className='d-flex flex-column w-50 py-3 fw-semibold '> Tests Score<span className='mt-3 d-flex justify-content-center align-items-center fs-3'><img src={coin} alt="" className='me-2 'width={30}/>{score}</span></h5>
    </div>
    <div className="skills text-start">
        <h3 className='pb-3 mb-3 fw-semibold'>Skills</h3>
        <div className="skill d-flex flex-wrap gap-4 align-items-center">
{userData.skills?.map((skill)=>(
<span className='fw-medium px-2' key={skill}>{skill}</span> 
))}
    </div>
    </div>
    <h3 className='text-start mt-5 fw-semibold'>Your CV</h3>
    <img src={cv} alt="" className='my-3 w-100' />
    <h2 className='text-start fw-light '>MyCV.pdf</h2>
    <button  className="w-50 py-3 mt-4 mb-5 mx-auto">Change</button>
    </div>
    </div>  )
}

export default UserProfile