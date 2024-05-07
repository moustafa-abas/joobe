import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../logo'
import { useForm } from 'react-hook-form'
const SelectSign=()=> {
    const { handleSubmit, register } = useForm({
        defaultValues:{
        role:''
        }
    })

const onSubmit=(data)=>{
    localStorage.setItem('role',JSON.stringify(data.role))
    if (data.role ==="Junior"){
        location.replace('/junior')
    }
    else if(data.role==='Company'){
        location.replace('/startup')
    }
    else if(data.role==="instructor"){
        location.replace('/instructor')
    }
    else{
        alert("choose")
    }
}

return (
    <div className="users Container">
<Logo/>
<heading className='text-center'>
<h1 className='fs-2 mt-2 fw-bold'>Please Select one Of The Following </h1>
    <h2 className='fs-3 fw-bold mt-3'>You Are A </h2>
</heading>

<form  action=''
className=' mx-auto text-center my-5' 
onSubmit={ handleSubmit(onSubmit)} noValidate >
    <div className='d-flex'>
<selection><box>
<input type="radio" id="junior" name="option" value="Junior"  
        {...register('role')}
        />
<FontAwesomeIcon icon={faUserGraduate}className='icon' />
</box>
<label htmlFor='junior' className='d-flex justify-content-center mt-5 fs-4 fw-lighter'>Junior / Student</label>
</selection>
<selection><box>
<input type="radio" id="company" name="option" value="Company"
        {...register('role')}
        />
<FontAwesomeIcon icon={faBuilding}className='icon' />
</box>
<label htmlFor='company' className='d-flex justify-content-center mt-5 fs-4 fw-lighter'>Company</label>
</selection>
<selection><box>
<input type="radio" id="instructor" name="option" value="Instructor" 
        {...register('role')}
        />
<FontAwesomeIcon icon={faPersonChalkboard}className='icon'/>
</box>
<label  htmlFor='instructor' className='d-flex justify-content-center mt-5 fs-4 fw-lighter'>Instructor</label>
</selection>
</div>
<button type='submit' className='mx-auto py-4 mt-5' >Select</button>
</form>

</div>
)
}

export default SelectSign;
