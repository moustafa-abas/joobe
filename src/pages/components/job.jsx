import bookMark from'../images/majesticons_bookmark-line.svg'
import active from'../images/active.svg'
import avatar from'../images/Avatar.svg'
import job2 from'../images/job2.svg'
import job3 from'../images/job3.svg'
import job4 from'../images/job4.svg'
const Job = () => {
return (
<jobComponent>
<div className="job py-4 mb-4 d-flex flex-column flex-md-row position-relative">
            <left className="d-flex">
                <div className="avatar position-relative">
                <img src={avatar} alt=""  />
                <img src={active} alt=""  className="active position-absolute end-0"/>
                </div>
                <div className="info ms-4 ">
                    <h2 className='fs-4 fw-semibold'>Junior UI/UX Designer</h2>
                    <h3 className='fs-6 fw-light'>Synopsys Software House</h3>
                    <p className='mt-3 fw-light '><img src={location} alt="" />
                        Cairo, Egypt, (on site), Part Time</p>
                </div>
            </left>
            <right className=' d-flex flex-column text-center  align-items-center'>
                <img src={bookMark} alt="" className='position-absolute end-0 '/>
                <submitButton><a href="/applyJob"> Apply Now</a></submitButton>
                <p>4 weeks ago • Over 200 applicants . 9 connections</p>
            </right>
        </div>
        <div className="job py-4 mb-4 d-flex flex-column flex-md-row position-relative">
            <left className="d-flex">
                <div className="avatar position-relative">
                <img src={job2} alt=""  />
                <img src={active} alt=""  className="active position-absolute end-0"/>
                </div>
                <div className="info ms-4 ">
                    <h2 className='fs-4 fw-semibold'>Junior UI/UX Designer</h2>
                    <h3 className='fs-6 fw-light'>Innova Hub</h3>
                    <p className='mt-3 fw-light '><img src={location} alt="" />
                        Cairo, Egypt, (on site), Part Time</p>
                </div>
            </left>
            <right className=' d-flex flex-column text-center align-items-center'>
            <img src={bookMark} alt="" className='position-absolute end-0 '/>
                <submitButton><a href="/applyJob"> Apply Now</a></submitButton>
                <p>4 weeks ago • Over 200 applicants . 9 connections</p>
            </right>
        </div>
        <div className="job py-4 mb-4 d-flex flex-column flex-md-row position-relative">
            <left className="d-flex">
                <div className="avatar position-relative">
                <img src={job3} alt=""  />
                <img src={active} alt=""  className="active position-absolute end-0"/>
                </div>
                <div className="info ms-4 ">
                    <h2 className='fs-4 fw-semibold'>Data Analyst</h2>
                    <h3 className='fs-6 fw-light'>Data Analyst</h3>
                    <p className='mt-3 fw-light '><img src={location} alt="" />
                        Cairo, Egypt, (on site), Part Time</p>
                </div>
            </left>
            <right className=' d-flex flex-column text-center align-items-center'>
            <img src={bookMark} alt="" className='position-absolute end-0 '/>
                <submitButton><a href="/applyJob"> Apply Now</a></submitButton>
                <p>4 weeks ago • Over 200 applicants . 9 connections</p>
            </right>
        </div>
        <div className="job py-4 mb-4 d-flex flex-column flex-md-row position-relative">
            <left className="d-flex">
                <div className="avatar position-relative">
                <img src={job4} alt=""  />
                <img src={active} alt=""  className="active position-absolute end-0"/>
                </div>
                <div className="info ms-4 ">
                    <h2 className='fs-4 fw-semibold'>BackEnd Developer</h2>
                    <h3 className='fs-6 fw-light'>Infinity lines</h3>
                    <p className='mt-3 fw-light '><img src={location} alt="" />
                        Cairo, Egypt, (on site), Part Time</p>
                </div>
            </left>
            <right className=' d-flex flex-column text-center align-items-center'>
            <img src={bookMark} alt="" className='position-absolute end-0 '/>
                <submitButton><a href="/applyJob"> Apply Now</a></submitButton>
                <p>4 weeks ago • Over 200 applicants . 9 connections</p>
            </right>
        </div>
</jobComponent>
)
}

export default Job
