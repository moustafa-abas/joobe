import { useEffect } from "react";
import coin from '../../../images/coin.png'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizData, nextQuestion, submitQuiz } from "../../store/quizSlice";
import { useForm } from 'react-hook-form';

const Questions = () => {
  const score=useSelector((state)=>state.quizzes.score)

  const dispatch = useDispatch()
 const token=useSelector((state)=>state.user.token)
  const quizData=useSelector((state)=>state.quizzes.quizData)
  const answers=useSelector((state)=>state.quizzes.answers)
  const finishQuestion=useSelector((state)=>state.quizzes.finishQuestion)
  const currentQuestion=useSelector((state)=>state.quizzes.currentQuestion)
  const {  handleSubmit ,register,formState:{errors}}  = useForm({
    defaultValues:{
      que_id:null,
      ans_id:null
    }
  })
  useEffect(() => {
    if (finishQuestion===true) {
      dispatch(submitQuiz(answers , token));
    }
  }, [finishQuestion]);

    useEffect(()=>{
      dispatch(fetchQuizData(token))
    },[])

    const onSubmit = (data) => {
      data.que_id = quizData.exam[currentQuestion]._id;
      dispatch(nextQuestion(data)) 
          };
  return (<div className="quiz">
    <Header/>
    <div className="questions Container mt-3">
<header className="   position-relative">
    <div className="text text-center ">
<h1>{quizData.type} </h1>
<h2 >Quiz 4</h2>
</div>
<div className="score ">
<div className="d-flex align-items-center justify-content-center "> <img src={coin} alt="" className="w-25"/> <span className="fw-semibold ms-3 fs-3">{score}</span></div>
</div>

</header>
<progress value={currentQuestion+ 1} max={quizData.exam.length} className="w-100"/>

{finishQuestion?
<p className="text-center fs-2 text-dark mt-3">you finished question today</p>
:
<>
<p className="fs-4 fw-light text-center"> Question {currentQuestion + 1}</p>

<h3 className="text-center fs-2" key={quizData.exam[currentQuestion]._id}>{quizData.exam[currentQuestion].question}</h3>

<form  action='' 
onSubmit={ handleSubmit(onSubmit)}>
{quizData.exam[currentQuestion].options.map((option)=>(
<div className="group d-flex align-items-center my-5 py-4" key={option._id}>
<input type="radio" id={option._id}  name="answer" value={option._id}  className="ms-3 me-3"
{...register('ans_id',
  {required:'* you must choose answer'
  }
)}/>
<label htmlFor={option._id} className="fs-4 fw-semibold w-100" >{option.answer}</label>
</div>
            ))}  
<p className="text-danger fs-3">{errors.ans_id?.message}</p>

<button  type="submit" className='py-4 w-50 my-5'>Next</button>
</form>
</>
} 
</div>
<Footer/>
</div>
  )
}

export default Questions
