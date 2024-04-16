import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';
import Logo from '../../logo'
import lock from'../images/lock.svg'

import right from'../images/side right.svg'
import user from'../images/lucide_user-round.svg'
import email from'../images/fluent_mail-24-regular.svg'

const SignUp = () => {
const [showPass , setShowPass] = useState(false)
const [showConfirmPass , setShowConfirmPass] = useState(false)
const handleConfirmPassword=()=>{
setShowConfirmPass(!showConfirmPass)
}
const handelShow=()=>{
setShowPass(!showPass)
}
const [userData, setUserData] = useState({
  name:'',
  password:'',
  confirmPassword:'',
  email:'',
})
const handleChange=(e)=>{
  const newUserData={...userData};
  newUserData[e.target.name]=e.target.value;
  setUserData({...newUserData})
}
const signUp=(e)=>{
  e.preventDefault();
//   userData.name==='' || userData.password===''||userData.confirmPassword!==userData.password||userData.email===''?alert('please complete data'):
  location.replace("/select")
}
return(
    <signUp className='signup Container d-flex'>
<main>
<Logo/>
<form action="" className='mx-auto' >
<h1 className='fs-2 mt-2 fw-bold'> Sign Up Now </h1>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={user} alt="" className='icon fs-5'/>
<input className='border-0 '
onChange={handleChange}
type="text"
placeholder='Name'
name='name'
id='name'
/>
<label htmlFor='name' className='position-absolute fw-light top-0 px-2'>user name</label>
</inputGroup>
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
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={lock} alt="" className='icon fs-5'/>
<input  className='border-0 '
onChange={handleChange} 
type={showConfirmPass?"text":"password"} 
placeholder='************' 
name='confirmPassword'
id='confirm'
/>
<label htmlFor='confirm' className='position-absolute fw-light top-0 px-2'>Confirm Password </label>
<FontAwesomeIcon icon={faEye} onClick={handleConfirmPassword} className='eye ' />
</inputGroup>


<submitButton type='submit' className='py-3 my-4'  onClick={signUp}>Sign up</submitButton>
<p className=' text-center fs-5 fw-lighter'> have an account already? 
<a href="/" className='ms-2 fw-bold text-decoration-underline'>Login</a> </p>


</form>
</main>
<aside>
<img src={right} alt="" className='w-100'/>
</aside>
</signUp>
)
}

export default SignUp;



