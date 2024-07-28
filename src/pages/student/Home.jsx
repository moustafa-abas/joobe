import Job from "../../components/job";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CommunityPart from "../../components/community";
import Alert from "../../components/Alert";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../store/JobsSlice";
import { getCourses } from "../store/CoursesSlice";

import smile from "../../images/smile.svg";

import quizzes from "../../images/quizes.svg";

import HomeLanding from "../../components/HomeLanding";
import HomeServices from "../../components/HomeServices";
import Slider from "../../components/Slider";
import HomeCourses from "../../components/HomeCourses";

const Home = () => {
const dispatch = useDispatch();
const jobs = useSelector((state) => state.jobs.jobs?.data)?.slice(0,5);
const isLogin = useSelector((state) => state.user.isLogined);
const rule = useSelector((state) => state.user.rule);
const alert = useSelector((state) => state.community.alert);
useEffect(() => {
    if(rule==='student'){
dispatch(getJobs());
dispatch(getCourses());
    }
}, [])
return (
<div className="home position-relative ">
    <Header />
    {rule === "company" && isLogin === true ? (
    <CommunityPart />
    ) : (
    <>
<HomeLanding/>
<HomeServices/>
<Slider/>
        <div className="Container">
        <img src={smile} alt="" className="w-100 " />
        <img src={quizzes} alt="" className="w-100 my-5" />
        </div>
    <HomeCourses/>

        <div className=" jobs Container">
        <h1 className="text-center fw-bold fs-1 py-5">Job Lists</h1>
        {jobs?.map((job) => (
            <Job key={job._id} job={job} />
        ))}
        <button
            className="button py-2 mx-auto my-5 fs-5 fw-semibold"
            onClick={() => location.replace("/jobs/all_jobs")}
        >
            View All
        </button>
        </div>
    </>
    )}
    {alert === "create post" ||
    alert === "post" ||
    alert === "update post" ||
    alert === "comment" ||
    alert === "failed" ||
    alert==='not logined'? (
    <Alert />
    ) : null}
    <Footer />
</div>
);
};

export default Home;
