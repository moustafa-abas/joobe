import './style/style.scss'
import { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Routes,Route} from'react-router-dom'
const LogIn = lazy(()=>import('./pages/registration/LogIn'))
const SignUp = lazy(()=>import('./pages/registration/SignUp'))
const SelectSign = lazy(()=>import('./pages/registration/SelectSign'))
const Junior = lazy(()=>import('./pages/registration/Junior'))
const StartUp = lazy(()=>import('./pages/registration/StartUp'))
const Instructor = lazy(()=>import('./pages/registration/Instructor'))
const Home = lazy(()=>import('./pages/student/Home'))
const Jobs = lazy(()=>import('./pages/student/jobs/Jobs'))
const All_Jobs = lazy(()=>import('./pages/student/jobs/All_Jobs'))
const ApplyJob = lazy(()=>import('./pages/student/jobs/ApplyJob'))

const Courses = lazy(()=>import('./pages/student/courses/Courses'))
const All_Courses = lazy(()=>import('./pages/student/courses/All_Course'))
const Course_Details = lazy(()=>import('./pages/student/courses/Course_Details'))

const Quiz = lazy(()=>import('./pages/student/quiz/Quiz'))
const Tasks = lazy(()=>import('./pages/student/quiz/Daily-Tasks'))
const Questions = lazy(()=>import('./pages/student/quiz/Question'))
const Result = lazy(()=>import('./pages/student/quiz/Result'))
const Community = lazy(()=>import('./pages/student/Community'))
const Profile = lazy(()=>import('./pages/student/Profile'))
const Payment = lazy(()=>import('./pages/student/Payment'))
const Course = lazy(()=>import('./pages/student/courses/Course_Enrolled'))
const Test = lazy(()=>import('./pages/registration/test'))
const App=()=> {

  return (
    <Suspense fallback={<h1 className='text-center'>loading</h1>}>
    <Router>
      <Routes>
        <Route path='/login' Component={LogIn}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/select' Component={SelectSign}/>
        <Route path='/junior' Component={Junior}/>
        <Route path='/startup' Component={StartUp}/>
        <Route path='/instructor' Component={Instructor}/>

        <Route exact path='/' Component={Home}/>

        <Route path='/jobs' Component={Jobs}/>
        <Route path='/jobs/all_jobs' Component={All_Jobs}/>
        <Route path='/jobs/applyJob' Component={ApplyJob}/>
        
        <Route path='/courses' Component={Courses}/>
        <Route path='/courses/all-courses' Component={All_Courses}/>
        <Route path='/courses/course_details' Component={Course_Details}/>
        <Route path='/courses/enrolled' Component={Course}/>

        <Route path='/quiz/home' Component={Quiz}/>
        <Route path='/quiz/daily-tasks' Component={Tasks}/>
        <Route path='/quiz/questions' Component={Questions}/>
        <Route path='/quiz/result' Component={Result}/>

        <Route path='/community' Component={Community}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/payment' Component={Payment}/>
        <Route path='/test' Component={Test}/>
      </Routes>
    </Router>
    </Suspense>
  )
}

export default App;
