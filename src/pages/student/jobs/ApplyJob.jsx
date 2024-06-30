import active from'../../../images/active.svg'
import jobLocation from'../../../images/job-search 2.svg'
import location from'../../../images/job-location.svg'
import experience from'../../../images/experiance.svg'
import cvIcon from'../../../images/folder-add.svg'
import salary from'../../../images/fluent_person-money-20-regular.svg'
import Header from '../../../components/Header'
import cvIcon2 from'../../../images/PDF_file_icon 1.png'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { applyJob } from '../../store/JobsSlice'
const ApplyJob = () => {
    const dispatch=useDispatch()
    const {register,handleSubmit,formState:{errors}}=useForm({})
    const [apply, setApply] = useState(false);
    const [cv, setCv] = useState()
const job=useSelector((state)=>state.jobs.job)
onsubmit=(data)=>{
    data.cv= JSON.stringify(data.cv[0])
    // console.log(data)
    dispatch(applyJob(data))
}
return (
<div className='applyJob position-relative pb-5'>
    <Header/>
    <div className="landing position-relative">
        <div className="Container position-absolute top-50">
            <h2 className='fw-semibold '>Infinity lines</h2>
            <p className='fw-light fs-5 my-5'>Visit our website to learn and achieve new Jobs that meet&apos;s your Requirements in different Careers </p>
            <button className='py-3'><a href="/jobs"> View Jobs</a></button>
        </div>
    </div>
    <div className="job-details Container">
        <h1 className='fw-bold my-5'>Job <span>Details</span></h1>
        <div className="state d-flex flex-column">
        <h2 className='fw-bold'> {job.title}</h2>
            <p className="active d-flex    fs-5 my-4"> <img  src={active} alt="" className='me-3 '/>Active for 10 days <img className='ms-5 me-3' src={jobLocation} alt="" />{job.type}</p>
        <p>4 weeks ago • Over 200 applicants 9 connections</p>
        </div>
        <div className="info my-4">
            <h5 className='fw-semibold d-flex align-items-center my-4'><img className='me-4 ' src={location} alt="" />{job.location}</h5>
            <h5 className='fw-semibold d-flex align-items-center my-4'><img className='me-4 ' src={experience} alt="" />{job.exp}  years experience</h5>
            <h5 className='fw-semibold d-flex align-items-center my-4'><img className='me-4 ' src={salary} alt="" />{job.salary}$ monthly</h5>
        </div>
        <div className="text my-5">
            <h2 className='fw-semibold'>About Jop</h2>
            <p className='fs-4 my-4 w-50'>{job.about} “”<span className='fw-bold'> {job.track} </span> “”   </p>
            <h2 className='fw-semibold' >Job Summary</h2>
            <p className='fs-4 my-4 w-50'>{job.summary}</p>
            <h2 className='fw-semibold'>Job Requirements</h2>
            <>
                <ul className='my-4'>
                    {
                        job.requirements.split(',').map((one)=>(

                            <li className='fs-4 my-3  ' key={one}>{one}</li>
                        ))
                    }
                </ul>
            </>
            <h2 className='fw-semibold '>About the company</h2>
            <p className='w-75 fs-4 my-4'>At Innova Hub , we are at the forefront of software innovation, dedicated to creating cutting-edge solutions that transform industries. As we continue to push boundaries, we recognize the crucial role that design plays in communicating our brand and product vision.</p>
        </div>
        <button onClick={()=>{
            setApply(true)
        }} className='my-5 mx-auto py-4'>Easy Apply</button>
        <button className='mt-5 mx-auto py-4'>Save</button>
    </div>
{apply?
<div className="apply position-absolute top-0 start-0  bottom-0 end-0">
<div className="form position-absolute ">
    <form action="" className='mx-auto py-5' onSubmit={handleSubmit(onsubmit)}>
    <div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="text" 
    className='border-0 '
    placeholder='Name'
    name='username'
    id='name'
{...register('name', { required: '* User name is required'})}

    />
    <label htmlFor='name' className='position-absolute fw-light top-0 px-2'>User Name</label>
</div>
<p className='error mt-2 text-start'>{errors.name?.message}</p>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="number" 
    className='border-0 '
    placeholder='Phone number '
    name='phone'
    id='phone'
    {...register('phone',
    { required: '* phone is required'
    ,

    })}

    />
    <label htmlFor='phone' className='position-absolute fw-light top-0 px-2'>phone</label>
</div>
<p className='error mt-2 text-start'>{errors.phone?.message}</p>

    <div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<input  className='border-0 '
type="email"
id='links'
placeholder='like Behance '
name='links'
{
    ...register('link',{
        required:('* links is required')
    })
}
/>
<label htmlFor='links' className='position-absolute fw-light top-0 px-2'>Links</label>
</div>
<p className='error mt-2 text-start'>{errors.link?.message}</p>

    <div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<input  className='border-0 '
type="text"
id='track'
placeholder='Track name '
name='track'
{...register('track',
    {required:(' * track is required')}
)}
/>
<label htmlFor='track' className='position-absolute fw-light top-0 px-2'>Track</label>
</div>
<p className='error mt-2 text-start'>{errors.track?.message}</p>


<div className={`${cv? "border-0":null} my-5 py-2 cv d-flex justify-content-center `}>
    <input type="file" 
    id='cv'
    name='cv'
    {...register('cv')}
onChange={(e)=>setCv(e.target.files[0])}
    />
        <label htmlFor='cv' className={`labelCv ${cv? "text-dark  justify-content-between px-4" : "justify-content-center"}  py-3 fw-light fs-5 w-100 d-flex gap-3 align-items-center `}>
       { cv!=null ?
       <>
       <img src={cvIcon2} alt="" /> 
       {cv.name}
       </>
       :
       <>
       <img src={cvIcon} alt="" /> 
       Upload your cv/resume
       </>
       }
            </label>
        </div>
<p className='error text-danger mt-2 text-start'>{errors.cv?.message}</p>

    <button type='submit' className='my-5 me-5 py-4'> Apply</button>
    <button className='py-4' onClick={()=>{
        setApply(false)
        setCv(cvIcon)
    }}>Cancel</button>
    </form>
</div>
</div>
:null}
</div>

)
}

export default ApplyJob
