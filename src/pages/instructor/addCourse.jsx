import Header from'../../components/Header'
import { useForm } from 'react-hook-form';
import cvIcon from'../../images/folder-add.svg'
import cvIcon2 from'../../images/PDF_file_icon 1.png'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const addCourse = () => {
  const [cv, setCv] = useState()
  const tracks=useSelector((state)=>state.user.tracks)
const { register, handleSubmit, formState: { errors },watch }  = useForm({
  defaultValues:{
    CourseName:'',
    will_learn:'',
    Description:'',
  experience:null,
  track:'',
  level:''
}
});
const onSubmit = (data) => {
      console.log(data);
};


  return (<>
      <Header/>
    <div className='addcourse Container'>
      <form className=' w-100 d-flex  flex-wrap mt-5 gap-5' onSubmit={ handleSubmit(onSubmit)} noValidate>

<div className='inputGroup   d-flex position-relative py-3 px-3 align-items-center  '>
    <input type="text" 
    className='border-0 '
    placeholder='Course Name'
    name='CourseName'
    id='CourseName'
{...register('CourseName', { required: '* Course Name is required'})}

    />
    <label htmlFor='CourseName' className='position-absolute fw-light top-0 px-2'>Course Name</label>
</div>
<p className='error mt-2 text-start'>{errors.CourseName?.message}</p>

<div className='inputGroup    d-flex position-relative py-3 px-3 align-items-center '>
    <input type="text" 
    className='border-0 '
    placeholder='what you will learn'
    name='learn'
    id='learn'
    {...register('will_learn',
    { required: '* this field is required'})}

    />
    <label htmlFor='learn' className='position-absolute fw-light top-0 px-2'>what you will learn</label>
</div>
<p className='error mt-2 text-start'>{errors.will_learn?.message}</p>

<div className='inputGroup   d-flex position-relative py-3 px-3 align-items-center '>
    <input type="text" 
    className='border-0 '
    placeholder='Description'
    name='Description'
    id='Description'
    {...register('Description',{required:'* Description is required',
    })}
    />
    <label htmlFor='Description' className='position-absolute fw-light top-0 px-2'>Description</label>
</div>
<p className='error mt-2 text-start'>{errors.Description?.message}</p>

<div className='inputGroup   d-flex position-relative py-3 px-3 align-items-center '>
<select name="track" id="track"      
{...register('track',
{required:' * select course track'})}       
>
<option  selected  hidden >Track</option>
            {tracks.map((track) => (
                <option key={track} value={track}>{track}</option>
                        ))}
</select>
    <label htmlFor='select' className='position-absolute fw-light top-0 px-2'>Track</label>
</div>
<p className='error mt-2 text-start'>{errors.track?.message}</p>

<div className='inputGroup   d-flex position-relative py-3 px-3 align-items-center '>
<select name="tracklevel" id="tracklevel"

{...register('level',{required:' * select course track level'})}
disabled={!watch('track')}        
>
<option value="" selected hidden disabled>Track level</option>
<option value="Beginner">Beginner</option>
<option value="Intermediate">Intermediate</option>
<option value="Advanced">Advanced</option>
</select>
    <label htmlFor='tracklevel' className='position-absolute fw-light top-0 px-2'>Track level</label>
</div>
<p className='error mt-2 text-start'>{errors.level?.message}</p>
<div className='inputGroup   d-flex position-relative py-3 px-3 align-items-center '>
    <input type="number" 
    className='border-0 '
    placeholder='Cost'
    name='Cost'
    id='Cost'
    {...register('Cost',
    { required: '* Cost is required'
    ,
    })}

    />
    <label htmlFor='Cost' className='position-absolute fw-light top-0 px-2'>Cost</label>
</div>
<p className='error mt-2 text-start'>{errors.Cost?.message}</p>

<div className={`${cv? "border-0":null}  py-4  mx-auto   cv d-flex justify-content-center `}>
    <input type="file" 
    id='cv'
    name='cv'
    multiple
    {...register('cv')}
onChange={(e)=>setCv(e.target.files[0])}
    />
        <label htmlFor='cv' className={`labelCv ${cv? "text-dark  justify-content-between px-4" : "justify-content-center"}  py-3 fw-light fs-5 w-100 d-flex gap-3 align-items-center `}>
       { cv!=null ?
       <>
       <img src={cvIcon2} alt="" /> 
       {cv.name}
       </>
       :
       <>
       <img src={cvIcon} alt="" /> 
       Upload course Cover      </>
       }
            </label>
        </div>
<button type='submit' className='w-50 my-5 mx-auto py-4' >Upload</button>
</form>

    </div>
    </>
  )
}

export default addCourse
