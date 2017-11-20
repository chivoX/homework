import React from 'react';
import UserRow from '../components/UserRow';

export default class ProductTable extends React.Component {

  render() {
    const filterText = this.props.filterText;

    const rows = [];

    this.props.users.forEach((user) => {
      if (user.email.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <UserRow
          user={user}
          key={user.email}
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
