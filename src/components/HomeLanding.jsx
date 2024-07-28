import left from "../images/landing-left.jpg";
import right from "../images/landing-right.png";
import learn from "../images/Learn More icon.svg";
const HomeLanding = () => {
  return (
    <div className="landing Container d-flex mt-3">
    <div className="left d-flex flex-column">
        <img src={left} alt="" />
        <div className="buttons d-flex flex-column flex-md-row gap-3 mt-4">
        <button className="start px-5 py-2 ">Get Started</button>
        <button
            className="learn py-2 fw-light text-dark "
            onClick={() => location.replace("/courses/all-courses")}
        >
            <img src={learn} alt="" className="w-25 border-0 me-3" />
            Learn More
        </button>
        </div>
    </div>
    <div className="right">
        <img src={right} alt="" />
    </div>
    </div>  )
}

export default HomeLanding