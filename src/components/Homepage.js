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
          coursesDomElem.push(<div key={i} style={{margin: "20px 20px 20px 0px"}}> 
                {courses[i]} 
            </div>)
      }
      return coursesDomElem;
   }
  
  render() {
    return (
      <div class="" style={{
          paddingLeft: 10,
          border: "3px solid #ccc",
          borderRadius: 16
      }}>
      <div>
        <h1> Chats </h1>
        <div >
            {this.renderChats()}
        </div>
      </div>
      </div>
    )
  }
}
export default Homepage