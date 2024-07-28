import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";
import google from "../../images/Encapsulated Group.svg";
import apple from "../../images/Apple logo.svg";
import email from "../../images/fluent_mail-24-regular.svg";
import lock from "../../images/lock.svg";
import right from "../../images/side right.svg";
import Logo from "../../logo";
import Spinner from "react-bootstrap/Spinner";
const LogIn = () => {
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(login(data));
  };
  const [showPass, setShowPass] = useState(false);
  const handelShow = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      <div className="login d-flex  position-relative">
        <div className="Container d-flex">
          <main>
            <Logo />
            <form
              className="mx-auto"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <h1 className="fs-2 mt-2 fw-bold">Log in Now </h1>
              <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
                <img src={email} alt="" className="icon fs-5" />
                <input
                  className="border-0 "
                  type="email"
                  id="email"
                  placeholder="Email "
                  name="email"
                  {...register("email", {
                    required: "* Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                <label
                  htmlFor="email"
                  className="position-absolute fw-light top-0 px-2"
                >
                  Email
                </label>
              </div>
              <p className="error mt-2">{errors.email?.message}</p>

              <div className="inputGroup d-flex position-relative py-3 px-3 align-items-center mt-4 gap-3">
                <img src={lock} alt="" className="icon fs-5" />
                <input
                  className="border-0 "
                  type={showPass ? "text" : "password"}
                  placeholder="************"
                  name="password"
                  id="password"
                  {...register("password", {
                    required: " * password is required",
                    minLength: {
                      value: 8,
                      message: "* password should be at least 8 characters",
                    },
                  })}
                />
                <label
                  htmlFor="password"
                  className="position-absolute fw-light top-0 px-2"
                >
                  Password{" "}
                </label>
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={handelShow}
                  className="eye "
                />
              </div>
              <p className="error mt-2">{errors.password?.message}</p>
              {error ? (
                <h6 className="error mt-2 text-danger  ">
                  {" "}
                  * username or password is wrong
                </h6>
              ) : (
                <></>
              )}
              <button type="submit" className="w-100 py-3 mt-4">
                Log in
              </button>
              <div className="or d-flex justify-content-between align-items-center mt-4">
                <div className="line  mb-3  "></div>
                <p className=" mx-auto d-inline text-center fs-6 fw-medium">
                  Or login with
                </p>
                <div className="line mb-3 "></div>
              </div>
              <button className="google mb-4 gap-3 fw-light w-100 py-3">
                <img src={google} alt="" />
                Log in using Google
              </button>
              <button className="apple mb-4 gap-3 fw-light w-100 py-3">
                <img src={apple} alt="" />
                Log in using Apple
              </button>
              <p className=" text-center fs-5 fw-lighter">
                {" "}
                Don&#39;t have an account ?
                <a
                  href="/signup"
                  className="ms-2 fw-bold text-decoration-underline"
                >
                  New registration
                </a>{" "}
              </p>
            </form>
          </main>
          <aside className="d-none d-sm-flex ">
            <img src={right} alt="" className="w-100" />
          </aside>
        </div>
        {loading ? (
          <div className="spinner position-absolute w-100  ">
            <Spinner
              animation="border"
              className=" position-absolute top-50 start-50 p-4 text-light"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default LogIn;
