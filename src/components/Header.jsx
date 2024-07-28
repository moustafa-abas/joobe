import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  NavLink, useLocation } from 'react-router-dom'
import Logo from '../logo'
import x from'../images/x.svg'
import search from'../images/search.svg'
import profile from'../images/profile.svg'
import { setAlert } from '../pages/store/CommunitySlice'
const Header = () => {
        const dispatch=useDispatch()
        const isLogined=useSelector((state)=>state.user.isLogined)
const [isVisible, setIsVisible] = useState(true)
const [showLinks, setShowLinks] = useState(false)
const rule=useSelector((state)=>state.user.rule)
        
const location =useLocation()

return (
<header className=' position-relative'>
        {isLogined?null:
        <p style={{display:isVisible?"block":"none"}} className="text-center py-2 fw-medium fs-6 ">Sign up and get 20% off to your first course. <a href='/signup' className='text-decoration-underline'  > Sign Up Now </a> 
        <img src={x} alt="" onClick={()=>{setIsVisible(false)}} className='position-absolute '/></p>
        }
        
<div className='Container d-flex  my-2 align-items-center'>
<Logo/>
<form className="  d-none d-sm-flex align-items-center ms-4 position-relative" role="search">
        <input className="form-control p-2   w-100" type="search" placeholder="Search for products..." aria-label="Search" autoComplete='true'/>
        <img src={search} alt="" className='position-absolute  '/>
        </form>
        <img src={search} alt="" className='d-sm-none ms-md-5 '/>
        <ul className='m-0  d-lg-flex d-none  justify-content-between align-items-center '>
        <li className='me-4 '><NavLink to={"/"}>Home</NavLink></li>
{isLogined?<>
{rule==='student'?
<>
        <li className='mx-4'><NavLink to={"/community"}>Community</NavLink></li>
        <li className='mx-4'><NavLink className={location.pathname.startsWith('/job') ? 'active' : ''}  to={"/jobs"}>Jobs</NavLink></li>
        <li className='mx-4'><NavLink className={location.pathname.startsWith('/courses') ? 'active' :''}   to={"/courses"}>My courses</NavLink></li>
        <li className='mx-4'><NavLink className={ location.pathname.startsWith('/quiz') ? 'active' : ''}   to={"/quiz/home"}>Quizzes</NavLink></li>  
        </>:
        rule==='mentor'?
        <>
        <li className='mx-4'><NavLink to={"/community"}>Community</NavLink></li>
        <li className='mx-4'><NavLink className={ location.pathname.includes('/editCourses') ? 'active' : ''}   to={"/courses/editCourses"}>My courses</NavLink></li>  
        <li className='mx-4'><NavLink className={ location.pathname.includes('/addCourses') ? 'active' : ''}   to={"/courses/addCourses"}>Add Course</NavLink></li>  
        </>:<>
        <li className='mx-4'><NavLink className={ location.pathname.includes('/CompanyJobs') ? 'active' : ''}   to={"/CompanyJobs"}>Jops</NavLink></li>  
        <li className='mx-3'><NavLink className={ location.pathname.includes('/employee') ? 'active' : ''} to={'/employee'} >Employee</NavLink></li>  
        </>
}
        </>
        :
        <>
                <li className='mx-4' onClick={()=>{isLogined?location.replace('/community'):dispatch(setAlert('not logined'))}}>Community</li>
        <li className='mx-4' onClick={()=>{isLogined?location.replace('/jobs'):dispatch(setAlert('not logined'))}}>jobs</li>
        </>
}
        </ul>
        {showLinks?
        <ul className='ul pt-5 ps-0  d-flex d-lg-none flex-column    '>
        <li className='mx-3'><NavLink className='text-decoration-none'   to={"/"}>Home</NavLink></li>
{isLogined?<>
{rule==='student'?
         <>
        <li className='mx-3'><NavLink to={"/community"}>Community</NavLink></li>
        <li className='mx-3'><NavLink className={location.pathname.startsWith('/job') ? 'active' : ''}  to={"/jobs"}>Jobs</NavLink></li>
        <li className='mx-3'><NavLink className={location.pathname.startsWith('/courses') ? 'active' :''}   to={"/courses"}>My courses</NavLink></li>
        <li className='mx-3'><NavLink className={ location.pathname.startsWith('/quiz') ? 'active' : ''}   to={"/quiz/home"}>Quizzes</NavLink></li>  
        </>:
        rule==='mentor'?
        <>
        <li className='mx-3'><NavLink to={"/community"}>Community</NavLink></li>
        <li className='mx-3'><NavLink className={ location.pathname.includes('/editCourses') ? 'active' : ''}   to={"/courses/editCourses"}>My courses</NavLink></li>  
        <li className='mx-3'><NavLink className={ location.pathname.includes('/addCourses') ? 'active' : ''}   to={"/courses/addCourses"}>Add Course</NavLink></li>  
        </>:
        <>
        <li className='mx-3'><NavLink className={ location.pathname.includes('/CompanyJobs') ? 'active' : ''}   to={"/CompanyJobs"}>Jobs</NavLink></li>  
        <li className='mx-3'><NavLink className={ location.pathname.includes('/employee') ? 'active' : ''} to={'/employee'} >Employee</NavLink></li>  
        </>
}
</>:null
}
        </ul>
        :null
}

{isLogined?
<div className='d-flex align-items-center '>

        <a href="/profile" >
        <img src={profile} alt="" className='icon ms-3' />
        </a>
        {location.pathname.includes('profile')?
        <FontAwesomeIcon icon={faArrowRightFromBracket} className='icon ms-5 fs-3  text-primary ' onClick={()=>{
                dispatch(setAlert('log out'))
        }}/>:null
}
        </div>
        :
        <buttons className='d-flex ms-md-5 ms-2 justify-content-between gap-4'>
        <button className='  login button' > <a href="/login" className='w-100  py-2 ' >Log in</a></button>
        <button className=' border-0  sign'> <a href="/signup" className=' py-2'>Sign up</a></button>
        </buttons>
}
{isLogined?
        <FontAwesomeIcon icon={faBarsStaggered} flip className='ms-4 d-lg-none z-2' onClick={()=>{
        setShowLinks(!showLinks)
        }}/>:null
}
</div>
</header>
)
}


export default Header;
