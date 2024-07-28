import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../store/JobsSlice";
import { getTracks } from "../store/userSlice";

const Employee = () => {
const dispatch = useDispatch();
const tracks=useSelector((state)=>state.user.tracks)
useEffect(() => {
dispatch(getTracks());
}, []);

const {
register,
handleSubmit,
formState: { errors },
} = useForm({});
const onsubmit = async(data) => {
await dispatch(createJob(data))
};

return (
<>
    <Header />
    <div className="Container employee d-flex flex-column align-items-center my-5 gap-4">
    <h2 className="fw-bold">Employee Data</h2>
    <form action="" onSubmit={handleSubmit(onsubmit)} className="w-75">
        <div className=" d-md-flex justify-content-between gap-5">
        <div className=" w-50 d-flex flex-column">
            <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <select
                name="track"
                id="track"
                {...register("track", { required: " * select  track name" })}
            >
                {tracks?.map((track) => (
                <option key={track._id} value={track}>
                    {track}
                </option>
                ))}
            </select>
            <label
                htmlFor="select"
                className="position-absolute fw-light top-0 px-2">
                    Track Name</label>
            </div>
            <p className="error mt-2 text-start">{errors.track?.message}</p>
            <div className=" inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <textarea
                name="Summary"
                id="area"
                rows="5"
                className=" w-100 border-0 "
                placeholder="Job Summary"
                {...register("summary", {
                required: "* this field is required",
                })}
            />
            <label
                htmlFor="area"
                className="position-absolute fw-light top-0 px-2"
            >
                Job Summary{" "}
            </label>
            </div>
            <p className="error mt-2 text-start">{errors.summary?.message}</p>
            <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <select
                name="Job Status"
                id="Job Status"
                {...register("type", {
                required: " * Job Status your track",
                })}
            >
                <option>(On-Site) , Full-Time</option>
                <option>(On-Site) , Part-Time</option>
                <option>(Remotely) , Full-Time</option>
                <option>(Remotely) , Part-Time</option>
                <option>(Hybrid) , Full-Time</option>
                <option>(Hybrid) , Part-Time</option>
            </select>
            <label
                htmlFor="Job Status"
                className="position-absolute fw-light top-0 px-2"
            >
                Job Status
            </label>
            </div>
            <p className="error mt-2 text-start">{errors.type?.message}</p>
            <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <input
                type="text"
                className="border-0 "
                placeholder="Required Skills"
                name="Skills"
                id="Skills"
                {...register("requirements", {
                required: "* Skills is required",
                })}
            />
            <label
                htmlFor="Skills"
                className="position-absolute fw-light top-0 px-2"
            >
                Required Skills
            </label>
            </div>
            <p className="error mt-2 text-start">{errors.requirements?.message}</p>
            <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <input
                type="number"
                className="border-0 "
                placeholder="Salary / month"
                name="Salary"
                id="Salary"
                {...register("salary", {
                required: "* Salary is required",
                min: {
                    value: 0,
                    message: "* Salary can't be negative",
                },
                })}
            />
            <label
                htmlFor="Salary"
                className="position-absolute fw-light top-0 px-2"
            >
                Salary
            </label>
            </div>
            <p className="error mt-2 text-start">{errors.salary?.message}</p>
        </div>
        <div className="w-50 d-flex flex-column ">
            <div className="inputGroup  d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <input
                type="text"
                className="border-0 "
                placeholder="Job Title"
                name="Job Title"
                id="Job Title"
                {...register("title", {
                required: "* Job Title is required",
                })}
            />
            <label
                htmlFor="Job Title"
                className="position-absolute fw-light top-0 px-2"
            >
                Job Title
            </label>
            </div>
            <p className="error mt-2 text-start">{errors.title?.message}</p>
            <div className="inputGroup  d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <select
                name="Location"
                id="companyLocation"
                {...register("location", {
                required: "* Location is required",
                })}
            >
                <option value="Location" disabled selected hidden>
                {" "}
                Mansoura
                </option>
                <option value="egypt">egypt</option>
            </select>
            <label
                htmlFor="companyLocation"
                className="position-absolute fw-light top-0 px-2"
            >
                Location
            </label>
            </div>
            <p className="error mt-2 text-start">
            {errors.location?.message}
            </p>
            <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <input
                type="text"
                className="border-0 "
                placeholder="experience Years"
                name="ex"
                id="ex"
                {...register("exp", { required: "* experience is required" })}
            />
            <label
                htmlFor="ex"
                className="position-absolute fw-light top-0 px-2"
            >
                Experience Years
            </label>
            </div>
            <p className="error mt-2 text-start">{errors.exp?.message}</p>
            <div className=" inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
            <textarea
                name="about"
                id="area"
                rows="5"
                className=" w-100 border-0 "
                placeholder="About Jop"
                {...register("about", {
                required: "* this field is required",
                })}
            />
            <label
                htmlFor="area"
                className="position-absolute fw-light top-0 px-2"
            >
                About Jop{" "}
            </label>
            </div>
            <p className="error mt-2 text-start">{errors.about?.message}</p>
        </div>
        </div>
        <button type="submit" className="py-3 w-50 mx-auto mt-5">
        Publish Now
        </button>
    </form>
    </div>
    <Footer />
</>
);
};

export default Employee;
