import add from "../../images/add.svg";
import visa from "../../images/Visa.svg";
import master from "../../images/Mastercard logo.svg";
import code from "../../images/promo code.svg";
import course from "../../images/course1.jpg";
import Footer from "../../components/Footer";
import { useState } from "react";
const Payment = () => {
const [oldCard, setOldCard] = useState(true);
return (
<>
    <div className="payment my-5 Container d-flex flex-column-reverse flex-sm-row gap-5">
    {oldCard ? (
        <>
        <div className="left">
            <h2 className="fw-bold">Payment Details</h2>
            <form className="  w-100  ">
            <h6 className="d-flex justify-content-between align-items-center fw-bold mt-4">
                Select Method
                <span
                onClick={() => {
                    setOldCard(false);
                }}
                >
                <img src={add} alt="" /> Add new
                </span>
            </h6>
            <div className="group d-flex flex-column flex-md-row gap-3">
                <div className="radioGroup d-flex w-50 align-items-center gap-4 p-3 mt-3">
                <input type="radio" id="visa" name="pay" value="visa" />
                <label
                    htmlFor="visa"
                    className="d-flex  justify-content-between align-items-center"
                >
                    <div className=" d-flex flex-column gap-3">
                    **** 8304
                    <h6>Visa.Edit</h6>
                    </div>{" "}
                    <img src={visa} alt="" />
                </label>
                </div>
                <div className=" radioGroup d-flex w-50 align-items-center gap-4  p-3 mt-3">
                <input type="radio" id="master" name="pay" value="master" />
                <label
                    htmlFor="master"
                    className="d-flex  justify-content-between align-items-center"
                >
                    <div className=" d-flex flex-column gap-3">
                    **** 8304
                    <h6>Master.Edit</h6>
                    </div>{" "}
                    <img src={master} alt="" />
                </label>
                </div>
            </div>
            <div className="inputGroup d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
                <input
                className="border-0 "
                // onChange={handleChange}
                type="text"
                id="cardName"
                placeholder="Yehia Ahmed"
                name="name"
                />
                <label
                htmlFor="cardName"
                className="position-absolute fw-light top-0 px-2"
                >
                Name On Card
                </label>
            </div>

            <div className="group d-flex flex-column flex-md-row gap-3">
                <div className="inputGroup w-50 d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
                <input
                    // onChange={handleChange}
                    type="number"
                    id="cardNumber"
                    placeholder="Enter your card number"
                    name="number"
                />
                <label
                    htmlFor="cardNumber"
                    className="position-absolute fw-light top-0 px-2"
                >
                    Card Number
                </label>
                </div>
                <div className="inputGroup date d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
                <input
                    // onChange={handleChange}
                    type="date"
                    id="date"
                    placeholder="MM / YY"
                    name="date"
                />
                <label
                    htmlFor="date"
                    className="position-absolute fw-light top-0 px-2"
                >
                    Expiration Date
                </label>
                </div>
                <div className="inputGroup cvv d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
                <input
                    // onChange={handleChange}
                    type="text"
                    id="cvv"
                    placeholder="CVV"
                    name="cvv"
                />
                <label
                    htmlFor="cvv"
                    className="position-absolute fw-light top-0 px-2"
                >
                    CVV
                </label>
                </div>
            </div>

            <div className="inputGroup d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
                <select
                name="country"
                id="country"
                // onChange={handleChange}
                >
                <option value="" disabled hidden>
                    Select your country
                </option>
                </select>
                <label
                htmlFor="country"
                className="position-absolute fw-light top-0 px-2"
                >
                Country
                </label>
            </div>

            <div className=" d-flex align-items-center justify-content-start mt-4 ">
                <input type="checkbox" id="checkbox" className=" p-2 me-3" />
                <label htmlFor="checkbox">
                Save this card securely for future purposes
                </label>
            </div>
            <button className="mt-5 py-4 w-50">
                <a href="/course/enrolled"> Pay Now</a>
            </button>
            </form>
        </div>
        <div className="right mt-5">
            <div className="inputGroup d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
            <img src={code} alt="" />
            <input
                className="border-0 "
                // onChange={handleChange}
                type="number"
                id="code"
                placeholder="Enter code"
                name="code"
            />
            <label
                htmlFor="code"
                className="position-absolute fw-light top-0 px-2"
            >
                Promo Code
            </label>
            <button className="border-0 fw-semibold">Apply</button>
            </div>

            <div className="course d-flex  mt-5 mb-3 pb-4">
            <img src={course} alt="" className="mx-3 " />
            <div className="info py-3 ">
                <h6 className="fw-bold mb-4">
                {" "}
                Fundamental Of User Experience{" "}
                </h6>
                <h5 className="fw-bold">By Ahmed</h5>
            </div>
            </div>
            <h5 className="d-flex justify-content-between mb-4">
            Guided project <span>250$</span>
            </h5>
            <h4 className="d-flex justify-content-between fw-semibold">
            Total : <span>250$</span>
            </h4>
        </div>
        </>
    ) : (
        <>
        <form action="" className=" text-center mx-auto">
            <h2 className=" mb-2">Add new Card</h2>
            <div className="inputGroup d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
            <input
                className="border-0 "
                // onChange={handleChange}
                type="text"
                id="cardName"
                placeholder="Yehia Ahmed"
                name="name"
            />
            <label
                htmlFor="cardName"
                className="position-absolute fw-light top-0 px-2"
            >
                Name On Card
            </label>
            </div>

            <div className="group d-flex flex-column flex-sm-row gap-3">
            <div className="inputGroup w-50 d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
                <input
                // onChange={handleChange}
                type="number"
                id="cardNumber"
                placeholder="Enter your card number"
                name="number"
                />
                <label
                htmlFor="cardNumber"
                className="position-absolute fw-light top-0 px-2"
                >
                Card Number
                </label>
            </div>
            <div className="inputGroup date d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
                <input
                // onChange={handleChange}
                type="date"
                id="date"
                placeholder="MM / YY"
                name="date"
                />
                <label
                htmlFor="date"
                className="position-absolute fw-light top-0 px-2"
                >
                Expiration Date
                </label>
            </div>
            <div className="inputGroup cvv d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
                <input
                // onChange={handleChange}
                type="text"
                id="cvv"
                placeholder="CVV"
                name="cvv"
                />
                <label
                htmlFor="cvv"
                className="position-absolute fw-light top-0 px-2"
                >
                CVV
                </label>
            </div>
            </div>

            <div className="inputGroup d-flex position-relative py-4 px-3 align-items-center mt-4 gap-3">
            <select
                name="country"
                id="country"
                // onChange={handleChange}
            >
                <option value="" disabled selected hidden>
                Select your country
                </option>
            </select>
            <label
                htmlFor="country"
                className="position-absolute fw-light top-0 px-2"
            >
                Country
            </label>
            </div>
            <div className=" d-flex align-items-center justify-content-start mt-4 ">
            <input type="checkbox" id="checkbox" className=" p-2 me-3" />
            <label htmlFor="checkbox ">
                Save this card securely for future purposes
            </label>
            </div>
            <button className="mt-5 py-4 w-100">
            <a href="/payment"> Save Card</a>
            </button>
        </form>
        </>
    )}
    </div>
    <Footer />
</>
);
};

export default Payment;
