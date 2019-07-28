import React, {Component} from 'react';
import NewTask from './NewTask';
import ListOfTasks from './ListOfTasks';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>ToDo APP</h1>
        <NewTask/>
        <ListOfTasks/>
      
      </div>
    );
  }
}

export default App;

