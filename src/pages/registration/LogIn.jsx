import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'

import google from'../../images/Encapsulated Group.svg'
import apple from'../../images/Apple logo.svg'
import email from'../../images/fluent_mail-24-regular.svg'
import lock from'../../images/lock.svg'
import right from'../../images/side right.svg'


import Logo from '../../logo'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import {z} from 'zod';
// import {zodResolver} from "@hookform/resolvers/zod";
const LogIn=()=>{
    // const schema=z.object({
    //     email:z.string().nonempty('email is required').email("email format is not valid"),
    //     // password:z.number().
    // })
    const { register, handleSubmit, formState: { errors } }  = useForm({
        defaultValues:{
            email:'',
            password:''
        }
        // resolver:zodResolver(schema),
    });
    const onSubmit = (data) => {
        location.replace('/')
        console.log(data);
    };
const [showPass , setShowPass] = useState(false)
const handelShow=()=>{
setShowPass(!showPass)
}

return (

<div className='login Container d-flex '>
<main>
<Logo/>
<form  className='mx-auto' onSubmit={ handleSubmit(onSubmit)} noValidate >
<h1 className='fs-2 mt-2 fw-bold'>Log in Now </h1>
<div  className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<img src={email} alt="" className='icon fs-5'/>
<input  className='border-0 '
type="email"
id='email'
placeholder='Email '
name='email'
{...register('email', { required: '* Email is required',pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
validate:{
    notAdmin:(fieldValue)=>{
        return(
            fieldValue!=="admin@example.com"||"enter a different email address"
        )
    },
    notBlackListed:(fieldValue)=>{
        return(
            !fieldValue.endsWith("baddomain.com")||
            "this domain is not  supported"
        )
    },
    // emailAvailable:async(fieldValue)=>{
    //     const res = await axios.get("").then(
    //         const data =res.data
    //         return data.lenth==0||"email already exists"
    //     )
    // }
} })}
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
        minlength:{ value:'8', message:'*password should be at least 8 characters'}})}
/>
<label htmlFor='password' className='position-absolute fw-light top-0 px-2'>Password </label>
<FontAwesomeIcon icon={faEye} onClick={handelShow} className='eye ' />
</div>
<p className='error mt-2'>{errors.password?.message}</p>


<button type='submit' className='w-100 py-3 mt-4'>Log in</button>

<div className="or d-flex justify-content-between align-items-center mt-4">
<div className="line  mb-3  "></div>
<p className=' mx-auto d-inline text-center fs-6 fw-medium'>Or login with</p>
<div className="line mb-3 "></div>
</div>

<button className='google mb-4 gap-3 fw-light w-100 py-3'  >
<img src={google}  alt="" />
Log in using Google
</button>

<button className='apple mb-4 gap-3 fw-light w-100 py-3'>
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
</div>
)
}

export default LogIn;

