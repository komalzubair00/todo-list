import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { generateRandomString } from './utils/helpers';

function App() {
  // for input text
  const [todo, settodo]=useState("");  

  // store list of todo
  const [todos,Settodos]=useState([])




useEffect(() => {
  let items = JSON.parse(localStorage.getItem("todos")) || [];  // Default empty array if null
  Settodos(items);
}, []);

const saveTodo = (updatedTodos) => {
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

  //   const handleAdd = ()=>{
  //     Settodos([...todos, { id: uuidv4(), random: generateRandomString(5,'all'), todo, isCompleted: false, timestamp: new Date().getTime(), createdAt: new Date().toLocaleString()}])
  //     settodo("")
  //     console.log(todos)
  //     // console.log(todo)
  //     setTimeout(() => {
  //       saveTodo()
        
  //     }, 200);
  // }
  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), random: generateRandomString(5, 'all'), todo, isCompleted: false, timestamp: new Date().getTime(), createdAt: new Date().toLocaleString() }];
    Settodos(newTodos);
    saveTodo(newTodos);  // Updated state pass karein
    settodo("");
  };
  const handleEdit = (e)=>{
    let random = e.target.name
    let update  = todos.filter(item => item.random == random);
      settodo(update[0].todo)
    let newTodos = todos.filter(item => item.random !== random);
      Settodos(newTodos);
      saveTodo()
  }
  const handleCheck = (e)=>{
    let random = e.target.name
    console.log("random",random)
    let index= todos.findIndex(item=>{
      return item.random===random;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted= !newTodos[index].isCompleted
    Settodos(newTodos)
    saveTodo()
    }

  const handleDelete = (e)=>{
    let random = e.target.name
    console.log("random",random)
    let index= todos.findIndex(item=>{
      return item.random===random;
    })
    const isConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (isConfirmed) {
        let newTodos = todos.filter(item => item.random !== random);
        Settodos(newTodos);
    }
    saveTodo()
    }
  

  const handleChange = (e)=>{
    settodo(e.target.value)
  }
  return (
    <>
      <Navbar />
      <div className="main container ml-auto mr-auto">
        <div className="mx-auto rounded-xl my-7 p-2 bg-gradient-to-br  from-purple-600  to-blue-500">
          <h1 className='text-white font-bold text-xl flex justify-center font-sans '>iTask-Manage Your Todo's At One Place</h1>
        </div>
        <div className="addtodo flex">
          <input onChange={handleChange} value={todo} className=" w-full border-2 border-black p-2 rounded-md  focus:border-violet-800 focus:outline-none" type="text" name="name" placeholder='Add a Todo' />

        </div>
        <div className='pt-5'>
          <button  onClick={handleAdd} disabled={todo.length<=3} className=" w-full bg-gradient-to-br ml-auto from-purple-600 to-blue-500 hover:bg-violet-900 disabled:via-violet-700 text-white hover:font-bold transition-all  duration-50 rounded-md  px-2 py-2">Add</button>
        </div>
        <div className="min-h-screen bg-slate-200 mx-auto rounded-2xl my-7">
          <h2 className='text-2xl font-bold flex justify-center pt-3 underline decoration-violet-900'>Your Todo List</h2>
          <div className="main px-7">
            {todos.length===0 && <div className='font-bold flex justify-center mt-6'>No Todos To Display</div>}
            {todos?.map (item=>{
             return <div className="todo-list mt-5  flex items-center">
              <div className='pr-5'>
              <input name={item.random} onChange={handleCheck} id="default-checkbox" type="checkbox" value={todo.isCompleted} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pl-5"></input>
              </div>
              <div className={item.isCompleted?"line-through":""}>
                {item.todo}
              </div>
              <div className='buttons ml-auto flex space-x-2 '>
                {/* <button className='bg-violet-800  font-medium  hover:bg-violet-900 text-white hover:font-bold transition-all  duration-50 rounded-md mx-2 px-2 py-2'>Edit</button> */}
                <button name={item.random} onClick={handleEdit} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
                <button  name={item.random} onClick={handleDelete} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

