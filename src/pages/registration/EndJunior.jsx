import { useEffect, useState } from 'react';
import cvIcon from'../../images/folder-add.svg'
import Logo from '../../logo'
import axios from 'axios';
import { useForm } from 'react-hook-form';

const EndJunior = () => {
    const { register, handleSubmit }  = useForm({
        defaultValues:{
            military:'',
            about:'',
            skills:'',
            cv:''
    }
    // resolver:zodResolver(schema),
    });
    const onSubmit = (data) => {

    location.replace('/')
    console.log(data);
    };

    const [militaries, setMilitaries] = useState([]);
    useEffect(() => {
        axios.get('https://jobee-5pfw.onrender.com/api/militry')
        .then(((response) => {
        setMilitaries(response.data[0].MilitryService);
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

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="military" id="Military Status" 
{...register('military')}
>
<option  disabled selected hidden>status</option>
            {militaries.map((item) => (
                <option key={item} value={item}>{item}</option>
                        ))}
</select>
    <label htmlFor='Military Status' className='position-absolute fw-light top-0 px-2'>Military Status</label>
</div>
<div className=' inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<textarea name="about" id="area" rows='5' className=' w-100 border-0 '
placeholder='About'
{...register('about')}

/>
<label htmlFor='area' className='position-absolute fw-light top-0 px-2'>About Your </label>
</div>
<div className='inputGroup d-flex position-relative py-3 px-3  mt-4 gap-3'>
<textarea name="skills" id="skills" rows='3' className=' w-100 border-0 '
placeholder='Enter your skills'
{...register('skills')}

/>
<label htmlFor='skills' className='position-absolute fw-light top-0 px-2'>Skills </label>
</div>

        <div className=' my-5 py-2 cv d-flex justify-content-center '>
        <input type="file" 
        id='cv'
        name='cv'
        {...register('cv')}

        // onChange={ (e)=>{setCv(e.target.files[0])}  }
        />
            <label htmlFor='cv' className="labelCv py-3 fw-light fs-5 w-100 d-flex gap-3 align-items-center justify-content-center">
        <img src={cvIcon} alt="" /> 
            Upload your cv/resume
            </label>
            </div>
<button type="submit" className='w-100 mb-5 py-4' >Save</button>
</form>
    </div>
  )
}

export default EndJunior
