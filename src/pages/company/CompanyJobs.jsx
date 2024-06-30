import Footer from "../../components/Footer";
import Header from "../../components/Header";
import job from "../../images/company job.svg";
const CompanyJobs = () => {
return (
<>
    <Header />
    <div className="Container companyJob   mt-5 d-flex flex-column justify-content-center align-items-center">
    <img src={job} alt="" className="w-50 " />
    <button
        className="w-50 py-3 "
        onClick={() => location.replace("/employee")}
    >
        Find An Employee
    </button>
    </div>
    <Footer />
</>
);
};

export default CompanyJobs;
