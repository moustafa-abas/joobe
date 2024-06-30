import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommunityPart from "../../components/community";
import Alert from "../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobs } from "../store/JobsSlice";
import arrow from "../../images/arrow.svg";
import back from "../../images/community profile.jpg";
import photo from "../../images/Group 64.jpg";
import coin from "../../images/coin.png";
import cv from "../../images/community cv.svg";
const Community = () => {
  const dispatch =useDispatch()
  const alert = useSelector((state) => state.community.alert);
  const userData = useSelector((state) => state.user.userData);
  const score = useSelector((state) => state.quizzes.score);
const jobs=useSelector((state)=>state.jobs.jobs.data)?.slice(0,4)
useEffect(() => {
dispatch(getJobs())
}, [])
  return (
    <div className="position-relative">
      <>
      <Header />
      <div className="community Container d-flex position-relative mt-4">
        <div className="profile d-none d-sm-block p-2 text-center ">
          <img src={back} alt="" className="w-100 " />
          <img
            src={photo}
            alt="valid source"
            className="profile   rounded-circle "
          />
          <h1 className="mt-3 fs-5 fw-light">{userData.username}</h1>
          <p className=" fs6">{userData.email}</p>
          <div className="container2">
            <div className="boxes  d-flex justify-content-center gap-5">
              <div className="box w-50 py-2 ">
                <h3 className="fs-6 fw-semibold">Track Name</h3>
                <h4 className="fs-6 fw-semibold"> {userData.track}</h4>
              </div>
              <div className="box w-50 py-2">
                <h3 className="fs-6 fw-semibold">Tests Score</h3>
                <h4 className="fs-5  fw-semibold">
                  {" "}
                  <img src={coin} alt="" className="me-2" width={25} />
                  {score}
                </h4>
              </div>
            </div>
            <div className="skills text-start">
              <h2 className="text-start mt-4 fs-4 fw-semibold pb-2 ">Skills</h2>
              <div className="skill ">
                {userData.skills?.map((skill) => (
                  <span className="px-2 fs-5" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-start mt-5 fs-4 fw-semibold ">Your CV</h2>
            <img src={cv} alt="" className="my-3 w-100" />
            <h2 className="text-start mt-4 fs-4 fw-semibold ">MyCV.pdf</h2>
            <button className="mx-auto my-4 py-3">Change</button>
          </div>
        </div>
        <CommunityPart />
        <div className="suggestion d-none d-lg-block  p-3">
          <h1 className="fs-6 fw-semibold">Some jobs for you</h1>
          {
            jobs?.map((job)=>(

          <div className="job  d-flex " key={job._id}>
            <img src={job.companyId?.profileImage} alt="" width={70}  className="rounded-circle"/>
            <div className="info ms-3 mt-3 ">
              <h2>{job.title}</h2>
              <h3>{job.companyId?.username}</h3>
              <p>{job.location} , {job.type}</p>
            </div>
          </div>
            ))
          }

          <p className="text-decoration-underline mt-3 fw-semibold" onClick={()=>location.replace('/jobs/all_jobs')}>
            See More jobs <img src={arrow} alt="" className="ms-2" />
          </p>
        </div>
        {alert==='create post'|| alert==='post' ||alert==='update post' ||alert==='comment' ||alert==='failed'? <Alert/> : null}
      </div>
      <Footer />
      </>
    </div>
  );
};

export default Community;
