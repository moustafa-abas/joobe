import back from'../images/profile1.jpg'
import edit from'../images/Group.svg'
import photo from'../images/Group 64.jpg'
import coin from'../images/coin.jpg'
import cv from'../images/cv.jpg'
import Header from "../components/Header"
import { useState } from 'react'
import Footer from '../components/Footer'
import Job from '../components/job'

const Profile = () => {
    const [src, setSrc] = useState(photo)
    const [coverSrc, setCoverSrc] = useState(back)
return (
<profile>
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
    <h2 className='fw-semibold mt-5'>Mostafa Abas</h2>
    <h4>moustafa3bas@gmail.com</h4>
    <div className=" width w-50 mx-auto">
    <div className="boxes  d-flex justify-content-center gap-3 my-5">
<h4 className='d-flex flex-column w-50 py-3 fw-semibold'> Track Name<span className='mt-3'>Front End</span></h4>
<h4 className='d-flex flex-column w-50 py-3 fw-semibold'> Tests Score<span className='mt-3'><img src={coin} alt="" className='me-2'/>125</span></h4>
    </div>
    <div className="skills text-start">
        <h3 className='pb-3 mb-3 fw-semibold'>Skills</h3>
        <div className="skill d-flex flex-wrap gap-4 align-items-center">
<span className='fs-4'>Usability Testing</span> 
<span>Usability Testing</span> 
<span>UX design jobs</span> 
<span>Prototype</span> 
<span>UX design jobs</span> 
    <span>UX design jobs</span>
    <span>UX design jobs</span>
    <span>UX design jobs</span>
    <span>UX design jobs</span>
    <span>Prototype</span>
    <span>Prototype</span>
    <span>Prototype</span>
    <span>Prototype</span>
    <span>Prototype</span>
    <span>User Experience (UX)</span>
    </div>
    </div>
    <h3 className='text-start mt-5 fw-semibold'>Your CV</h3>
    <img src={cv} alt="" className='my-3 w-100' />
    <h2 className='text-start fw-light '>MyCV.pdf</h2>
    <submitButton  className="w-50 py-3 mt-4 mb-5 mx-auto">Change</submitButton>
    </div>
    </div>
    <div className="Container">
    <h2 className='fw-semibold mb-5'>Jop Saved</h2>
    <Job/>
    </div>
    <Footer/>
</profile>

)
}

export default Profile
