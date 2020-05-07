// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.


import React from 'react'

const Todo = props =>{
    console.log(`todo props`, props)
    
    const handleClick = e => {
        props.toggleCompleted(props.listItem.id);
      };

    return(
        
            <div className={`${props.listItem.finished}`} onClick={handleClick}>{props.listItem.item} finished?{`${props.listItem.finished}`} </div>
        
    )
}

export default Todo;