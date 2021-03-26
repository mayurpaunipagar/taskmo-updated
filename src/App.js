import "./App.css";
import React, { useEffect, useState } from "react";

const url="http://103.212.121.222:3000/task/1137/report/details/new";
function App(){
  const [questions,setQuestions]=useState([]);
  const [answers,setAnswers]=useState([]);

  useEffect(()=>{
    const fetchCall=async ()=>{
      const res1=await fetch(url);
      const res2=await res1.json()
      const {task_questions,task_answers}=res2;
      const allQuestions=task_questions.map(({question})=>question);

      console.log(task_answers);
      setQuestions([...allQuestions]);
      setAnswers([...task_answers])
    }
    fetchCall();
  },[])

  return <>
    <div className="App">
      {answers.map(({user_id,task_id,answer})=>{
        return <table>
          <thead>
            <th>User Id</th>
            <th>Task Id</th>
            {answer.map(({question})=>{
              return <th>{question}</th>
            })}
          </thead>
          <tbody>
            <td>{user_id}</td>
            <td>{task_id}</td>
            {answer.map(({answer})=>{
              return <td>{answer}</td>
            })}
          </tbody>
        </table>
      })}
    </div>
  </>
  
  
}

export default App;
