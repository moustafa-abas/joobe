import logo from'../images/logo.jpg'
import facebook from'../images/facebook.svg'
import linkedin from'../images/LinkedIn.svg'
import twitter from'../images/twitter.svg'
const Footer = () => {
return (
    <>
<footer className=" pt-4 mt-5">
    <div className='d-flex flex-column flex-sm-row'>
    <left className='d-flex flex-column align-items-end fw-light pe-3'>
        <h2 className='fw-bold fs-1'>Contact Us</h2>
<h3 className='fw-semibold mt-3'>Email</h3> 
<p>yehiaahmed4589@gmail.com</p>
<h3 className='fw-semibold mt-3'>Phone</h3>
<p>000 000 000 000</p>
<h3 className='fw-semibold mt-3'>Address</h3>
<p>Egypt, Tanta</p>
    </left>
    <center>
        <img src={logo} alt="" />
        <h2 className='fs-5 fw-light my-5'>Get courses and get offers for work</h2>
        <div className="links">
            <img src={facebook} alt="" className='mx-3' />
            <img src={linkedin} alt="" className='mx-3' />
            <img src={twitter} alt="" className='mx-3' />
        </div>
    </center>
    <right className='ps-3'>
        <h2 className='fw-bold fs-1 mb-3'>Pages</h2>
        <p className='fs-5 '><a href="/home">Home</a></p>
        <p className='fs-5 '><a href="/community">Community</a></p>
        <p className='fs-5 '><a href="/jops">Jops</a></p>
    </right>
    </div>
        <p className='text-center copyRight'>Jobee © 2024, All Rights Reserved</p>
</footer>
        </>
)
}

export default Footer
