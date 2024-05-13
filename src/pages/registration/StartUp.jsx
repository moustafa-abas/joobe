import { useState } from 'react'
import photo from'../../images/Frame 1171275375.svg'
import edit from'../../images/Group.svg'
import Logo from '../../logo'
const StartUp = () => {

    const [src, setSrc] = useState(photo)


return (
<div className='company Container'>
<Logo/>
<form className=' mx-auto text-center'>
<h2 className='text-center '>Company Data</h2>
<p className='text-center '>Please enter this following data</p>
<input type="file" id='photo'
className='opacity-0 text-center'
onChange={(e)=>{setSrc(URL.createObjectURL(e.target.files[0]))} }/>
<label htmlFor="photo" className='mx-auto position-relative file'>
<img src={src} alt="valid source" className='profile mt-3  rounded-circle'/>
<img src={edit} alt=""  className='edit position-absolute bottom-0 end-0 p-2 rounded-circle'/>

</label>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<input type="text" 
placeholder='Company Name'
id='companyName'
name='companyName'
// onChange={handleChange}  
/>
<label htmlFor="companyName" className='position-absolute fw-light top-0 px-2'>Company Name</label>
</div>
<div className='inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="Location" id="companyLocation" 
// onChange={handleChange}  
>
<option value="Location"     disabled selected hidden>Company Location</option>
<option value="egypt">egypt</option>
</select>
<label htmlFor="companyLocation" className='position-absolute fw-light top-0 px-2'>Location</label>
</div>


<button type="submit" className='w-100 my-5 py-4'>Save</button>

</form>
</div>
)
}

export default StartUp
