import React from 'react';
import CreatePage from '../containers/CreatePage';
import FilterableUserTable from '../containers/FilterableUserTable';

export default class App extends React.Component {

  state = {
    displayCreate: false,
    displayIndex: true,
    users: [
            {id: 1, email: "test@email.com", firstName: "Pepe", lastName: "Locuaz", dob: "02/02/1984"},
            {id: 2, email: "guj@email.com", firstName: "Tete", lastName: "Jjaja", dob: "02/02/1984"}
           ]
  }

  _handleTogglePages = () => {
    this.setState({
      displayCreate: !this.state.displayCreate,
      displayIndex: !this.state.displayIndex
    });
  }

  _handleDisplayPages = (create, index) => {
    const displayCreate = create;
    const displayIndex = index;

    if (displayCreate) {
      return <CreatePage onTogglePage={this._handleTogglePages} users={this.state.users} addUser={this._handleAddUser} />;
    } else if (displayIndex) {
      return <FilterableUserTable users={this.state.users} onTogglePage={this._handleTogglePages} />;
    }
  }

  _handleAddUser = (user) => {
    this.setState({users: this.state.users.concat([user]) });
  }


  render() {
    const {displayCreate, displayIndex} = this.state;
    return (
      <div>
      {this._handleDisplayPages(displayCreate, displayIndex)}
      </div>
    );
  }
}
