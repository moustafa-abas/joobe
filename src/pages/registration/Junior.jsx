import { useEffect, useState } from 'react'
import photo from'../../images/Group 64.jpg'
import edit from'../../images/Group.svg'
import Logo from '../../logo'
import axios from 'axios'
import { useForm } from 'react-hook-form';

const Junior = () => {
    const { register, handleSubmit, formState: { errors },watch }  = useForm({
        defaultValues:{
        image:'',
        name:'',
        age:'',
        experience:'',
        track:'',
        trackLevel:''
    }
    // resolver:zodResolver(schema),
    });
    const onSubmit = (data) => {

    location.replace('/endJunior')
    console.log(data);
    };
    const [src, setSrc] = useState(photo)
    const [tracks, setTracks] = useState([]);
        useEffect(() => {
            axios.get('https://jobee-5pfw.onrender.com/api/tracks')
            .then(((response) => {
            setTracks(response.data[0].tracks);
            }))
            .catch(error => {
            console.error('حدث خطأ أثناء جلب البيانات:', error);
            });
        }, []);
return (
<div className="junior Container">
<Logo/>
<h1 className='text-center fs-2 mt-2 fw-bold'> Junior / Student Data</h1>
<p className='text-center fw-light fs-5'>Please enter this following data</p>
<form className='mx-auto text-center' onSubmit={ handleSubmit(onSubmit)} noValidate>

        <input type="file" id='image' className='opacity-0 text-center '
    name='image'
    {...register('image')}
    accept='image/*'
    onChange={ (e)=>{setSrc(URL.createObjectURL(e.target.files[0]))}}

    />
    <label htmlFor="image" className='mx-auto position-relative file '>
        <img src={src} alt="valid source" className='profile mt-3  rounded-circle'/>
        <img src={edit} alt=""  className='edit position-absolute bottom-0 end-0 p-2 rounded-circle'/>
    </label>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="text" 
    className='border-0 '
    placeholder='Name'
    name='name'
    id='name'
{...register('name', { required: '* User name is required'})}

    />
    <label htmlFor='name' className='position-absolute fw-light top-0 px-2'>User Name</label>
</div>
<p className='error mt-2 text-start'>{errors.name?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="number" 
    className='border-0 '
    placeholder='Age'
    name='age'
    id='age'
    {...register('age')}

    />
    <label htmlFor='age' className='position-absolute fw-light top-0 px-2'>Age</label>
</div>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="number" 
    className='border-0 '
    placeholder='Ex'
    name='ex'
    id='ex'
    {...register('experience')}
    />
    <label htmlFor='ex' className='position-absolute fw-light top-0 px-2'>Experience Years</label>
</div>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="track" id="track"      
{...register('track',
{required:' * select your track'})}       
>
<option  selected hidden disabled>Track</option>
            {tracks.map((track) => (
                <option key={track} value={track}>{track}</option>
                        ))}
</select>
    <label htmlFor='select' className='position-absolute fw-light top-0 px-2'>Track</label>
</div>
<p className='error mt-2 text-start'>{errors.track?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="trackLevel" id="trackLevel"

{...register('trackLevel')}
disabled={!watch('track')}        
>
<option value="" selected hidden disabled>Track level</option>
<option value="first">first</option>
<option value="second">second</option>
</select>
    <label htmlFor='selectLevel' className='position-absolute fw-light top-0 px-2'>Track level</label>
</div>

<button type='submit' className='w-100 my-5 py-4' >Next Step</button>
</form>
</div>
)}
export default Junior