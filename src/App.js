import React from 'react';
import Form from './components/TodoForm'
import List from './components/TodoList'


// //<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`.

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
      this.state={
        formData:'',
        todoList:[{
          item:'sample item 1',
          finished:false,
          id:123
        }]
      }
    }
  
    changeHandler = e =>{
      e.preventDefault();
      this.setState({
        formData: e.target.value}
        )
        console.log(this.state.formData)
  }

    submitHandler = e =>{
      e.preventDefault();

      this.setState({
        todoList:[...this.state.todoList, {
          item:this.state.formData,
          finished:false,
          id:Date.now()
        } ]}
         
      )
      console.log(this.state.todoList)
    }
    
    clearCompleted = () =>{
      this.setState({
        todoList: this.state.todoList.filter(item => {
          return !item.finished;
        })
      })
    }

    toggleCompleted = itemId => {
      
      this.setState({
        todoList: this.state.todoList.map(item => {
          if (itemId === item.id) {
            return {
              ...item,
              finished: !item.finished
            };
          }
          return item;
        })
      });
    }
  
    
    
  render() {
    return (
      <div>
        {/* <Todo setCompleted={setCompleted}/> */}
        <Form  clearCompleted={this.clearCompleted} state={this.state.formData} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        <List toggleCompleted={this.toggleCompleted} todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
