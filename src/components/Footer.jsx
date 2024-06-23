import logo from'../images/logo.jpg'
import facebook from'../images/facebook.svg'
import linkedin from'../images/LinkedIn.svg'
import twitter from'../images/twitter.svg'
const Footer = () => {
return (
    <>
<footer className=" pt-4 mt-5">
    <div className='d-flex flex-column  flex-sm-row'>
    <div className='left d-md-flex flex-column d-none align-items-end fw-light pe-3'>
        <h2 className='fw-bold fs-1'>Contact Us</h2>
<h3 className='fw-semibold mt-md-3 '>Email</h3> 
<p>yehiaahmed4589@gmail.com</p>
<h3 className='fw-semibold mt-md-3'>Phone</h3>
<p>000 000 000 000</p>
<h3 className='fw-semibold mt-md-3'>Address</h3>
<p>Egypt, Tanta</p>
    </div>
    <div className='center text-center mt-md-5'>
        <img src={logo} alt="" />
        <h2 className='fs-5 fw-light my-md-5'>Get courses and get offers for work</h2>
        <div className="links">
            <img src={facebook} alt="" className='mx-3' />
            <img src={linkedin} alt="" className='mx-3' />
            <img src={twitter} alt="" className='mx-3' />
        </div>
    </div>
    <div className='right ps-3 d-none d-md-block'>
        <h2 className='fw-bold fs-1 mb-md-3'>Pages</h2>
        <p className='fs-5 my-0'><a href="/home">Home</a></p>
        <p className='fs-5 my-0'><a href="/community">Community</a></p>
        <p className='fs-5 my-0'><a href="/jobs">Jobs</a></p>
    </div>
    </div>
        <p className='text-center copyRight'>Jobee © 2024, All Rights Reserved</p>
</footer>
        </>
)
}

export default Footer
