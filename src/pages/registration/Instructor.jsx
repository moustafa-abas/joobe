import { useForm } from "react-hook-form";
import Logo from "../../logo";
import { useDispatch, useSelector } from "react-redux";
import { firstDataInstructor, getTracks } from "../store/userSlice";
import { useEffect } from "react";
 const Instructor = () => {
    const dispatch =useDispatch()
    const tracks=useSelector((state)=>state.user.tracks)
console.log(tracks)
    const { register, handleSubmit, formState: { errors } }  = useForm({
        defaultValues:{

    }
    });
    const onSubmit = (data) => {
dispatch(firstDataInstructor(data))
    };
    useEffect(() => {
        dispatch(getTracks())
                }, []);
return (
<div className="instructor Container">
<Logo/>

<form action="" className='form mx-auto' onSubmit={ handleSubmit(onSubmit)}>
<h2 className='text-center fs-2 mt-2 fw-bold'>Instructor Data</h2>
<p className='text-center fw-light fs-5 mb-5'>Please enter this following data</p>
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

    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
    <select name="gender" id="gender" 
    {...register('gender',
        {required:' * gender your track'})}  
    >
    <option value="male"  > Male</option>
    <option value="female"> feMale</option>
    </select>
    <label htmlFor="gender" className='position-absolute fw-light top-0 px-2'>Gender</label>
    </div>
<p className='error mt-2 text-start'>{errors.gender?.message}</p>

    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
    <select name="track" id="select" 
    {...register('track',
        {required:' * select your track'})}    
    >
               {tracks?.map((track) => (
                <option key={track} value={track}>{track}</option>
                        ))}
    </select>
    <label htmlFor="select" className='position-absolute fw-light top-0 px-2'>Track</label>
    </div>
    <p className='error mt-2 text-start'>{errors.track?.message}</p>

    <button className='w-100 my-5 py-4' >Next Step</button>
    </form>
</div>
)
}

export default Instructor

