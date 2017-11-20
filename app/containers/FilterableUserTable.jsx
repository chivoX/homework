import React from 'react';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';

export default class FilterableUserTable extends React.Component {

  state = {
    filterText: ""
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <UserTable
          users={this.props.users}
          filterText={this.state.filterText}
        />
      <button type="button" onClick={this.props.onTogglePage} className="btn btn-primary">Create</button>
      </div>
    );
  }
}
