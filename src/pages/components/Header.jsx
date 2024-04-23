import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import x from'../images/x.svg'
import search from'../images/search.svg'
import bill from'../images/bill.svg'
import profile from'../images/profile.svg'
import { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import Logo from '../../logo'
const Header = () => {
const [isVisible, setIsVisible] = useState(true)
const [isLogined, setIsLogined] = useState(true)
const [showLinks, setShowLinks] = useState(false)

return (
<header className=' position-relative'>
        {isLogined?<></>:
        <p style={{display:isVisible?"block":"none"}} className="text-center py-2 fw-medium fs-6 ">Sign up and get 20% off to your first course. <a href='/signup'  > Sign Up Now </a> 
        <img src={x} alt="" onClick={()=>{setIsVisible(false)}} className='position-absolute '/></p>
        }
        
<div className='Container d-flex  my-2 align-items-center'>
<Logo/>
<form className="  d-flex align-items-center ms-4 position-relative" role="search">
        <input className="form-control p-2   w-100" type="search" placeholder="Search for products..." aria-label="Search" autoComplete='true'/>
        <img src={search} alt="" className='position-absolute  '/>
        </form>
        <ul className='m-0  d-lg-flex d-none  justify-content-between align-items-center '>
        <li className='me-4'><NavLink className='text-decoration-none'  activeClassName="active" to={"/"}>Home</NavLink></li>
        <li className='mx-4'><NavLink className='text-decoration-none' activeClassName="active" to={"/community"}>Community</NavLink></li>
        <li className='mx-4'><NavLink className='text-decoration-none' activeClassName="active" to={"/jobs"}>Jops</NavLink></li>
{isLogined?<>
        <li className='mx-4'><NavLink className='text-decoration-none'  activeClassName="active" to={"/courses"}>My courses</NavLink></li>
        <li className='mx-4'><NavLink className='text-decoration-none'  activeClassName="active" to={"/quiz"}>Quizzes</NavLink></li>
        </>
        :
        <>
        </>
}
        </ul>
        {showLinks?
        <ul className='m-0  d-flex d-lg-none flex-column  justify-content-between align-items-center '>
            <li className='me-3'><NavLink className='text-decoration-none'  activeClassName="active" to={"/ "}>Home</NavLink></li>
            <li className='mx-3'><NavLink className='text-decoration-none' activeClassName="active" to={"/community"}>Community</NavLink></li>
            <li className='mx-3'><NavLink className='text-decoration-none' activeClassName="active" to={"/jobs"}>Jops</NavLink></li>
{isLogined?<>
            <li className='mx-3'><NavLink className='text-decoration-none'  activeClassName="active" to={"/courses"}>My courses</NavLink></li>
            <li className='mx-3'><NavLink className='text-decoration-none'  activeClassName="active" to={"/quiz"}>Quizzes</NavLink></li>
            </>
            :
            <></>
}
        </ul>

        :<></>
}
{isLogined?<>
        <img src={bill} alt="" className='icon ms-3'/> 
        <img src={profile} alt="" className='icon ms-3' onClick={()=>{location.replace("/profile")}}/>
        </>
        :
        <buttons className='d-flex ms-5 justify-content-between gap-4'>
        <submitButton className=' py-2  px-5 login button' onClick={()=>{
                setIsLogined(true)
        }}> <a href="/" >Log in</a></submitButton>
        <submitButton className=' py-2 border-0 px-5 sign'> <a href="/signup">Sign up</a></submitButton>
        </buttons>
}
{isLogined?
        <FontAwesomeIcon icon={faBarsStaggered} flip className='ms-4 d-lg-none ' onClick={()=>{
            setShowLinks(!showLinks)
        }}/>:<></>
}
</div>
</header>
)
}


export default Header;
