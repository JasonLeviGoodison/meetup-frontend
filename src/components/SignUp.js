import React from 'react'
import { Redirect } from 'react-router-dom'
import { updateCourses as updateCoursesAPI} from '../util/WebRequests'

class SignUp extends React.Component {
  state = {
    redirectAction: '',
    result: false,
    courses: ['CS137', 'CS129', 'CS489'],
    userID: '123',
    sessionId: ''
  }

  constructor(props) {
    super(props);
    this.updateCourses = this.updateCourses.bind(this);
  }

  validateProps(props) {
    //TODO call to fb graph check email/name/connected
  }

  renderRedirect() {
    const { redirectAction, result } = this.state;

    if (redirectAction === 'UPDATE_COURSES' && result) {
      return <Redirect to={{
        pathname: '/homepage',
        state: { userId: '123', sessionToken: 'TODO'}
      }} />
    }
  }

  updateCourses() {
    const {
      courses = [],
      accessToken,
      userID,
      sessionId = '' 
    } = this.state;

    updateCoursesAPI({courses, accessToken, userID, sessionId})
      .then(function(result) {
        console.log(result);
      });

  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <ul>
          <li>CS137</li>
          <li>CS129</li>
        </ul>
        <button onClick={this.updateCourses}> Save courses </button>
      </div>
    )
  }
}
export default SignUp