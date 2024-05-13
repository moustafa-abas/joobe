import Logo from "../../logo";
 const Instructor = () => {
return (
<div className="instructor Container">
<Logo/>

<form action="" className='form mx-auto'>
<h2 className='text-center fs-2 mt-2 fw-bold'>Instructor Data</h2>
<p className='text-center fw-light fs-5 mb-5'>Please enter this following data</p>
    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
        
        <input type="text"
        id="username"
        name="username"
        placeholder='Name'
        />
        <label htmlFor="username" className='position-absolute fw-light top-0 px-2'>User Name</label>
    </div>
    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
        <input type="number"
        placeholder='Age'
        id="age"
        name="age"
        />
        <label htmlFor="age" className='position-absolute fw-light top-0 px-2'>Age</label>
    </div>
    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
    <select name="gender" id="gender" 
    >
    <option value="" disabled selected hidden >gender</option>
    <option value="male"  > Male</option>
    <option value="female"> fe Male</option>
    </select>
    <label htmlFor="gender" className='position-absolute fw-light top-0 px-2'>Gender</label>
    </div>
    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
    <select name="track" id="select" 
    >
    <option value="" disabled hidden selected>Track</option>
    <option value="front">front</option>
    </select>
    <label htmlFor="select" className='position-absolute fw-light top-0 px-2'>Track</label>
    </div>
    <button className='w-100 my-5 py-4' >Next Step</button>
    </form>
</div>
)
}

export default Instructor

