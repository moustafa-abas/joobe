import { useEffect, useState } from "react";
import axios from "axios";
import coin from '../../../images/coin1.jpg'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Questions = () => {

    const [answer, setAnswer] = useState("");
    const [exams, setExams] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const next=(e)=>{
        e.preventDefault();
    if(currentQuestion<exams.exam.length -1){
    setCurrentQuestion(currentQuestion + 1)
    }else{
        location.replace('/quiz/result')
}
    }
    useEffect(() => {
        axios.get('https://jobee-5pfw.onrender.com/api/exam',{     
        headers: {
            Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJuZXczVXNlcjRAZ21haWwuY29tIiwiaWF0IjoxNzEzODEwMzcyLCJleHAiOjE3MTY0MDIzNzJ9.7Y0QpPKDz4cieMVXRpRCid8QIS-YRowJgLuyQEOLcFs'
        }})
            .then(response => {
            setExams(response.data.data);
            })
            .catch(error => {
            console.error('حدث خطأ أثناء جلب التراكات:', error);
            });
        },[]);

  return (<quiz>
    <Header/>
    <div className="questions Container mt-3">
<header className="   position-relative">
    <div className="text text-center ">
<h1>{exams.type} </h1>
<h2 >Quiz 4</h2>
</div>
<div className="score ">
<div className="d-flex align-items-center justify-content-center "> <img src={coin} alt="" /> <span className="fw-semibold ms-3 fs-3">125</span></div>
</div>

</header>
<progress value={.5} className="w-100"></progress>
<p className="fs-4 fw-light text-center"> Question {currentQuestion + 1}</p>

<h3 className="text-center fs-2" key={exams[currentQuestion]}>{exams.exam[currentQuestion].question}</h3>

<form  action='' 
onChange={(e)=>setAnswer(e.target.value)} >
{exams.exam[currentQuestion].options.map((option)=>(
<div className="group d-flex align-items-center my-5 py-4" key={option._id}>
<input type="radio" id={option._id}  name="option" value={option._id}  className="ms-3 me-3"/>
<label htmlFor={option._id} className="fs-4 fw-semibold w-100" >{option.answer}</label>
</div>
            ))}  


<button onClick={next} className='py-4 w-50 my-5'>Next</button>
</form>
</div>
<Footer/>
</quiz>
  )
}

export default Questions
