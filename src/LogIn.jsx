import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'

import google from'../images/Encapsulated Group.svg'
import apple from'../images/Apple logo.svg'
import email from'../images/fluent_mail-24-regular.svg'
import lock from'../images/lock.svg'
import right from'../images/side right.svg'


import Logo from '../../logo'
import { useState } from 'react';

const LogIn=()=>{

const [showPass , setShowPass] = useState(false)
const handelShow=()=>{
setShowPass(!showPass)
}

const [userData, setUserData] = useState({
email:'',
password:'',
})

const handleChange=(e)=>{
const newUserData={...userData};
newUserData[e.target.name]=e.target.value;
setUserData({...newUserData})
}





return (

<login className=' Container d-flex '>
<main>
<Logo/>
<form action="" className='mx-auto' >
<h1 className='fs-2 mt-2 fw-bold'>Log in Now </h1>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={email} alt="" className='icon fs-5'/>
<input  className='border-0 '
onChange={handleChange} 
type="text"
id='email'
placeholder='Email '
name='email'
/>
<label htmlFor='email' className='position-absolute fw-light top-0 px-2'>Email</label>
</inputGroup>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={lock} alt="" className='icon fs-5'/>
<input  className='border-0 '
onChange={handleChange} 
type={showPass?"text":"password"} 
placeholder='************' 
name='password'
id='password'
/>
<label htmlFor='password' className='position-absolute fw-light top-0 px-2'>Password </label>
<FontAwesomeIcon icon={faEye} onClick={handelShow} className='eye ' />
</inputGroup>

{/* validation///////////////////////////////// */}
<submitButton type='submit' className='py-3 mt-4'  onClick={(e)=>{
e.preventDefault();
}}>Log in</submitButton>
<div className="or d-flex justify-content-between align-items-center mt-4">
<div className="line  mb-3  "></div>
<p className=' mx-auto d-inline text-center fs-6 fw-medium'>Or login with</p>
<div className="line mb-3 "></div>
</div>

<button className='google mb-4 gap-3 fw-light w-100'  >
<img src={google}  alt="" />
Log in using Google
</button>
<button className='apple mb-4 gap-3 fw-light w-100'>
<img src={apple}  alt="" />
Log in using Apple  
</button>
<p className=' text-center fs-5 fw-lighter'> Don&#39;t have an account ?
<a href="/signup" className='ms-2 fw-bold text-decoration-underline'>New registration</a> </p>

</form>


</main>
<aside className='d-none d-sm-flex '>
<img src={right} alt="" className='w-100' />
</aside>
</login>
)
}

export default LogIn;

