import Logo from "../../logo"

const EndInstructor = () => {
  return (
<div className="instructor Container">
<Logo/>

<form action="" className='form mx-auto'>
<h2 className='text-center fs-2 mt-2 fw-bold'>Instructor Data</h2>
<p className='text-center fw-light fs-5'>Please enter this following data</p>
    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
        <input type="email" id='email'
        placeholder='example@gmail.com'
        name='email'
        // onChange={handleChange}
        />
<label htmlFor="email" className='position-absolute fw-light top-0 px-2'>E-mail</label>
</div>
    <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
    <input type="email" id='faceLink'
        placeholder='Facebook Link'
        name='faceLink'
        // onChange={handleChange}
        />
<label htmlFor="faceLink" className='position-absolute fw-light top-0 px-2'>Facebook link</label>
</div>
<textarea name="about" id="area" cols="30" rows="5" className='area'
// onChange={handleChange}
placeholder='tell us about you
'>
</textarea>


<button type="submit" className='w-100 my-5 py-4'>Save</button>
</form>
</div>
  )
}

export default EndInstructor
