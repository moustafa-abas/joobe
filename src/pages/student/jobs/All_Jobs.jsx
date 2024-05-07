import Header from "../../../components/Header"
import Job from "../../../components/job"

const All_Jobs = () => {
  return (
<>
  <Header/>
    <div className="Container mt-3">
<h2 className="text-center fs-1 fw-bold"> All Available Jobs</h2>
<Job/>
<Job/>
<Job/>
</div>
</>
  )
}

export default All_Jobs
