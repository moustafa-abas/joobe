import Header from "../../components/Header"
import Footer from '../../components/Footer'
import Job from '../../components/job'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../store/userSlice'
import UserProfile from '../../components/UserProfile'

const Profile = () => {
    const userData=useSelector((state)=>state.user.userData)
const dispatch =useDispatch()
    console.log(userData)
return (
<div >
<Header/>
<UserProfile/>

    <button onClick={()=>dispatch(logOut())} className='mx-auto py-2 px-3 mb-5'>log out</button>
    <div className="Container">
    <h2 className='fw-semibold mb-5'>Jop Saved</h2>
    {/* <Job/> */}
    </div>
    <Footer/>
</div>

)
}

export default Profile
