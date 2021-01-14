import React, { Component } from 'react'



class Reg_Form extends Component {
  render() {
    return (
      <div className="reg_container ">
        <div className="mx-auto reg_form  z-depth-1">
          <div className="title ">
            Registration
          </div>
          <div className="form">
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="First Name" className="form-control rounded-0" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Last Name" className="form-control rounded-0" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Location" className="form-control rounded-0" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="School" className="form-control rounded-0" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Class" className="form-control rounded-0" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Phone Number" className="form-control rounded-0" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Email" className="form-control rounded-0" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Department" className="form-control rounded-0" />
              </div>
            </div>

            <div className="z-depth-0 reg_btn btn text-capitalize rounded-0 mx-auto ralo font-weight-bold border border-danger">
              Register
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Reg_Form