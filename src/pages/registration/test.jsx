    import { useEffect, useState } from 'react';
    import axios from 'axios';
     const Test = () => {
        const [tracks, setTracks] = useState([]);

  const [currentQuestion,setCurrentQuestion] = useState(0);
const next=()=>{
  const nextQuestion=currentQuestion + 1;
  if(currentQuestion<tracks.length){
  setCurrentQuestion(nextQuestion)
  }else{
    console.log('no')
  }
}
        useEffect(() => {
        axios.get('https://jobee-5pfw.onrender.com/api/exam',{     
          headers: {
            Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJuZXczVXNlcjRAZ21haWwuY29tIiwiaWF0IjoxNzEzODEwMzcyLCJleHAiOjE3MTY0MDIzNzJ9.7Y0QpPKDz4cieMVXRpRCid8QIS-YRowJgLuyQEOLcFs'
        }})
            .then(response => {
            setTracks(response.data.data);
            })
            .catch(error => {
            console.error('حدث خطأ أثناء جلب التراكات:', error);
            });
        },[]);
        return (<>
             {/* <h2 key={tracks[currentQuestion]}>{tracks.exam[currentQuestion].question}</h2> */}
             {/* {tracks[currentQuestion].options.map((item)=>(
               <button key={item}>{item.answer}</button> 
            ))
            }   */}
    <button onClick={next}>click</button>
    <button onClick={()=>{
      console.log(tracks.exam.length)
      // console.log(tracks.type)
    }}>sssss</button>
        </>
        );
      }

      export default Test


