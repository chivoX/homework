import React from 'react';

export default class UserRow extends React.Component {
  render() {
    const user = this.props.user;

    return (
      <tr>
        <td>{user.email}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.dob}</td>
      </tr>
    );
  }
}
