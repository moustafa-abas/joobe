import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import quiz from '../images/quiz.svg'
import coin from '../images/coin1.jpg'
import hand from '../images/hand.svg'
import trueIcon from '../images/true.svg'
import circle from '../images/circle.svg'
import lock from '../images/lock.svg'
import result from '../images/result.jpg'
const Quiz = () => {
    const [page, setPage] = useState("home");
    const [answer, setAnswer] = useState("");
return (
<quizzes>
    <Header/>
{page ==="home"?
<home className="Container d-flex flex-column flex-md-row gap-5 justify-content-between mt-3">
<main className=" pe-5">
    <h1 className="fw-semibold">Learn <br /> new concepts <br /> for each question</h1>
    <p className="fs-4 fw-light mt-4">We help you prepare for exams and quizzes to improve your self </p>
    <submitButton onClick={(e)=>{
        e.preventDefault;
        setPage("page1")
    }} className='mt-5 w-50 py-3'>Daily Tasks</submitButton>
</main>
    <img src={quiz} alt=""  />
</home>:
//--------------------------------------------------------------------------------------

page==="page1"?
    <div className="page1 Container mt-3">
<header className="   position-relative">
    <div className="text text-center ">
<h1 className="fw-semibold">Daily Tasks</h1>
<h2 className="fw-lighter mt-4">Good Morning Mostafa <img src={hand} alt="" /></h2>
</div>
<div className="score ">
    <h2>Current Score</h2>
<div className="d-flex align-items-center justify-content-center "> <img src={coin} alt="" /> <span className="fw-semibold ms-3 fs-3">125</span></div>
</div>
</header>
<tasks>
    <h2 className="fw-semibold my-3">Daily Tasks</h2>
    <h4 className="fw-semibold">May</h4>
<ul className="d-flex justify-content-between gap-3 mt-4 overflow-scroll">
    <li className=" fw-bold fs-2 px-5 py-4">1</li>
    <li className=" fw-bold fs-2 px-5 py-4">2</li>
    <li className=" fw-bold fs-2 px-5 py-4">3</li>
    <li className=" fw-bold fs-2 px-5 py-4">4</li>
    <li className=" fw-bold fs-2 px-5 py-4">5</li>
    <li className=" fw-bold fs-2 px-5 py-4">6</li>
    <li className=" fw-bold fs-2 px-5 py-4">7</li>
</ul>
    <h1 className="fw-bold text-center mt-5">You have 5 Tasks Today</h1>
    <p className="fs-4 fw-semibold mt-3 text-center">UI UX Design</p>
</tasks>


<questions>
    <div className="tasks mt-4   ">
        <p className="fs-4 fw-light">1 Questions</p>
        <div className="state d-flex p-3 align-items-center ">
<h4 className="me-4  ">Color Physiology</h4>
<div className="range d-flex ">
    
</div>
<img src={trueIcon} alt="" width={30} />
        </div>
    </div>
    <div className="tasks mt-4">
        <p className="fs-4 fw-light">2 Questions</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4">Text & Spacing </h4>
{/* <div className="brd"></div> */}
<div className="range d-flex ">
    
</div>
<img src={trueIcon} alt="" width={30} />

        </div>
    </div>
    <div className="tasks mt-4">
        <p className="fs-4 fw-light">3 Questions</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4">Design System</h4>
{/* <div className="brd"></div> */}
<div className="range d-flex ">
</div>
<img src={trueIcon} alt="" width={30}/>

        </div>
    </div>
    <div className="tasks mt-4">
        <p className="fs-4 fw-light">4 Questions</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4">Typography & Hierarchy</h4>
<div className="range d-flex ">
</div>
<img src={circle} alt="" width={30}/>

        </div>
    </div>
    <div className="tasks mt-4">
        <p className="fs-4 fw-light">5 Questions</p>
        <div className="state p-3 align-items-center d-flex">
<h4 className="me-4">Typography & Hierarchy</h4>
<div className="range d-flex ">
</div>
<img src={lock} alt="" width={30}/>
        </div>
    </div>
</questions>
    <submitButton className="my-5 py-4" onClick={(e)=>{
        e.preventDefault;
        setPage("page2")
    }}>Continue</submitButton>
    <submitButton className="py-4 ">New Level</submitButton>
    </div>
:
//----------------------------------------------------------------------------------------------

page==="page2"?
    <div className="page2 Container mt-3">
<header className="   position-relative">
    <div className="text text-center ">
<h1>UI UX Design </h1>
<h2 >Quiz 4</h2>
</div>
<div className="score ">
<div className="d-flex align-items-center justify-content-center "> <img src={coin} alt="" /> <span className="fw-semibold ms-3 fs-3">125</span></div>
</div>

</header>

<div className="range"></div>
<p className="fs-4 fw-light text-center">1 Questions</p>

<h3 className="text-center fs-2">Which of the typographic is primarily Responsible for guiding readers through the content and indicating the information ?</h3>

<form  action='' onChange={(e)=>setAnswer(e.target.value)} >
<div className="group d-flex align-items-center my-5 py-4">
<input type="radio" id="answer1"  name="option" value={answer}  className="ms-3 me-3"/>
<label htmlFor='answer1' className="fs-4 fw-semibold w-100">Font Color</label>
</div>
<div className="group d-flex align-items-center my-5 py-4">
<input type="radio" id="answer2" name="option" value={answer} className="ms-3 me-3"/>
<label htmlFor='answer2' className="fs-4 fw-semibold w-100">Font Size</label>
</div>
<div className="group d-flex align-items-center my-5 py-4">
<input type="radio" id="answer3" name="option" value={answer} className="ms-3 me-3"/>
<label  htmlFor='answer3' className="fs-4 fw-semibold w-100">Letter Spacing</label>
</div>
<div className="group d-flex align-items-center my-5 py-4">
<input type="radio" id="answer4" name="option" value={answer} className="ms-3 me-3"/>
<label  htmlFor='answer4' className="fs-4 fw-semibold w-100">Hierarchy approach</label>
</div>

<submitButton onClick={()=>{
    setPage("result")
}} className='py-4 w-50 my-5'>Next</submitButton>
</form>
</div>



//-----------------------------------------------------------------------------------------------------

:<result>
    <div className=" text-center">
<header className="  position-relative">
    <div className="text text-center ">
<h1>UI UX Design </h1>
<h2 >Quiz 4</h2>
<h3 className="fs-1 fw-bold">Congratulation</h3>
</div>
</header>
<img src={result} alt="" className="w-25 " />
<h2 className="fw-semibold my-4">Your Score Now is</h2>
    <p className="w-25 d-flex justify-content-center align-items-center py-4 mx-auto fs-1 fw-bold"><img src={coin} alt="" className="me-3"/>300</p>
<div className="range w-50"></div>
</div>
<submitButton className='w-50 mx-auto py-4 mt-5'>Next Quiz</submitButton>
</result>
}
<Footer/>
</quizzes>
)
}

export default Quiz
