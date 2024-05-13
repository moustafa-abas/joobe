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
    const userData=JSON.parse(localStorage.getItem('allDAta'))
    const token=useSelector((state)=>state.user.token)
    const data=useSelector((state)=>state.quizzes.quizData)
  const score=useSelector((state)=>state.quizzes.score)

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchQuizData(token))
    },[])

return (<div className='quiz'>
<Header/>
    <div className="daily-tasks Container mt-3">
<header className=" position-relative">
    <div className="text text-center ">
<h1 className="fw-semibold">Daily Tasks</h1>
<h1 className="fw-lighter mt-4">Good Morning {userData.username} <img src={hand} alt="" /></h1>
</div>
<div className="score ">
    <h2>Current Score</h2>
<div className="d-flex align-items-center justify-content-center "> <img src={coin} alt="" width={35}/> <span className="fw-semibold ms-3 fs-3">{score}</span></div>
</div>
</header>
<div className='tasks'>
    <h3 className="fw-semibold my-3">Daily Tasks</h3>
    <h4 className="fw-semibold">May</h4>
<ul className="d-flex justify-content-between gap-3 mt-4 overflow-scroll">
    <li className=" fw-bold fs-3 px-5 py-4">1</li>
    <li className=" fw-bold fs-3 px-5 py-4">2</li>
    <li className=" fw-bold fs-3 px-5 py-4">3</li>
    <li className=" fw-bold fs-3 px-5 py-4">4</li>
    <li className=" fw-bold fs-3 px-5 py-4">5</li>
    <li className=" fw-bold fs-3 px-5 py-4">6</li>
    <li className=" fw-bold fs-3 px-5 py-4">7</li>
</ul>
    <h2 className="fw-bold text-center mt-5">You have 5 Tasks Today</h2>
    <p className="fs-3 fw-semibold mt-3 text-center">{data.type}</p>
</div>


<div className='questions mx-auto'>
    <div className="tasks mt-4   ">
        <p className="fs-4 fw-light">1 Questions</p>
        <div className="state d-flex p-3 align-items-center ">
<h4 className="me-4  ">Color Physiology</h4>
<progress value={0} className='w-100 me-3'></progress>
<img src={trueIcon} alt="" width={30} />
        </div>
    </div>
    <div className="tasks mt-4">
        <p className="fs-4 fw-light">2 Questions</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4">Text & Spacing </h4>
<progress value={0} className='w-100 me-3'></progress>

<img src={trueIcon} alt="" width={30} />

        </div>
    </div>
    <div className="tasks mt-4">
        <p className="fs-4 fw-light">3 Questions</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4">Design System</h4>
<progress value={0} className='w-100 me-3'></progress>

<img src={trueIcon} alt="" width={30}/>

        </div>
    </div>
    <div className="tasks mt-4">
        <p className="fs-4 fw-light">4 Questions</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4">Typography & Hierarchy</h4>
<progress value={0} className='w-100 me-3'></progress>
<img src={circle} alt="" width={30}/>

        </div>
    </div>
    <div className="tasks mt-4">
        <p className="fs-4 fw-light">5 Questions</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4">Typography & Hierarchy</h4>
<progress value={0} className='w-100 me-3'></progress>

<img src={lock} alt="" width={30}/>
        </div>
    </div>
</div>
    <button className="my-5 py-4 " ><a href="/quiz/questions">Continue</a></button>
    <button className="py-4 ">New Level</button>
    </div>
    <Footer/>
    </div>
  )
}

export default  DailyTasks 

