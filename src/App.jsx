import './style/style.scss'
import {BrowserRouter as Router, Routes,Route} from'react-router-dom'
import LogIn from './pages/registration/LogIn';
import SelectSign from './pages/registration/SelectSign';
import SignUp from './pages/registration/SignUp';
import Junior from './pages/registration/Junior';
import StartUp from './pages/registration/StartUp';
import {Instructor}  from'./pages/registration/Instructor';
import Header from './pages/components/Header';
import Home from './pages/student/Home';
import Jobs from './pages/student/Jobs';
import Courses from './pages/student/Courses';
import Quiz from './pages/student/Quiz';
import ApplyJob from './pages/student/ApplyJob';
import Community from './pages/student/Community';
import Profile from './pages/student/Profile';
import Payment from './pages/student/Payment';
import Course from './pages/student/Course';
import Footer from './pages/components/Footer';
const App=()=> {

  return (
    <Router>
      <Routes>
        <Route path='/login' Component={LogIn}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/select' Component={SelectSign}/>
        <Route path='/junior' Component={Junior}/>
        <Route path='/startup' Component={StartUp}/>
        <Route path='/instructor' Component={Instructor}/>
        <Route path='/header' Component={Header}/>
        <Route exact path='/' Component={Home}/>
        <Route path='/jobs' Component={Jobs}/>
        <Route path='/courses' Component={Courses}/>
        <Route path='/quiz' Component={Quiz}/>
        <Route path='/applyJob' Component={ApplyJob}/>
        <Route path='/community' Component={Community}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/payment' Component={Payment}/>
        <Route path='/course' Component={Course}/>
        <Route path='/footer' Component={Footer}/>
      </Routes>
    </Router>
  )
}

export default App;
