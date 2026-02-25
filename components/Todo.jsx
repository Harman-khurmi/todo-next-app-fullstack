import { CircleCheckBig, Trash2 } from 'lucide-react'
import React from 'react'

const Todo = ({ id, title, description, complete, mongoId, deleteTodo, completeTodo }) => {

    return (
        <>
            <tr className="border-b border-white-75 hover:bg-green-800/5">
                <th scope="row" className={`px-6 py-4 font-medium text-heading whitespace-nowrap ${complete ? "line-through opacity-60" : ""}`}>
                    {id + 1}
                </th>
                <td className={`px-6 py-4 ${complete ? "line-through opacity-60" : ""}`}>
                    {title}
                </td>
                <td className={`px-6 py-4 ${complete ? "line-through opacity-60" : ""}`}>
                    {description}
                </td>
                <td className="px-6 py-4">
                    <span className={` p-2 px-4 rounded-md ${complete ? "bg-green-800/25 text-white" : "bg-slate-200/25 text-white"}`}>
                        {complete ? "completed" : "pending"}
                    </span>
                </td>
                <td className="px-6 py-4 text-left ">
                    <button className='hover:cursor-pointer items-center justify-center flex gap-3'>
                        {!complete && <CircleCheckBig onClick={() => completeTodo(mongoId)} size={20} strokeWidth={1.2} className='text-green-400 hover:text-green-600' />}
                        <Trash2 onClick={() => deleteTodo(mongoId)} size={20} strokeWidth={1.2} className='text-red-500 hover:text-red-700' />
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Todo
