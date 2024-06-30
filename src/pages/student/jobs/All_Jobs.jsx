import { useSelector } from "react-redux"
import Header from "../../../components/Header"
import Job from "../../../components/job"
import Footer from "../../../components/Footer"
import Alert from "../../../components/Alert"

const All_Jobs = () => {
  const jobs=useSelector((state)=>state.jobs.jobs.data)
  const alert=useSelector((state)=>state.user.alert)

  return (
<div className="position-relative">
  <Header/>
    <div className="Container mt-3">
<h2 className="text-center fs-1 fw-bold"> All Available Jobs</h2>
{jobs?.map((job)=>(

<Job key={job._id} job={job}/>
)
)
}
</div>
<Footer/>
{
  alert?<Alert/>:null
}
</div>
  )
}

export default All_Jobs
