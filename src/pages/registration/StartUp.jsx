import { useState } from 'react'
import photo from'../../images/Frame 1171275375.svg'
import edit from'../../images/Group.svg'
import Logo from '../../logo'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { signCompany } from '../store/userSlice'
const StartUp = () => {
    const user=useSelector((state)=>state.user.userData)
    const error=useSelector((state)=>state.user.error)
    const [selectedPhoto, setSelectedPhoto] = useState();

const{register , handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
        profileImage:null,
        name:'',
        location:null,
        about:''
    }
})
    const [src, setSrc] = useState(photo)
const dispatch=useDispatch()
    const handleFileChange = (e) => {
        setSrc(URL.createObjectURL(e.target.files[0]))
        setSelectedPhoto(JSON.stringify(e.target.files[0]));
    };
    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append("username", user.username);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("confirmPassword", user.confirmPassword);
        formData.append("profileImage", data.profileImage[0]);
        formData.append("name", data.name);
        formData.append("location", data.location);
        formData.append("about", data.about);

        // const all={...user,...data}
dispatch(signCompany(formData))
    };
return (
<div className='company Container'>
<Logo/>
<form className=' mx-auto text-center' onSubmit={ handleSubmit(onSubmit)}>
<h2 className='text-center '>Company Data</h2>
<p className='text-center '>Please enter this following data</p>
<input type="file" id='profileImage' className='opacity-0 text-center '
    name='profileImage'
    {...register('profileImage')}
    accept='image/*'
    onChange={ handleFileChange}

    />
    <label htmlFor="profileImage" className='mx-auto position-relative file '>
        <img src={src} alt="valid source" className='profile mt-3  rounded-circle'/>
        <img src={edit} alt=""  className='edit position-absolute bottom-0 end-0 p-2 rounded-circle'/>
    </label>
    <div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="text" 
    className='border-0 '
    placeholder='Name'
    name='name'
    id='name'
{...register('name', { required: '* name is required'})}

    />
    <label htmlFor='name' className='position-absolute fw-light top-0 px-2'>Company Name</label>
</div>
<p className='error mt-2 text-start'>{errors.name?.message}</p>

<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="Location" id="companyLocation" 
{...register('location', { required: '* Location is required'})}
>
<option value="Location"  disabled selected hidden>Company Location</option>
<option value="egypt">egypt</option>
</select>
<label htmlFor="companyLocation" className='position-absolute fw-light top-0 px-2'>Location</label>
</div>
<p className='error mt-2 text-start'>{errors.location?.message}</p>
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

{error?
<p className='error mt-2 text-start text-danger'> * Email Already Exist</p>:null
}
<button type="submit" className='w-100 my-5 py-4'>Save</button>

</form>
</div>
)
}

export default StartUp
