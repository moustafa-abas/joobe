import { useState } from 'react'
import photo from'../images/Group 64.jpg'
import cvIcon from'../images/folder-add.svg'
import edit from'../images/Group.svg'
import Logo from '../../logo'
const Junior = () => {
    const [src, setSrc] = useState(photo)
    const [cv, setCv] = useState(cvIcon)
    const [Page1, setShowPage1] = useState(true)
    const [juniorData, setJuniorData] = useState({
        name:'',
        age:'',
        ex:'',
        track:'',
        trackLevel:'',
        photo:'',
        military:'',
        about:'',
        cv:'',
    })
    const handleChange=(e)=>{
        const newJuniorData={...juniorData};
        newJuniorData[e.target.name]=e.target.value;
        setJuniorData({...newJuniorData})
        }

return (
<div className="junior Container">
<Logo/>
<form className='mx-auto text-center'>
<h1 className='text-center fs-2 mt-2 fw-bold'> Junior / Student Data</h1>
<p className='text-center fw-light fs-5'>Please enter this following data</p>
{Page1?
    <>
    
        <input type="file" id='photo' className='opacity-0 '
    name='photo'
    accept='image/*'
    onChange={ (e)=>{setSrc(URL.createObjectURL(e.target.files[0]))}  }/>
    <label htmlFor="photo" className='mx-auto position-relative mt-  file'>
        <img src={src} alt="valid source" className='profile mt-3  rounded-circle'/>
        <img src={edit} alt=""  className='edit position-absolute bottom-0 end-0 p-2 rounded-circle'/>
    </label>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="text" 
    className='border-0 '
    placeholder='Name'
    name='name'
    onChange={handleChange}
    id='name'
    />
    <label htmlFor='name' className='position-absolute fw-light top-0 px-2'>User Name</label>
</inputGroup>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="number" 
    className='border-0 '
    placeholder='Age'
    name='age'
    onChange={handleChange}
    id='age'
    />
    <label htmlFor='age' className='position-absolute fw-light top-0 px-2'>Age</label>
</inputGroup>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
    <input type="number" 
    className='border-0 '
    placeholder='Ex'
    name='ex'
    onChange={handleChange}
    id='ex'
    />
    <label htmlFor='ex' className='position-absolute fw-light top-0 px-2'>Experience Years</label>
</inputGroup>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="track" id="select"         
onChange={handleChange}>
<option value="" disabled hidden selected>Track</option>
<option value="front">front</option>
<option value="back">back</option>
</select>
    <label htmlFor='select' className='position-absolute fw-light top-0 px-2'>Track</label>
</inputGroup>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="trackLevel" id="selectLevel"         
onChange={handleChange}>
<option value="" selected hidden disabled>Track level</option>
<option value="first">first</option>
<option value="second">second</option>
</select>
    <label htmlFor='selectLevel' className='position-absolute fw-light top-0 px-2'>Track level</label>
</inputGroup>

<submitButton className='my-5' onClick={(e)=>{
    e.preventDefault();
    // juniorData.age==='' || juniorData.name==='' ?alert('please insert your age'):
    setShowPage1(false)
}} >Next Step</submitButton>
</>
:
<>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="military" id="Military Status"         
onChange={handleChange}>
<option value="no" disabled selected hidden>status</option>
<option value="no" >no</option>
<option value="yes">yes</option>
</select>
    <label htmlFor='Military Status' className='position-absolute fw-light top-0 px-2'>Military Status</label>
</inputGroup>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<textarea name="about" id="area" rows='5' className=' w-100 border-0 '
onChange={handleChange}
placeholder='About'
/>
<label htmlFor='area' className='position-absolute fw-light top-0 px-2'>About Your </label>
</inputGroup>
<inputGroup className='d-flex position-relative py-3 px-3  mt-4 gap-3'>
<textarea name="skills" id="skills" rows='3' className=' w-100 border-0 '
onChange={handleChange}
placeholder='Enter your skills'
/>
<label htmlFor='skills' className='position-absolute fw-light top-0 px-2'>Skills </label>
</inputGroup>

    {/* <inputGroup  */}
        <cvGroup className='my-5 py-2 cv d-flex justify-content-center '>
        <input type="file" 
        id='cv'
        name='cv'
        onChange={ (e)=>{setCv(URL.createObjectURL(e.target.files[0]))}  }/>
            <label htmlFor='cv' className="labelCv py-3 fw-light fs-5 w-100 d-flex gap-3 align-items-center justify-content-center">
        <img src={cv} alt="" /> 
            Upload your cv/resume
            </label>
            </cvGroup>
<submitButton type="submit" className='mb-5' onClick={(e)=>{
    e.preventDefault();
    location.replace("/juniorhome")
}}>Save</submitButton>

</>

}
</form>
</div>
)}
export default Junior