import React from 'react';
import UserForm from '../components/UserForm';
import PreviewCard from '../components/PreviewCard';

export default class CreatePage extends React.Component {

  state = {
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
  }

  handleOnChange = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    const json = {};
    json[id] = value;

    this.setState(json);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this._addUser();
    this.props.onTogglePage();
  }

  _addUser = () => {
    const user = {
      id: this.props.users.length + 1,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob
    }
    this.props.addUser(user);
  }


  render() {
    const {email, firstName, lastName, dob} = this.state;
    return (
    <div className="card text-center">
      <div className="card-body">
          <div className="row">
            <div className="col">
              <UserForm onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} />
            </div>
            <div className="col-3">
              <PreviewCard email={email} firstName={firstName} lastName={lastName} dob={dob} />
          </div>
          </div>
      </div>
    </div>
    );
  }
}
