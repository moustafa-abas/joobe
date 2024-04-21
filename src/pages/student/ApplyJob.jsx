import active from'../images/active.svg'
import jobLocation from'../images/job-search 2.svg'
import location from'../images/job-location.svg'
import experience from'../images/experiance.svg'
import cvIcon from'../images/folder-add.svg'

import salary from'../images/fluent_person-money-20-regular.svg'
import Header from '../components/Header'
import { useState } from 'react'
const ApplyJob = () => {
    const [apply, setApply] = useState(false);
    const [cv, setCv] = useState(cvIcon)

return (
<div className='applyJob position-relative pb-5'>
    {/* <Header/> */}
    <div className="landing position-relative">
        <div className="Container position-absolute top-50">
            <h2 className='fw-semibold '>Infinity lines</h2>
            <p className='fw-light fs-5 my-5'>Visit our website to learn and achieve new Jobs that meet&apos;s your Requirements in different Careers </p>
            <submitButton className='py-3'><a href="/jobs"> View Jobs</a></submitButton>
        </div>
    </div>
    <div className="job-details Container">
        <h1 className='fw-bold my-5'>Job <span>Details</span></h1>
        <div className="state d-flex flex-column">
        <h2 className='fw-bold'> Junior Graphic Designer</h2>
            <p className="active d-flex    fs-5 my-4"> <img  src={active} alt="" className='me-3 '/>Active for 10 days <img className='ms-5 me-3' src={jobLocation} alt="" />On- Site , Full -Time</p>
        <p>4 weeks ago • Over 200 applicants 9 connections</p>
        </div>
        <div className="info my-4">
            <h5 className='fw-semibold d-flex align-items-center my-4'><img className='me-4 ' src={location} alt="" />Cairo , New Cairo , Egypt</h5>
            <h5 className='fw-semibold d-flex align-items-center my-4'><img className='me-4 ' src={experience} alt="" />1 year experience</h5>
            <h5 className='fw-semibold d-flex align-items-center my-4'><img className='me-4 ' src={salary} alt="" />1500$ monthly</h5>
        </div>
        <div className="text my-5">
            <h2 className='fw-semibold'>About Jop</h2>
            <p className='fs-4 my-4 w-50'>Hello everyone looking for a challenger graphic designer unleash your protectional with one of the biggest companies in Egypt join us now and be one of the company employees “”<span className='fw-bold'> Graphic Designer </span> “”   </p>
            <h2 className='fw-semibold' >Job Summary</h2>
            <p className='fs-4 my-4 w-50'>As a Graphic Designer, you will be responsible for creating visual concepts and designs to communicate ideas that inspire, inform, or captivate our target audience. You will collaborate with various teams to understand project requirements and translate them into compelling visual solutions. Your creativity, attention to detail, and proficiency in design software will be crucial in producing high-quality graphics across various mediums.</p>
            <h2 className='fw-semibold'>Job Requirements</h2>
            <p>
                <ul className='my-4'>
                    <li className='fs-4 my-3  '>Bachelor&apos;s degree in Graphic Design, Visual Arts, or related field.</li>
                    <li className='fs-4 my-3  '>Proven professional experience with a diverse portfolio of design projects.</li>
                    <li className='fs-4 my-3  '>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).                    </li>
                    <li className='fs-4 my-3  '>Familiarity with design principles, color theory, typography, and layout design.</li>
                    <li className='fs-4 my-3  '>Knowledge of printing processes for digital and print materials.</li>
                    <li className='fs-4 my-3  '>Strong illustration skills and attention to detail.</li>
                    <li className='fs-4 my-3  '>Ability to generate original design concepts and translate complex ideas visually.</li>
                    <li className='fs-4 my-3  '>Excellent communication skills for conveying design concepts and collaborating with teams.</li>
                </ul>
            </p>
            <h2 className='fw-semibold '>About the company</h2>
            <p className='w-75 fs-4 my-4'>At Innova Hub , we are at the forefront of software innovation, dedicated to creating cutting-edge solutions that transform industries. As we continue to push boundaries, we recognize the crucial role that design plays in communicating our brand and product vision.</p>
        </div>
        <submitButton onClick={()=>{
            setApply(true)
        }} className='my-5 mx-auto py-4'>Easy Apply</submitButton>
        <submitButton className='mt-5 mx-auto py-4'>Save</submitButton>
    </div>
{apply?
<div className="apply position-absolute top-0 start-0  bottom-0 end-0">
<div className="form position-absolute ">
    <form action="" className='mx-auto py-5'>
    <inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<input  className='border-0 '
type="text"
id='name'
placeholder='Name '
name='name'
/>
<label htmlFor='name' className='position-absolute fw-light top-0 px-2'>Name</label>
</inputGroup>
    <inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<input  className='border-0 '
type="number"
id='phone'
placeholder='Phone number '
name='phone'
/>
<label htmlFor='phone' className='position-absolute fw-light top-0 px-2'>phone</label>
</inputGroup>
    <inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<input  className='border-0 '
type="email"
id='links'
placeholder='like Behance '
name='links'
/>
<label htmlFor='links' className='position-absolute fw-light top-0 px-2'>Links</label>
</inputGroup>
    <inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<input  className='border-0 '
type="text"
id='track'
placeholder='Track name '
name='track'
/>
<label htmlFor='track' className='position-absolute fw-light top-0 px-2'>Track</label>
</inputGroup>


<cvGroup className='my-5 py-4 cv d-flex justify-content-center  '>
        <input type="file" 
        id='cv'
        name='cv'
        onChange={ (e)=>{setCv(URL.createObjectURL(e.target.files[0]))}  }/>
            <label htmlFor='cv' className="labelCv py-3 fw-light fs-5 w-100 d-flex gap-3 align-items-center justify-content-center">
        <img src={cv} alt="" /> 
            Upload your cv/resume
            </label>
            </cvGroup>
    <submitButton type='submit' className='my-5 me-5 py-4'> Apply</submitButton>
    <submitButton className='py-4' onClick={()=>{
        setApply(false)
    }}>Cancel</submitButton>
    </form>
</div>
</div>
:<></>}
</div>

)
}

export default ApplyJob
