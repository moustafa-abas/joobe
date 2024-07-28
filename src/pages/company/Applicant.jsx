import Header from'../../components/Header'
import Footer from'../../components/Footer'
import Skills from'../../components/Skills'
import cv from'../../images/cv.jpg'

import { useDispatch, useSelector } from 'react-redux'
import { replayForApply } from '../store/JobsSlice'
const Applicant = () => {
  const appliedUser=useSelector((state)=>state.user.appliedUser)
  const dispatch=useDispatch()
  return (<>
  <Header/>
  
    <div className="w-50 mx-auto applied">
      <div className="head text-center my-5">
      <img src={appliedUser?.profileImage} alt="" />
      <h2 className='fw-semibold'>{appliedUser?.username}</h2>
      <h5 className='fw-light text-secondary'>{appliedUser?.track}{appliedUser?.track==='UX UI'?'Designer':'Developer'}</h5>
      <div className="buttons d-flex justify-content-center gap-5 mt-5">
        <button className=' btn btn-outline-success px-5 py-2' onClick={()=>dispatch(replayForApply({id:appliedUser?._id ,answer:true}))}>Accept</button>
        <button className=' btn btn-outline-danger px-5 py-2' onClick={()=>dispatch(replayForApply({id:appliedUser?._id ,answer:false}))}>Reject</button>
      </div>
    </div>
    <h2 className='mt-5 mb-3 fw-bold'>About{appliedUser?.username}</h2>
    <h3 className='text-secondary '>{appliedUser?.about}</h3>
    <h2 className='mt-5 fw-bold  '>Info</h2>
    <div className=' d-flex w-75 justify-content-between'>
    <div className='left'>
      <h3 className='text-secondary mt-4'>Track</h3>
      <h4 >{appliedUser?.track}</h4>
      <h3 className='text-secondary mt-4'>Experience  Years</h3>
      <h4 >{appliedUser?.experience}Years</h4>
    </div>
    <div className='right'>
    <h3 className='text-secondary mt-4'>Track Level</h3>
      <h4 >{appliedUser?.tracklevel}</h4>
      <h3 className='text-secondary mt-4'>tracklevel</h3>
      <h4 >{appliedUser?.militaryStatus}</h4>
    </div>
    </div>
    <Skills Skills={appliedUser?.skills}/>
    <h3>{appliedUser?.username}CV</h3>
    <img src={cv} alt=""  className='mt-4'/>
    <button className='mx-auto my-5 w-50 py-3'><a href={appliedUser?.cv} download>Download CV</a></button>
    </div>
    <Footer/>

    </>
  )
}

export default Applicant