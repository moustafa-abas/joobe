import coin from '../../../images/coin.png'
import hand from '../../../images/hand.svg'
import trueIcon from '../../../images/true.svg'
import circle from '../../../images/circle.svg'
import lock from '../../../images/lock.svg'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchQuizData } from '../../store/quizSlice'
const DailyTasks = () => {
    const userData=useSelector((state)=>state.user.userData)
    const quizzesData=useSelector((state)=>state.quizzes.quizzesData)
  const score=useSelector((state)=>state.quizzes.score)
  const currentQuestion=useSelector((state)=>state.quizzes.currentQuestion)
  const currentQuiz=useSelector((state)=>state.quizzes.currentQuiz)
  const length=quizzesData[currentQuiz].exam.length
  const value=quizzesData[currentQuiz].exam.map((question ,index)=>index)[currentQuestion]
  console.log(quizzesData)

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchQuizData())
  },[])

return (<div className='quiz'>
<Header/>
    <div className="daily-tasks Container mt-3">
        <data value=""></data>
    
<header className=" position-relative">
    <div className="text text-center ">
<h1 className="fw-lighter mt-4">Good Morning {userData.username} <img src={hand} alt="" /></h1>
</div>
<div className="score   ">
    <h2>Current Score</h2>
<div className="d-flex align-items-center justify-content-center "> <img src={coin} alt="" width={35}/> <span className="fw-semibold ms-3 fs-3">{score}</span></div>
</div>
</header>
<div className='tasks'>

    <h2 className="fw-bold text-center mt-5">You have {quizzesData.length} Tasks </h2>
    <p className="fs-3 fw-semibold mt-3 text-center">{userData.track}</p>
</div>


<div className='question'>
{quizzesData?.map((quiz, index)=>(
        <div className="task mt-4" key={quiz._id} value={quiz._id}>
        <p className="fs-5 fw-light">{index+1} Question</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4 pe-5 w-25">{quiz.name} </h4>
<progress value={currentQuiz===index? value:currentQuiz>index?length:0} max={length} className='w-75 me-3'></progress>
{
currentQuiz>index?
<img src={trueIcon} alt="" width={30}  />:
currentQuiz===index?
<img src={circle} alt="" width={30} />
:<img src={lock} alt="" width={30} />
}
        </div>
    </div>
))
}
</div>
    <button className="my-5 py-4 " ><a href="/quiz/questions">Continue</a></button>
    </div>
    <Footer/>
    </div>
  )
}

export default  DailyTasks 

