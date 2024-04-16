import { useState } from "react"
import Logo from "../../logo";
export const Instructor = () => {

    const [showPage2, setShowPage2] = useState(false)
    // const [instructorData, setInstructorData] = useState({
    //     age:'',
    //     username:'',
    //     gender:'',
    //     track:'',
    //     email:'',
    //     faceLink:'',
    //     about:'',
    // })
    
    // const handleChange=(e)=>{
    //     const newInstructorData={...instructorData};
    //     newInstructorData[e.target.name]=e.target.value;
    //     setInstructorData({...newInstructorData})
    //     }


return (
<instructor>
<Logo/>
<form action="" className='form mx-auto'>
<h2 className='text-center'>Instructor Data</h2>
<p className='text-center'>Please enter this following data</p>
{showPage2?
<>
    <inputGroup>
        <input type="email" id='email'
        placeholder='example@gmail.com'
        name='email'
        // onChange={handleChange}
        />
<label htmlFor="email">E-mail</label>
</inputGroup>
    <inputGroup>
    <input type="email" id='faceLink'
        placeholder='Facebook Link'
        name='faceLink'
        // onChange={handleChange}
        />
<label htmlFor="faceLink">Facebook link</label>
</inputGroup>
<textarea name="about" id="area" cols="30" rows="5" className='area'
// onChange={handleChange}
placeholder='tell us about you
'>
</textarea>


<submitButton type="submit" onClick={(e)=>{
    e.preventDefault;
    // instructorData.email===''||instructorData.faceLink===''||instructorData.about===''?alert("please complete data"):
    location.replace("/instructorhome")
    // console.log(instructorData)
}}>Save</submitButton>
</>
:<>
    <inputGroup>
        
        <input type="text"
        id="username"
        name="username"
        placeholder='Name'
        // onChange={handleChange}
        />
        <label htmlFor="username" >User Name</label>
    </inputGroup>
    <inputGroup>
        <input type="number"
        placeholder='Age'
        id="age"
        name="age"
        // onChange={handleChange}
        />
        <label htmlFor="age" >Age</label>
    </inputGroup>
    <inputGroup>
    <select name="gender" id="gender" 
    // onChange={handleChange} 
    >
    <option value="" disabled selected hidden >gender</option>
    <option value="male"  > Male</option>
    <option value="female"> fe Male</option>
    </select>
    <label htmlFor="gender">Gender</label>
    </inputGroup>
    <inputGroup>
    <select name="track" id="select" 
    // onChange={handleChange}
    >
    <option value="" disabled hidden selected>Track</option>
    <option value="front">front</option>
    </select>
    <label htmlFor="select">Track</label>
    </inputGroup>
    <submitButton  onClick={(e)=>{
        e.preventDefault();
        // instructorData.username===''||instructorData.age===''||instructorData.gender===''||instructorData.track===''?
        // alert('please complete data'):
        setShowPage2(true)
    }} >Next Step</submitButton>
    </>
}
    </form>
</instructor>
)
}

