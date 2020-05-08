// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'


//`<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

const List = props =>{
   console.log(`listprops`,props)
    return(
        <div>{props.todoList.map(item => 
            <Todo key={item.id} toggleCompleted={props.toggleCompleted} listItem={item}/>)}</div>

        
        )}


export default List;