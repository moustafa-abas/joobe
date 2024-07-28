import { useDispatch, useSelector } from "react-redux"
import Header from'../../components/Header'
import Footer from'../../components/Footer'
import m from'../../images/course6.jpg'
import { getUser } from "../store/userSlice"
const Applicants = () => {
    const dispatch=useDispatch()
    const applied =useSelector((state)=>state.jobs.job.applied)
    console.log(applied)
  return (<>
  <Header/>
        <h2 className=" fw-bold text-center my-5"> {applied?.length}{applied?.title} Applicant</h2>
    <div className="Container applied d-flex justify-content-between flex-wrap gap-4 px-5">
        {applied?.map((person)=>(
            
            <div className="person d-flex flex-column flex-md-row align-items-center justify-content-between" key={person.studentId._id}>
    <div className="d-flex gap-4">
    <img src={person.studentId.profileImage} alt=""  />
    <div>
    <h5>{person.studentId.username}</h5>
    <h6 className="text-secondary mt-3">4/2/2024</h6>
    </div>
        </div>
    <button className="button px-5 py-3" onClick={async()=>{await dispatch(getUser({id:person.studentId._id}))
location.replace('Applicant')}}>View Profile</button>
</div>
))
}
    </div>
    <Footer/>
    </>
  )
}

export default Applicants