import { useEffect } from "react";
import coin from '../../../images/coin1.jpg'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizData, nextQuestion } from "../../store/quizSlice";
import { useForm } from 'react-hook-form';

const Questions = () => {
  const dispatch = useDispatch()
  const {  handleSubmit ,register}  = useForm({
    defaultValues:{
    answer:''
    }
  })

    const data=useSelector((state)=>state.Quizzes)
  console.log(data)

    useEffect(()=>{
      dispatch(fetchQuizData())
    },[])

    const onSubmit = (data) => {
      dispatch(nextQuestion()) 
console.log(data)     
          };
  return (<div className="quiz">
    <Header/>
    <div className="questions Container mt-3">
<header className="   position-relative">
    <div className="text text-center ">
<h1>{data.type} </h1>
<h2 >Quiz 4</h2>
</div>
<div className="score ">
<div className="d-flex align-items-center justify-content-center "> <img src={coin} alt="" /> <span className="fw-semibold ms-3 fs-3">125</span></div>
</div>

</header>
<progress value={.5} className="w-100"></progress>
{/* <progress value={currentQuestion+ 1} max={data.exam.length} /> */}
<p className="fs-4 fw-light text-center"> Question {data.currentQuestion + 1}</p>

{/* <h3 className="text-center fs-2" key={data.data.exam[data.  currentQuestion]._id}>{data.data.exam[data.currentQuestion].question}</h3> */}

<form  action='' 
onSubmit={ handleSubmit(onSubmit)}>
{/* {data.exam[currentQuestion].options.map((option)=>(
<div className="group d-flex align-items-center my-5 py-4" key={option._id}>
<input type="radio" id={option._id}  name="answer" value={option._id}  className="ms-3 me-3"
{...register('answer')}/>
<label htmlFor={option._id} className="fs-4 fw-semibold w-100" >{option.answer}</label>
</div>
            ))}   */}

<button  className='py-4 w-50 my-5'>Next</button>
</form>
</div>
<Footer/>
</div>
  )
}

export default Questions
