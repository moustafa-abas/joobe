import job from "../images/jobs icon.svg";
import internship from "../images/intership icon.svg";
import courses from "../images/courses icon.svg";
import quiz from "../images/quiz icon.svg";
import community from "../images/community icon.svg";
import creative from "../images/creative icon.svg";
const HomeServices = () => {
  return (
    <div className="services  mt-5 py-5">
    <h1 className="text-center fw-bold mb-4">Services</h1>
    <ul className="d-flex flex-column flex-sm-row flex-wrap mx-auto justify-content-center ">
        <li className="white d-flex flex-column py-4 fw-bolder fs-5">
        <img src={courses} alt="" className="mb-3 pb-3 " />
        Courses
        </li>
        <li className="blue d-flex flex-column fw-bolder fs-5 py-4">
        <img src={job} alt="" className="mb-3 pb-3" /> Jops
        </li>
        <li className="white d-flex flex-column fw-bolder fs-5 py-4">
        <img src={internship} alt="" className="mb-3 pb-3" />{" "}
        Internships
        </li>
        <li className="blue d-flex flex-column fw-bolder fs-5 py-4">
        <img src={quiz} alt="" className="mb-3 pb-3" /> Quizzes
        </li>
        <li className="white d-flex flex-column fw-bolder fs-5 py-4">
        <img src={community} alt="" className="mb-3 pb-3" /> Community
        </li>
        <li className="blue d-flex flex-column fw-bolder fs-5 py-4">
        <img src={creative} alt="" className="mb-3 pb-3" /> Creative
        Resume
        </li>
    </ul>
    </div>
)
}

export default HomeServices