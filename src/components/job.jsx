import { useDispatch, useSelector } from "react-redux";
import { getJob } from "../pages/store/JobsSlice";
import { setAlert } from "../pages/store/CommunitySlice";
import bookMark from "../images/majesticons_bookmark-line.svg";
import active from "../images/active.svg";
import location from "../images/job-location.svg";
const Job = (job) => {
const dispatch = useDispatch();
const isLogined = useSelector((state) => state.user.isLogined);
const jobData = job.job;
return (
<div className="jobComponent">
    <div className="job py-4 mb-4 d-flex flex-column flex-md-row position-relative">
    <div className="left d-flex">
        <div className="avatar position-relative">
        <img
            src={jobData.companyId?.profileImage}
            alt=""
            width={70}
            className="rounded-circle"
        />
        <img
            src={active}
            alt=""
            className="active position-absolute end-0"
        />
        </div>
        <div className="info ms-4 ">
        <h2 className="fs-4 fw-semibold">{jobData?.title}</h2>
        <h3 className="fs-6 fw-light">{jobData.companyId?.username}</h3>
        <p className="mt-3 fw-light ">
            <img src={location} alt="" />
            {jobData?.location}, {jobData?.type}
        </p>
        </div>
    </div>
    <div className="right d-flex flex-column text-center  align-items-center">
        <img src={bookMark} alt="" className="position-absolute end-0 " />
        <button
        className="py-3"
        onClick={() => {
            isLogined
            ? dispatch(getJob({ id: jobData._id }))
            : dispatch(setAlert("not logined"));
        }}
        >
        {" "}
        Apply Now
        </button>
        <p>4 weeks ago • Over 200 applicants . 9 connections</p>
    </div>
    </div>
</div>
);
};

export default Job;
