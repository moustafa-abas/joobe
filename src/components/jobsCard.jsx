import world from "../images/world.svg";
import see from "../images/see.svg";
import front from "../images/front.svg";
import backend from "../images/backend.svg";
import flutter from "../images/flutter.svg";
import arrow from "../images/arrow Right.svg";
import analysis from "../images/analysis-analytical-business 2.svg";
import design from "../images/design-ideas 1.svg";

import { useDispatch } from "react-redux";
import { getCompanyJobs, getJob } from "../pages/store/JobsSlice";
import { setAlert } from "../pages/store/CommunitySlice";

const JobsCard = (data) => {
const dispatch = useDispatch();
const job = data.data;
return (
<div className="job my-5 w-75 mx-auto">
    <h4 className="d-flex align-items-center justify-content-between fw-bold">
    {job.title}{" "}
    <span>
        <img
        src={
            job.track === "Frontend"
            ? front
            : job.track === "Backend"
            ? backend
            : job.track === "Flutter"
            ? flutter
            : job.track === "Data Science"
            ? analysis
            : job.track === "UX UI"
            ? design
            : null
        }
        alt=""
        width={30}
        />
    </span>
    </h4>
    <h4 className="d-flex align-items-center my-4 justify-content-between">
    <span className="d-flex align-items-center gap-2">
        <img src={world} alt="" />
        {job.location}
    </span>
    <span className="d-flex align-items-center gap-2">
        
        <img
            src={arrow}
            alt=""
onClick={async()=>{await dispatch(getJob({id:job._id}))
     dispatch(setAlert('update job'))}
    }/>
    </span>
    </h4>
    {job.applied.length ? (
    <h4 className="d-flex align-items-center justify-content-between">
        {job.applied.map((one) => (
        <img src={one.applied.studentId.profileImage} key={job._id} />
        ))}
        <span className="d-flex">
        {job.applied.length}
                <img src={see} alt=""             onClick={async () => {
            await dispatch(getCompanyJobs({ id: job._id }));
            location.replace("/Applicants");
            }}/>
        </span>
    </h4>
    ) : null}
</div>
);
};

export default JobsCard;
