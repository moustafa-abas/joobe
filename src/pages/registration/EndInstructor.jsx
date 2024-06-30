import { useForm } from "react-hook-form"
import Logo from "../../logo"
import { useDispatch, useSelector } from "react-redux"
import { signInstructor } from "../store/userSlice"

const EndInstructor = () => {
  const dispatch=useDispatch()
  const user=useSelector((state)=>state.user.userData)
  console.log(user)
  const {register,handleSubmit,formState:{errors}}=useForm({

  })
  onsubmit=(data)=>{
    const all={...user,...data}
dispatch(signInstructor(all))
  }
  return (
<div className="instructor Container">
<Logo/>

<form action="" className='form mx-auto' onSubmit={handleSubmit(onsubmit)}>
<h2 className='text-center fs-2 mt-2 fw-bold'>Instructor Data</h2>
<p className='text-center fw-light fs-5'>Please enter this following data</p>

    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
    <input type="email" id='faceLink'
        placeholder='Facebook Link'
        name='faceLink'
        {...register('facebook',
          {required:'facebook link is required'}
        )}
        />
<label htmlFor="faceLink" className='position-absolute fw-light top-0 px-2'>Facebook link</label>
</div>
<p className='error mt-2 text-start'>{errors.facebook?.message}</p>

<div className=' inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<textarea name="about" id="area" rows='5' className=' w-100 border-0 '
placeholder='tell us about you'
{...register('about',
{required:'* this field is required'
})}

/>
<label htmlFor='area' className='position-absolute fw-light top-0 px-2'>About You </label>
</div>
<p className='error mt-2 text-start'>{errors.about?.message}</p>




<button type="submit" className='w-100 my-5 py-4'>Save</button>
</form>
</div>
  )
}

export default EndInstructor
