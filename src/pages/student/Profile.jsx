import Header from "../../components/Header"
import Footer from '../../components/Footer'
import Job from '../../components/job'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../store/userSlice'
import UserProfile from '../../components/UserProfile'
import Alert from "../../components/Alert"

const Profile = () => {
const alert = useSelector((state) => state.community.alert);
    
    const myJobs=useSelector((state)=>state.user.userData?.myJobs)
    console.log(myJobs)
    const isSaved=true
return (
<div  className="position-relative">
<Header/>
<UserProfile/>
    <div className="Container">
    <h2 className='fw-semibold mb-5'>Jop Saved</h2>
{myJobs?
    myJobs?.map((job)=>(
        <Job  key={job._id} job={myJobs} saved={myJobs.includes(job)? isSaved:null} /> 
    )):<h1 className=" fw-bold text-center text-primary"> no saved job</h1>
}
    </div>
    {
        alert==='log out'?<Alert/>:null
    }
    <Footer/>
</div>
)
}

export default Profile
