import { useEffect, useState } from 'react';
import cvIcon from'../../images/folder-add.svg'
import Logo from '../../logo'
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import {  sendData} from '../store/userSlice';

const Test = () => {
    const user=useSelector((state)=>state.user.userData)
    // console.log(user)
const dispatch=useDispatch()
const [militaries, setMilitaries] = useState([]);
const [selectedCV, setSelectedCV] = useState();
const { register, handleSubmit, formState:{errors} }  = useForm({
    defaultValues:{
        militaryStatus:'',
        about:'',
        skills:[],
        cv:null
}
});
const onSubmit = (data) => {
const skills=data.skills.split(' ')
const all={...user,...data,skills}
dispatch(sendData(all))
console.log(all)
};
const handleFileChange = (e) => {
    setSelectedCV (e.target.files[0]);
}
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
<select name="militaryStatus" id="Military Status" 
{...register('militaryStatus',
{required:'* this field is required'}
)}
>
<option selected hidden>status</option>
        {militaries.map((item) => (
            <option key={item} value={item}>{item}</option>
                    ))}
</select>
<label htmlFor='Military Status' className='position-absolute fw-light top-0 px-2'>Military Status</label>
</div>
<p className='error mt-2 text-start'>{errors.militaryStatus?.message}</p>

<div className=' inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<textarea name="about" id="area" rows='5' className=' w-100 border-0 '
placeholder='About'
{...register('about',
{required:'* this field is required'
})}

/>
<label htmlFor='area' className='position-absolute fw-light top-0 px-2'>About Your </label>
</div>
<p className='error mt-2 text-start'>{errors.about?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3  mt-4 gap-3'>
<textarea name="skills" id="skills" rows='3' className=' w-100 border-0 '
placeholder='Enter your skills'
{...register('skills',
{required:'* this field is required'
})}
/>
<label htmlFor='skills' className='position-absolute fw-light top-0 px-2'>Skills </label>
</div>
<p className='error mt-2 text-start'>{errors.skills?.message}</p>


    <div className=' my-5 py-2 cv d-flex justify-content-center '>
    <input type="file" 
    id='cv'
    name='cv'
    {...register('cv')}

    onChange={ handleFileChange  }
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

export default Test
