import { useState } from 'react'
import photo from'../images/Frame 1171275375.svg'
import edit from'../images/Group.svg'
import Logo from '../../logo'
const StartUp = () => {

    const [src, setSrc] = useState(photo)
    // const [companyData, setCompanyData] = useState({
    //     companyName:'',
    //     Location:'',
    // })
    // const handleChange=(e)=>{
    //     const newCompanyData={...companyData};
    //     newCompanyData[e.target.name]=e.target.value;
    //     setCompanyData({...newCompanyData})
    //     }

return (
<company>
<Logo/>
<form className=' mx-auto'>
<h2 className='text-center '>Company Data</h2>
<p className='text-center '>Please enter this following data</p>
<input type="file" id='photo'
onChange={(e)=>{setSrc(URL.createObjectURL(e.target.files[0]))} }/>
<label htmlFor="photo" className='mx-auto file'>
<img src={src} alt="" className='profile'/>
<img src={edit} alt=""  className='edit'/>

</label>
<inputGroup>
<input type="text" 
placeholder='Company Name'
id='companyName'
name='companyName'
// onChange={handleChange}  
/>
<label htmlFor="companyName">Company Name</label>
</inputGroup>
<inputGroup>
<select name="Location" id="companyLocation" 
// onChange={handleChange}  
>
<option value="Location"     disabled selected hidden>Company Location</option>
<option value="egypt">egypt</option>
</select>
<label htmlFor="companyLocation">Location</label>
</inputGroup>


<submitButton type="submit" onClick={(e)=>{
e.preventDefault();
location.replace('/companyhome')
}}>Save</submitButton>

</form>
</company>
)
}

export default StartUp
