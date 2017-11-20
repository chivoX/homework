import React from 'react';

export default class PreviewCard extends React.Component {

  render() {
    const {email, firstName, lastName, dob} = this.props

    return(
      <div className="form-preview">
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">First Name: {firstName}</li>
          <li className="list-group-item">Last Name: {lastName} </li>
          <li className="list-group-item">Date Of Birth: {dob}</li>
        </ul>
      </div>
    );
  }
}
