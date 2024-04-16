import Header from "../components/Header"
import Footer from "../components/Footer"
import Job from "../components/job"
import border from'../images/border.svg'
import front from'../images/front.svg'
import design from'../images/design-ideas 1.svg'
import back from'../images/datastore 1.svg'
import fluter from'../images/flutter 1.svg'
import security from'../images/internet-security 1.svg'
import analysis from'../images/analysis-analytical-business 2.svg'
import leftJobs from'../images/jobs.jpg'
import ol from'../images/jobs-ul.svg'
import { NavLink } from "react-router-dom"
import { useState } from "react"
const Jobs = () => {
    const [state, setState] = useState("home");
return (
    <jobs >
<Header/>
{state==="home"?<>
<div className="landing position-relative">
<div className="content d-flex ms-5">
    <div className="text w-75 z-1">
<h2 className="fw-semibold">Find The Best Job That You Deserved</h2>
<p className="pe-5 fs-5 my-5">Visit our website to learn and achieve new Jobs that meet&apos;s your Requirements in different Careers</p>
<submitButton>View Jobs</submitButton>
</div>
<img src={border} alt="" className="w-25 mt-5 z-1 d-none d-md-block"/>
</div>
</div>
<div className="categories Container text-center my-5 py-5">
<h2 className="fs-1 fw-bold ">Explored By Categories</h2>
<div className="tracks mt-5 d-flex flex-wrap  ">
<div className="only-one mt-4 d-flex flex-column">
<img  src={front} alt="" className="mx-auto mt-4" />
<h2 className="fs-5 fw-semibold my-5"> Front End</h2>
<p className="fs-6 fw-semibold"><span className="fs-5 fw-bold me-2">200</span>Positions</p>
</div>
<div className="only-one mt-4 d-flex flex-column">
<img  src={design} alt="" className="mx-auto mt-4"/>
<h2 className="fs-5 fw-semibold my-5">Graphic Design</h2>
<p className="fs-6 fw-semibold"><span className="fs-5 fw-bold me-2">66</span>Positions</p>
</div>
<div className="only-one mt-4 d-flex flex-column">
<img  src={security} alt="" className="mx-auto mt-4"/>
<h2 className="fs-5 fw-semibold my-5">Cyber-Security</h2>
<p className="fs-6 fw-semibold"><span className="fs-5 fw-bold me-2">20</span>Positions</p>
</div>
<div className="only-one mt-4 d-flex flex-column">
<img  src={back} alt="" className="mx-auto mt-4"/>
<h2 className="fs-5 fw-semibold my-5">Back- End</h2>
<p className="fs-6 fw-semibold"><span className="fs-5 fw-bold me-2">32</span>Positions</p>
</div>
<div className="only-one mt-4 d-flex flex-column">
<img  src={fluter} alt="" className="mx-auto mt-4"/>
<h2 className="fs-5 fw-semibold my-5">Flutter</h2>
<p className="fs-6 fw-semibold"><span className="fs-5 fw-bold me-2">100</span>Positions</p>
</div>
<div className="only-one mt-4 d-flex flex-column">
<img  src={analysis} alt="" className="mx-auto mt-4"/>
<h2 className="fs-5 fw-semibold my-5">System Analysis</h2>
<p className="fs-6 fw-semibold"><span className="fs-5 fw-bold me-2">100</span>Positions</p>
</div>
</div>
<submitButton className="w-25 py-3 mx-auto mt-5">Explore All</submitButton>
</div>
<div className="find-job Container d-flex">
    <left className=" d-none d-md-block">
        <img src={leftJobs} alt=""  className="w-100"/>
    </left>
    <right className=" p-lg-5 ps-3">
        <h1 className="fs-2 fw-bold ">We Help You To Get The Best Jobs 
And Find A Talent</h1>
<p className="fs-5 fw-lighter my-3"> our online platform dedicated to assisting individuals in their job search journey by providing a comprehensive and user-friendly experience. With a vast database of job opportunities spanning various industries</p>
<ul className="ps-0 mt-4 ">
    <li className="fs-5 fw-lighter mt-4 "><img className="me-3 p-2" src={ol} alt="" /> Ease of applying for a job</li>
    <li className="fs-5 fw-lighter mt-4 "><img className="me-3 p-2" src={ol} alt="" /> aims to facilitate and improve the job search process</li>
    <li className="fs-5 fw-lighter mt-4 "><img className="me-3 p-2" src={ol} alt="" /> new opportunities in the labor market</li>
    <li className="fs-5 fw-lighter mt-4"  ><img className="me-3 p-2" src={ol} alt="" /> offers an easy and comprehensive user interface</li>
    <li className="fs-5 fw-lighter mt-4 "><img className="me-3 p-2" src={ol} alt="" /> Educate constantly to raise your level</li>
</ul>
<submitButton className='w-50 mt-5'>Explore Jobs</submitButton>
    </right>
</div>
<jobList>
    <h1 className="text-center fw-bold fs-1 mt-5">Job Lists</h1>
    <ul className="d-flex justify-content-between mx-auto mt-3 p-4 flex-wrap">
<li className="fs-4 fw-semibold"><NavLink to="/jobs"   activeClassName="active">All</NavLink></li>
<li className="fs-4 fw-semibold"><NavLink to="/j"   activeClassName="active">Remotely</NavLink></li>
<li className="fs-4 fw-semibold"><NavLink to="/m"    activeClassName="active">On Site</NavLink></li>
<li className="fs-4 fw-semibold"><NavLink to="/w"   activeClassName="active">Part-Time</NavLink></li>
<li className="fs-4 fw-semibold"><NavLink to="/g"   activeClassName="active">Full-Time</NavLink></li>
<li className="fs-4 fw-semibold"><NavLink to="/s"   activeClassName="active">Hybrid</NavLink></li>
    </ul>
    <div className="Container">
    <Job />
    </div>
    <submitButton className='py-3   mx-auto' onClick={()=>{
        setState("all")
    }} >View All</submitButton>
</jobList>
</>:<all>
    <div className="Container mt-3">
<h2 className="text-center fs-1 fw-bold"> All Available Jobs</h2>
<Job/>
<Job/>
<Job/>
</div>
</all>

}
<Footer/>
</jobs>
)
}
export default Jobs;