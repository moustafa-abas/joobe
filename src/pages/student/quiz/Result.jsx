import { useSelector } from 'react-redux'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import coin from '../../../images/coin.png'
import result from '../../../images/result.jpg'

const Result = () => {
  const score=useSelector((state)=>state.quizzes.score)
  const data=useSelector((state)=>state.quizzes.quizData)
  console.log(data)

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
    <p className="w-25 d-flex justify-content-center align-items-center py-4 mx-auto fs-1 fw-bold"><img src={coin} alt="" className="me-3" width={35}/>{score}</p>
<progress value={.2} className='w-50'/>
</div>
<button className='w-50 mx-auto py-4 mt-5'>Next Quiz</button>
</div>
<Footer/>
</div>
  )
}

export default Result
