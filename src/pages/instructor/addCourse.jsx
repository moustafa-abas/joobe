import { useEffect, useState } from 'react';
import Header from'../../components/Header'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import cvIcon from'../../images/folder-add.svg'
import cvIcon2 from'../../images/PDF_file_icon 1.png'
const addCourse = () => {
  const [tracks, setTracks] = useState([]);
  const [cv, setCv] = useState()

  useEffect(() => {
    axios.get('https://jobee-5pfw.onrender.com/api/tracks')
    .then(((response) => {
    setTracks(response.data[0].tracks);
    }))
    .catch(error => {
    console.error('حدث خطأ أثناء جلب البيانات:', error);
    });
}, []);
const { register, handleSubmit, formState: { errors },watch }  = useForm({
  defaultValues:{
    CourseName:'',
    Language:'',
    Description:'',
  experience:null,
  track:'',
  tracklevel:''
}
});
const onSubmit = (data) => {

      console.log(data);
// dispatch(firstDataJunior(data))
};
  return (
    <div className='addcourse'>
      <Header/>
      <form className=' mx-auto text-center  mt-5' onSubmit={ handleSubmit(onSubmit)} noValidate>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
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

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="text" 
    className='border-0 '
    placeholder='Language'
    name='Language'
    id='Language'
    {...register('Language',
    { required: '* Language is required'})}

    />
    <label htmlFor='Language' className='position-absolute fw-light top-0 px-2'>Language</label>
</div>
<p className='error mt-2 text-start'>{errors.Language?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
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

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
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

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="tracklevel" id="tracklevel"

{...register('tracklevel',{required:' * select course track level'})}
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

<div className={`${cv? "border-0":null} my-5 py-4 cv d-flex justify-content-center `}>
    <input type="file" 
    id='cv'
    name='cv'
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
       Upload course videos       </>
       }
            </label>
        </div>
<button type='submit' className='w-100 my-5 py-4' >Upload</button>
</form>
    </div>
  )
}

export default addCourse
