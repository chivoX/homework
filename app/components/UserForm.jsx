import React from 'react';

export default class UserForm extends React.Component {

  render() {
    const {onChange, onSubmit} = this.props;
    return (
            <form onSubmit={onSubmit}>
              <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
      <input type="email" onChange={onChange} className="form-control" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputFirstName3" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                  <input type="text" onChange={onChange} className="form-control" id="firstName" placeholder="First Name"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputLastName3" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                  <input type="text" onChange={onChange} className="form-control" id="lastName" placeholder="Last Name"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputDOB3" className="col-sm-2 col-form-label">Date Of Birth</label>
                <div className="col-sm-10">
                  <input type="text" onChange={onChange} className="form-control" id="dob" placeholder="Date of Birth"/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Create</button>
                </div>
              </div>
            </form>
    );
  }
}
