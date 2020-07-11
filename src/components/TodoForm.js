import React from 'react';


// //`<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
// - Once a todo is submitted, the Todo List should re-render and show the added todo.

class Form extends React.Component{



        

        
        render(){
            
        return <div>
            <form onSubmit={this.props.submitHandler}>
                <label>
                    New list item: <input placeholder='write a list item...'
                    onChange={this.props.changeHandler}
                    type='text'></input>
                </label>

                <button> add to list</button>
                
            </form>

            <button onClick={this.props.clearCompleted}>clear Completed</button>
            
            
            
            </div>

        }}



export default Form