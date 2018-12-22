import React from 'react'
//import { Redirect } from 'react-router-dom'

class Homepage extends React.Component {
  state = {
    redirectAction: '',
    courses: ['CS137', 'CS129', 'CS489']
  }

  // call the backend for the courses theyre in

  renderChats() {
      const { courses } = this.state;

      var coursesDomElem = [];
      for (var i = 0; i < courses.length; i++) {
          coursesDomElem.push(<li key={i}> {courses[i]} </li>)
      }
      return coursesDomElem;
   }
  
  render() {
    return (
      <div>
        <ul>
            {this.renderChats()}
        </ul>
      </div>
    )
  }
}
export default Homepage