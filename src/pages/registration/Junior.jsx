import { useEffect, useState } from 'react'
import photo from'../../images/Group 64.jpg'
import cvIcon from'../../images/folder-add.svg'
import edit from'../../images/Group.svg'
import Logo from '../../logo'
import axios from 'axios'
const Junior = () => {
    const [src, setSrc] = useState(photo)
    const [cv, setCv] = useState(cvIcon)
    const [Page1, setShowPage1] = useState(true)
    const [tracks, setTracks] = useState([]);
    const [militaries, setMilitaries] = useState([]);
    const [juniorData, setJuniorData] = useState({
        photo:'',
        name:'',
        age:'',
        ex:'',
        track:'',
        trackLevel:'',
        military:'',
        about:'',
        cv:{},
    })
    const handleChange=(e)=>{
        const newJuniorData={...juniorData};
        newJuniorData[e.target.name]=e.target.value;
        setJuniorData({...newJuniorData})

        }
        useEffect(() => {
            axios.all([
              axios.get('https://jobee-5pfw.onrender.com/api/tracks'),
              axios.get('https://jobee-5pfw.onrender.com/api/militry')
            ])
              .then(axios.spread((response1, response2) => {
                setTracks(response1.data[0].tracks);
                setMilitaries(response2.data[0].MilitryService);
              }))
              .catch(error => {
                console.error('حدث خطأ أثناء جلب البيانات:', error);
              });
          }, []);
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
// onChange={handleChange}
    onChange={ (e)=>{setSrc(URL.createObjectURL(e.target.files[0]))
    handleChange(e)}}
    />
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
<option  selected hidden disabled>Track </option>
            {tracks.map((track) => (
                <option key={track} value={track}>{track}</option>
                        ))}
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

<button className='w-100 my-5 py-4' onClick={(e)=>{
    e.preventDefault();
    // juniorData.age==='' || juniorData.name==='' ?alert('please insert your age'):
    setShowPage1(false)
    // console.log(militaries)
}} >Next Step</button>
</>
:
<>
<inputGroup className='d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3'>
<select name="military" id="Military Status"         
onChange={handleChange}>
<option  disabled selected hidden>status</option>
            {militaries.map((item) => (
                <option key={item} value={item}>{item}</option>
                        ))}
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

        <cvGroup className='my-5 py-2 cv d-flex justify-content-center '>
        <input type="file" 
        id='cv'
        name='cv'
onChange={handleChange}

        // onChange={ (e)=>{setCv(e.target.files[0])}  }
        />
            <label htmlFor='cv' className="labelCv py-3 fw-light fs-5 w-100 d-flex gap-3 align-items-center justify-content-center">
        <img src={cv} alt="" /> 
            Upload your cv/resume
            </label>
            </cvGroup>
<button type="submit" className='w-100 mb-5 py-4' onClick={(e)=>{
    e.preventDefault();
    location.replace("/")
}}>Save</button>
</>

}
</form>
</div>
)}
export default Junior