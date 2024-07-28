
const Slider = () => {
  return (
    <div className="slider Container d-none d-xl-flex flex-column px-5  my-5">
    <main className="py-4 ps-5 w-50">
        <h2 className="fw-bold">Learn & Get jop</h2>
        <p className="fs-3 fw-lighter my-4">
        With Jobee you can get courses and get offers for work very
        easily
        </p>
        <button className="py-3">
        <a href="/jobs" className="fs-5 fw-light">
            Apply now
        </a>{" "}
        </button>
    </main>
    <div className="bullets d-flex justify-content-center mb-4 ">
        <div className="bullet1 rounded-circle mx-1"></div>
        <div className="bullet2 rounded-circle mx-1"></div>
        <div className="bullet3 rounded-circle mx-1"></div>
        <div className="bullet4 rounded-circle mx-1"></div>
    </div>
    </div>  )
}

export default Slider