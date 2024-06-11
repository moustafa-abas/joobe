import { useForm } from 'react-hook-form';
import logo from'../../images/logo.jpg'
import axios from 'axios';
import { useSelector } from 'react-redux';
const Edit = () => {
    const { register, handleSubmit, formState: { errors },watch }  = useForm({
        defaultValues:{
        // profileImage:null,
        username:null,
        // age:null,
        // experience:null,
        // track:'',
        // tracklevel:''
    }
    });
    const id = useSelector((state)=>state.user.userData._id)
    const token = useSelector((state)=>state.user.token)
    const onSubmit = async(data ) => {
        
        try {
            console.log(token)
            const response = await axios.put(`https://jobee-5pfw.onrender.com/api/student/${id}`, 
               data.username,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
      
            console.log('Response:', response.data);
          } catch (error) {
            console.error('Error updating user data:', error);
          }
    };
  return (
    <div className="edit Container mt-3">
<img src={logo} alt="" />
<form className='mx-auto text-center w-50' onSubmit={ handleSubmit(onSubmit)} noValidate>


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


<button type='submit' className='w-100 my-5 py-4' >Next Step</button>
</form>
    </div>
  )
}

export default Edit
