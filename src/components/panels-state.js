import {useState} from 'react';

/*
*　9ボックスパネル
    DBから内容を入れて項目に利用するかもしれないので、そのような設計を心がける
    状態によって表示を変える
*/
const PanelsState=()=>{
    const [todos,setTodos]=useState([]);
    const[tmpTodo,setTmpTodo]=useState([]);

    const addTodo =() =>{
        setTodos([...todos,tmpTodo]);
        setTmpTodo("");
    }
    return (
        <>
        <h1>Todo App</h1>
        <div className="form">
            <input type="text" name="todo" onChange={e=>setTmpTodo(e.target.value)} value={tmpTodo}/>
            <button onClick={addTodo}>add</button>
        </div>
        <ul>
            {todos.map((todo,index)=>{
                return <li key={index}>{todo}</li>
            })}
        </ul>
        <style>{`
            h1{
                text-align:center;
            }
            .form{
                display:flex;
                justify-content:center;
            }
            ul{
                width:200px;
                margin:10px auto;
            }
        `}</style>
        </>
    )
}

export default PanelsState