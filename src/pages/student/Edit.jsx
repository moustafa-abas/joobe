import { useForm } from 'react-hook-form';
import logo from'../../images/logo.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import lock from'../../images/lock.svg'
import { getTracks } from '../store/userSlice';

const Edit = () => {
    const userData=useSelector((state)=>state.user.userData)
    const tracks=useSelector((state)=>state.user.tracks[0].tracks)
const [showPass , setShowPass] = useState(false)
const handelShow=()=>{
    setShowPass(!showPass)
    }
    const { register, handleSubmit, formState: { errors },watch }  = useForm({
        defaultValues:{
            username:userData.username,
        password:null,
        age:userData.age,
        experience:userData.experience,
        track:userData.track,
        tracklevel:userData.tracklevel
    }
    });
    const dispatch=useDispatch()
    useEffect(() => {
dispatch(getTracks())
    }, []);

    // const id = useSelector((state)=>state.user.userData._id)
    // const token = useSelector((state)=>state.user.token)
    const onSubmit = async(data ) => {
        localStorage.setItem('edit',JSON.stringify(data))
        location.replace('/completeEdit')
        // try {
        //     console.log(token)
        //     const response = await axios.put(`https://jobee-5pfw.onrender.com/api/student/${id}`, 
        //        data,
        //     {
        //         headers:{
        //             Authorization:`Bearer ${token}`
        //         }
        //     });
      
        //     console.log('Response:', response.data);
        //   } catch (error) {
        //     console.error('Error updating user data:', error);
        //   }
    };
  return (
    <div className="edit Container mt-3">
<img src={logo} alt="" />
<form className='mx-auto text-center ' onSubmit={ handleSubmit(onSubmit)} noValidate>
<h2 className='fw-bold mb-5'>Edit Profile</h2>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="text" 
    className='border-0 '
    placeholder='Name'
    name='username'
    id='name'
{...register('username', { required: '* User name is required'})}

    />
    <label htmlFor='name' className='position-absolute fw-light top-0 px-2'>User Name</label>
</div>
<p className='error mt-2 text-start'>{errors.username?.message}</p>
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
<p className='error mt-2 text-start'>{errors.password?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="number" 
    className='border-0 '
    placeholder='Age'
    name='age'
    id='age'
    {...register('age',
    { required: '* age is required'
    ,
    min: {
        value: 18,
        message: "* You must be at least 18 years old",
      },
    })}

    />
    <label htmlFor='age' className='position-absolute fw-light top-0 px-2'>Age</label>
</div>
<p className='error mt-2 text-start'>{errors.age?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="number" 
    className='border-0 '
    placeholder='Ex'
    name='ex'
    id='ex'
    {...register('experience',{required:'* experience is required',
    min: {
        value: 0,
        message: "* experience can't be negative",
      },
    })}
    />
    <label htmlFor='ex' className='position-absolute fw-light top-0 px-2'>Experience Years</label>
</div>
<p className='error mt-2 text-start'>{errors.experience?.message}</p>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="track" id="track"      
{...register('track',
{required:' * select your track'})}       
>
<option  selected  hidden >{userData.track}</option>
            {tracks?.map((track) => (
                <option key={track._id} value={track}>{track}</option>
                        ))}
</select>
    <label htmlFor='select' className='position-absolute fw-light top-0 px-2'>Track</label>
</div>
<p className='error mt-2 text-start'>{errors.track?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="tracklevel" id="tracklevel"

{...register('tracklevel',{required:' * select your track level'})}
disabled={!watch('track')}        
>
<option value="" selected hidden disabled>Track level</option>
<option value="Beginner">Beginner</option>
<option value="Intermediate">Intermediate</option>
<option value="Advanced">Advanced</option>
</select>
    <label htmlFor='tracklevel' className='position-absolute fw-light top-0 px-2'>Track level</label>
</div>
<p className='error mt-2 text-start'>{errors.tracklevel?.message}</p>

<button type='submit' className='w-100 my-5 py-4' >Next Step</button>
<button type='button'  className='button w-100 my-5 py-4'onClick={()=>location.replace('/profile')} >Back</button>
</form>
    </div>
  )
}

export default Edit
