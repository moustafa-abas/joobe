import { useDispatch, useSelector } from 'react-redux';
import logo from'../../images/logo.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import photo from'../../images/Group 64.jpg'
import edit from'../../images/Group.svg'
import cvIcon from'../../images/folder-add.svg'
import cvIcon2 from'../../images/PDF_file_icon 1.png'
import { editData } from '../store/userSlice';
const CompleteEdit = () => {
    const userData=useSelector((state)=>state.user.userData)
    console.log(userData.cv)
const [militaries, setMilitaries] = useState([]);
const [cv, setCv] = useState(userData.cv)
const dispatch=useDispatch()
    useEffect(() => {
        axios.get('https://jobee-5pfw.onrender.com/api/militry')
        .then(((response) => {
        setMilitaries(response.data[0].MilitryService);
        }))
        .catch(error => {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
        });
    }, []);
    const { register, handleSubmit, formState: { errors },watch }  = useForm({
        defaultValues:{
            militaryStatus:userData.militaryStatus,
            about:userData.about,
            skills:userData.skills,
            profileImage:userData.profileImage,
            cv:null
    }
    });
    const [src, setSrc] = useState(photo)
    const [selectedPhoto, setSelectedPhoto] = useState();

    const onSubmit = (data) => {
        // const skills=data.skills.split(' ')
        const firstData=JSON.parse(localStorage.getItem('edit'))
const skills=data.skills.split(' ')

        const all ={...firstData , ...data,skills}
        dispatch(editData(all))
        // const all={...user,...data,skills, cv}
        // dispatch(sendData(all))
        };
        const handleFileChange = (e) => {
            setSrc(URL.createObjectURL(e.target.files[0]))
            setSelectedPhoto(JSON.stringify(e.target.files[0]));
        };
  return (
    <div className="edit Container mt-3">
<img src={logo} alt="" />
<form className='mx-auto text-center ' onSubmit={ handleSubmit(onSubmit)} noValidate>
<h2 className='fw-bold mb-'>Edit Profile</h2>
<input type="file" id='profileImage' className='opacity-0 text-center '
    name='profileImage'
    {...register('profileImage')}
    accept='image/*'
    onChange={ handleFileChange}

    />
    <label htmlFor="profileImage" className='mx-auto position-relative file mb-4'>
        <img src={src} alt="valid source" className='profile mt-3  rounded-circle'/>
        <img src={edit} alt=""  className='edit position-absolute bottom-0 end-0 p-2 rounded-circle'/>
    </label>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="militaryStatus" id="Military Status" 
{...register('militaryStatus',
{required:'* this field is required'}
)}
>
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

<div className={`${cv? "border-0":null} my-5 py-2 cv d-flex justify-content-center `}>
    <input type="file" 
    id='cv'
    name='cv'
    {...register('cv')}
onChange={(e)=>setCv(e.target.files[0])}
    />
        <label htmlFor='cv' className={`labelCv ${cv? "text-dark  justify-content-between px-4" : "justify-content-center"}  py-3 fw-light fs-5 w-100 d-flex gap-3 align-items-center `}>
       { cv?
       <>
       <img src={cvIcon2} alt="" /> 
       {cv.name}
       </>
       :
       <>
       <img src={cvIcon} alt="" /> 
       Upload your cv/resume
       </>
       }
            </label>
        </div>
<button type='submit' className='w-100 my-5 py-4' >Save</button>
<button type='button' className='w-100 my-5 py-4'onClick={()=>location.replace('/profile')} >Back</button>
</form>
    </div>
  )
}

export default CompleteEdit
