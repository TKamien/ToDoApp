import React, {Component} from 'react';
import NewTask from './NewTask';
import ListOfTasks from './ListOfTasks';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'skończyć apkę ToDo',
        date: '2019-08-01',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, 
      date,
      important, 
      active: true,
      finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))


    return true
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <NewTask add={this.addTask}/>
        <ListOfTasks tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      
      </div>
    );
  }
}

export default App;

