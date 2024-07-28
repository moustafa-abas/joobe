import { useEffect, useState } from "react";
import cvIcon from "../../images/folder-add.svg";
import cvIcon2 from "../../images/PDF_file_icon 1.png";
import Logo from "../../logo";
import axios from "axios";
import { useForm } from "react-hook-form";
import photo from "../../images/Group 64.jpg";
import edit from "../../images/Group.svg";

import { useDispatch, useSelector } from "react-redux";
import { sendData } from "../store/userSlice";

const Test = () => {
  const user = useSelector((state) => state.user.userData);
  const [cv, setCv] = useState();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      profileImage: null,
      about: "",
      skills: [],
      cv: "",
    },
  });
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("cv", data.cv[0]);
    formData.append("militaryStatus", user.militaryStatus);
    formData.append("about", data.about);
    formData.append("profileImage", data.profileImage[0]);
    formData.append("username", user.username);
    formData.append("age", user.age);
    formData.append("experience", user.experience);
    formData.append("track", user.track);
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("tracklevel", user.tracklevel);
    formData.append("confirmPassword", user.confirmPassword);
    data.skills.split(" ").forEach((sk) => {
      formData.append("skills[]", sk);
    });
    dispatch(sendData(formData));
  };

 
  const [src, setSrc] = useState(photo);
  const [selectedPhoto, setSelectedPhoto] = useState();

  const handleFileChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setSelectedPhoto(JSON.stringify(e.target.files[0]));
  };
  return (
    <div className="junior Container">
      <Logo />

      <h1 className="text-center fs-2 mt-2 fw-bold"> Junior / Student Data</h1>
      <p className="text-center fw-light fs-5">
        Please enter this following data
      </p>
      <form
        className="mx-auto text-center"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <input
            type="file"
          id="profileImage"
          className="opacity-0 text-center "
          name="profileImage"
          {...register("profileImage")}
          accept="image/*"
          onChange={handleFileChange}
        />
        <label
          htmlFor="profileImage"
          className="mx-auto position-relative file "
        >
          <img
            src={src}
            alt="valid source"
            className="profile mt-3  rounded-circle"
          />
          <img
            src={edit}
            alt=""
            className="edit position-absolute bottom-0 end-0 p-2 rounded-circle"
          />
        </label>


        <div className=" inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
          <textarea
            name="about"
            id="area"
            rows="5"
            className=" w-100 border-0 "
            placeholder="About"
            {...register("about", { required: "* this field is required" })}
          />
          <label
            htmlFor="area"
            className="position-absolute fw-light top-0 px-2"
          >
            About Your{" "}
          </label>
        </div>
        <p className="error mt-2 text-start">{errors.about?.message}</p>

        <div className="inputGroup d-flex position-relative py-3 px-3  mt-4 gap-3">
          <textarea
            name="skills"
            id="skills"
            rows="3"
            className=" w-100 border-0 "
            placeholder="Enter your skills"
            {...register("skills", { required: "* this field is required" })}
          />
          <label
            htmlFor="skills"
            className="position-absolute fw-light top-0 px-2"
          >
            Skills{" "}
          </label>
        </div>
        <p className="error mt-2 text-start">{errors.skills?.message}</p>

        <div
          className={`${
            cv ? "border-0" : null
          } my-5 py-2 cv d-flex justify-content-center `}
        >
          <input
            type="file"
            id="cv"
            name="cv"
            {...register("cv")}
            onChange={(e) => setCv(e.target.files[0])}
          />
          <label
            htmlFor="cv"
            className={`labelCv ${
              cv
                ? "text-dark  justify-content-between px-4"
                : "justify-content-center"
            }  py-3 fw-light fs-5 w-100 d-flex gap-3 align-items-center `}
          >
            {cv != null ? (
              <>
                <img src={cvIcon2} alt="" />
                {cv.name}
              </>
            ) : (
              <>
                <img src={cvIcon} alt="" />
                Upload your cv/resume
              </>
            )}
          </label>
        </div>
        <button type="submit" className="w-100 mb-5 py-4">
          Save
        </button>
      </form>
    </div>
  );
};

export default Test;
