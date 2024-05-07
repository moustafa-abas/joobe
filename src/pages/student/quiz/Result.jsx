import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import coin from '../../../images/coin1.jpg'
import result from '../../../images/result.jpg'
import { useEffect } from 'react'
import { fetchQuizData } from '../../store/quizSlice'

const Result = () => {
  const data=useSelector((state)=>state.Quizzes.data)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchQuizData())
  },[])
  return (
    <div className='quiz '>
        <Header/>
<div className='result mx-auto'>
    <div className=" text-center">
<header className="  position-relative">
    <div className="text text-center ">
<h1>{data.type} </h1>
<h2 >Quiz 4</h2>    
<h3 className="fs-1 fw-bold">Congratulation</h3>
</div>
</header>
<img src={result} alt="" className="w-25 " />
<h2 className="fw-semibold my-4">Your Score Now is</h2>
    <p className="w-25 d-flex justify-content-center align-items-center py-4 mx-auto fs-1 fw-bold"><img src={coin} alt="" className="me-3"/>300</p>
<progress value={.2} className='w-50'/>
</div>
<button className='w-50 mx-auto py-4 mt-5'>Next Quiz</button>
</div>
<Footer/>
</div>
  )
}

export default Result
