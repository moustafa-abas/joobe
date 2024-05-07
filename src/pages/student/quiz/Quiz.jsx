import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import quiz from '../../../images/quiz.svg'

const Quiz = () => {
return (
<div className="quiz">
    <Header/>
<div className="home Container d-flex flex-column flex-md-row gap-5 justify-content-between mt-3">
<main className=" pe-5">
    <h2 className="fw-semibold">Learn <br /> new concepts <br /> for each question</h2>
    <p className="fs-4 fw-light mt-4">We help you prepare for exams and quizzes to improve your self </p>
    <button className='mt-5 w-50 py-3'> <a href="/quiz/daily-tasks">Daily Tasks</a></button>
</main>
    <img src={quiz} alt=""  />
</div>
<Footer/>
</div>
)
}

export default Quiz
