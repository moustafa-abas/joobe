import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Logo from '../../logo'
const SelectSign=()=> {

const [state, setState] = useState('')
const handleSignUp=()=>{
    if (state ==="Junior"){
        location.replace('/junior')
    }
    else if(state==='Company'){
        location.replace('/startup')
    }
    else if(state==="instructor"){
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
className='d-flex mx-auto text-center my-5' onChange={(e)=>setState(e.target.value)} >
<selection><box>
<input type="radio" id="junior" name="option" value="Junior"  />
<FontAwesomeIcon icon={faUserGraduate}className='icon' />
</box>
<label htmlFor='junior' className='d-flex justify-content-center mt-5 fs-4 fw-lighter'>Junior / Student</label>
</selection>
<selection><box>
<input type="radio" id="company" name="option" value="Company" />
<FontAwesomeIcon icon={faBuilding}className='icon' />
</box>
<label htmlFor='company' className='d-flex justify-content-center mt-5 fs-4 fw-lighter'>Company</label>
</selection>
<selection><box>
<input type="radio" id="instructor" name="option" value="Instructor" />
<FontAwesomeIcon icon={faPersonChalkboard}className='icon'/>
</box>
<label  htmlFor='instructor' className='d-flex justify-content-center mt-5 fs-4 fw-lighter'>Instructor</label>
</selection>

</form>
<submitButton type='submit' className='mx-auto py-4' onClick={handleSignUp}>Select</submitButton>

</div>
)
}

export default SelectSign;
