"use client"
import Todo from '@/components/Todo'
import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Page = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })
  const [todosData, setTodosData] = useState([]);

  const titleInputRef = useRef(null);
  const descriptionRef = useRef(null);

  // Auto-focus title input on page load
  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  useEffect(() => {
    let mounted = true;

    const loadTodos = async () => {
      try {
        const response = await axios.get("/api");
        if (!mounted) return;
        setTodosData(response.data?.todos ?? []);
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      }
    };

    loadTodos();
    return () => { mounted = false; };
  }, [todosData]);

  const deleteTodo = async (Id) => {
    const response = await axios.delete('/api', {
      params: {
        mongoId: Id
      }
    })
    toast.success(response.data.msg);
  }
  const completeTodo = async (Id) => {
    const response = await axios.put('/api', {}, {
      params: {
        mongoId: Id
      }
    })
    toast.success(response.data.msg);
  }

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({ ...form, [name]: value }));
    // console.log(formData);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validation: Check if fields are empty
    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error("Both fields are required! Please fill in the form.");
      titleInputRef.current?.focus();
      return;
    }

    try {
      const response = await axios.post("/api", formData);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: ""
      })
      titleInputRef.current?.focus();

    } catch (error) {
      toast.error("Error occured!")
    }
  }

  // Handle Enter key in description textarea to submit
  const handleDescriptionKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      onSubmitHandler(e);
    }
  }

  return (
    <>
      <ToastContainer theme='dark' />
      <div className='container mx-auto flex flex-col items-center gap-16 max-h-[85vh] '>
        {/* form */}
        <form onSubmit={onSubmitHandler} className='flex flex-col w-sm md:w-md lg:w-xl px-2 md:px-4 items-start justify-center mt-12 gap-4'>
          <input
            ref={titleInputRef}
            onChange={onChangeHandler}
            value={formData.title}
            type="text"
            name='title'
            placeholder='Enter Task Title'
            className='w-full px-3 py-2 outline-2 outline-green-400/35 rounded-sm'
          />
          <textarea
            ref={descriptionRef}
            onChange={onChangeHandler}
            value={formData.description}
            name="description"
            placeholder='Enter Task Description (Ctrl+Enter to submit)'
            onKeyDown={handleDescriptionKeyDown}
            className='w-full px-3 py-2 h-16 outline-2 outline-green-400/35 rounded-sm'
          />
          <button type="submit" className='px-8 py-2 hover:cursor-pointer bg-green-400/80 rounded-sm'>Add Task</button>
        </form>
        {/* table */}
        <div className="w-sm md:w-xl max-h-100 overflow-y-scroll lg:w-2/3 overflow-x-auto  shadow-xs rounded-md border border-white/75">
          <table className="text-sm w-full text-left rtl:text-right">
            <thead className="text-sm text-body bg-green-400/20 border-b border-default-medium">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Id
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=''>
              {
                todosData.map((todo, index) => {
                  return <Todo key={index} id={index} title={todo.title} description={todo.description} complete={todo.isCompleted} mongoId={todo._id} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default Page
