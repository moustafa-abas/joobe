import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JobsCard from "../../components/jobsCard";
import jobImg from "../../images/company job.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobs } from "../store/JobsSlice";
import Alert from "../../components/Alert";
const CompanyJobs = () => {
const dispatch = useDispatch();
useEffect(() => {
dispatch(getCompanyJobs());
}, []);
const companyJobs = useSelector((state) => state.jobs.companyJobs);
const frontJobs = companyJobs.filter((jobs) => jobs.track === "Frontend");
const backJobs = companyJobs.filter((jobs) => jobs.track === "Backend");
const flutterJobs = companyJobs.filter((jobs) => jobs.track === "Flutter");
const dataScienceJobs = companyJobs.filter(
(jobs) => jobs.track === "Data Science"
);
const androidJobs = companyJobs.filter((jobs) => jobs.track === "Android");
const iosJobs = companyJobs.filter((jobs) => jobs.track === "IOS");
const uiJobs = companyJobs.filter((jobs) => jobs.track === "UX UI");
const alert = useSelector((state) => state.community.alert);
console.log(companyJobs);

return (
<>
    <Header />
    <div className="Container my-5  px-5 companyJob position-relative  d-flex flex-wrap  justify-content-between align-items-center gap-5 ">
    {companyJobs.length ? (
        <>
        {/* {frontJobs.length ? (
            <div className="job">
            <h2
                className={`${
                frontJobs.length ? "" : "d-none"
                } fw-bold text-center mb-5`}
            >
                Front - End <span> Developer</span>
            </h2>
            {frontJobs?.map((job) => (
                <jobsCard key={job._id} data={job}  />
            ))}
            </div>
        ) : null} */}

        {backJobs.length ? (
            <div className="job">
            <h2
                className={`${
                backJobs.length ? "" : "d-none"
                }  fw-bold text-center mb-5`}
            >
                Back - End <span> Developer</span>
            </h2>
            {backJobs?.map((job) => (
                <JobsCard key={job._id} data={job} />
            ))}
            </div>
        ) : null}
        {dataScienceJobs.length ? (
            <div className="job">
            <h2
                className={`${
                dataScienceJobs.length ? "" : "d-none"
                } fw-bold text-center mb-5`}
            >
                Data - Science <span> Developer</span>
            </h2>
            {dataScienceJobs?.map((job) => (
                <JobsCard key={job._id} data={job} />
            ))}
            </div>
        ) : null}
        {androidJobs.length ? (
            <div className="job">
            <h2
                className={`${
                androidJobs.length ? "" : "d-none"
                } fw-bold text-center mb-5`}
            >
                Android <span> Developer</span>
            </h2>
            {androidJobs?.map((job) => (
                <JobsCard key={job._id} data={job} />
            ))}
            </div>
        ) : null}
        {iosJobs.length ? (
            <div className="job">
            <h2
                className={`${
                iosJobs.length ? "" : "d-none"
                } fw-bold text-center mb-5`}
            >
                Ios <span> Developer</span>
            </h2>
            {iosJobs?.map((job) => (
                <JobsCard key={job._id} data={job} />
            ))}
            </div>
        ) : null}
        {uiJobs.length ? (
            <div className="job">
            <h2
                className={`${
                uiJobs.length ? "" : "d-none"
                } fw-bold text-center mb-5`}
            >
                UX - UX <span> Developer</span>
            </h2>
            {uiJobs?.map((job) => (
                <JobsCard key={job._id} data={job} />
            ))}
            </div>
        ) : null}
        {flutterJobs.length ? (
            <div className="job">
            <h2
                className={`${
                flutterJobs.length ? "" : "d-none"
                } fw-bold text-center mb-5`}
            >
                Flutter <span> Developer</span>
            </h2>
            {flutterJobs?.map((job) => (
                <JobsCard key={job._id} data={job} />
            ))}
            </div>
        ) : null}
        </>
    ) : (
        <div className=" d-flex flex-column mx-auto ">
        <img src={jobImg} alt="" className=" mx-auto" width={700} />
        <button
            className="w-50  py-3 mx-auto"
            onClick={() => location.replace("/employee")}
        >
            Find An Employee
        </button>
        </div>
    )}
    </div>
    {alert === "update job" || alert==='failed' ? (
    <Alert />
    ) : null}
    <Footer />
</>
);
};
export default CompanyJobs;
