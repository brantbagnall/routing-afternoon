import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(e=> {
    this.setState({
      students: e.data
    })
    })
  }

  render() {
    var students= this.state.students;
    students = students.map((e, i)=> (
      <Link key={i} to={`/student/${e.id}`} ><h3 >{e.first_name + ' ' + e.last_name}</h3></Link>
    ))
    return (
      <div className="box">
        <button onClick={(e)=> {
            e.preventDefault();
            this.props.history.goBack();
          }} >Go Back</button>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }
    
}