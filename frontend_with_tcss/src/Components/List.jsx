import React from 'react'
import Item from './Item'

const List = ({updateTodo,deleteTodo,todos}) => {
  return (
    <div className='mt-4 w-1/2 m-auto'>
       {
        todos?.map((item)=>
        <Item 
        key={item.title}
        data={item}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        /> 
        )
       }
    </div>
  )
}

export default List