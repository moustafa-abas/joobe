import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {  signUp } from '../store/userSlice';
import Logo from '../../logo'
import lock from'../../images/lock.svg'
import right from'../../images/login.svg'
import user from'../../images/lucide_user-round.svg'
import email from'../../images/fluent_mail-24-regular.svg'

export const SignUp = () => {
  const dispatch=useDispatch()
const [showPass , setShowPass] = useState(false)
const [showConfirmPass , setShowConfirmPass] = useState(false)
const handelShow=()=>{
  setShowPass(!showPass)
  }
  const handleConfirmPassword=()=>{
    setShowConfirmPass(!showConfirmPass)
    }
const { register, handleSubmit, formState: { errors } ,watch}  = useForm({
  defaultValues:{
    username:'',
      email:'',
      password:'',
      confirmPassword:''
  }
});
const onSubmit = (data) => {
  dispatch(signUp(data))
};
return(
    <div className='signUp Container d-flex '>
<main>
<Logo/>
<form action="" className='mx-auto' onSubmit={ handleSubmit(onSubmit)} noValidate >
<h1 className='fs-2 mt-2 fw-bold'> Sign Up Now </h1>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={user} alt="" className='icon fs-5'/>
<input className='border-0 '
type="text"
placeholder='Name'
name='username'
id='username'
{...register('username', { required: '* User name is required'})}
/>
<label htmlFor='username' className='position-absolute fw-light top-0 px-2'>user name</label>
</div>
<p className='error mt-2'>{errors.username?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={email} alt="" className='icon fs-5'/>
<input  className='border-0 '
type="email"
id='email'
placeholder='Email '
name='email'
{...register('email', { required: '* Email is required',pattern: { value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' },

})}
/>
<label htmlFor='email' className='position-absolute fw-light top-0 px-2'>Email</label>
</div>
<p className='error mt-2'>{errors.email?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={lock} alt="" className='icon fs-5'/>
<input  className='border-0 '
type={showPass?"text":"password"} 
placeholder='************' 
name='password'
id='password'
{...register('password',
{
 required: ' * password is required',
        minLength:{ value:8, 
        message:'* password should be at least 8 characters'}})}
/>
<label htmlFor='password' className='position-absolute fw-light top-0 px-2'>Password </label>
<FontAwesomeIcon icon={faEye} onClick={handelShow} className='eye ' />
</div>
<p className='error mt-2'>{errors.password?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={lock} alt="" className='icon fs-5'/>
<input  className='border-0 '
type={showConfirmPass?"text":"password"} 
placeholder='************' 
name='confirmPassword'
id='confirm'
{...register('confirmPassword',
{
 required: ' * Confirm Password is required',
        minLength:{ value:8, message:'*password should be at least 8 characters'},
        validate: (value) =>
        value === watch('password')|| 'Passwords do not match'})}
/>
<label htmlFor='confirm' className='position-absolute fw-light top-0 px-2'>Confirm Password </label>
<FontAwesomeIcon icon={faEye} onClick={handleConfirmPassword} className='eye ' />
</div>
<p className='error mt-2'>{errors.confirmPassword?.message}</p>
<button type='submit' className='w-100 py-3 my-4'  >Sign up</button>
<p className=' text-center fs-5 fw-lighter'> have an account already? 
<a href="/login" className='ms-2 fw-bold text-decoration-underline'>Login</a> </p>
</form>
</main>
<aside>
<img src={right} alt="" className='w-100 ' />
</aside>
</div>
)
}
export default SignUp;



