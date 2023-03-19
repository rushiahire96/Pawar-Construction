
import React, { Component } from 'react'
import axios from 'axios';

export default class Contact extends Component {
    constructor() {
        super();
        this.x1 = React.createRef();
        this.x2 = React.createRef();

    }

    myfunt() {
        var email = {
            your_email: this.x1.current.value,
            your_message: this.x2.current.value
        }
        axios.post('http://localhost:8015/products/email-action', email).then((res) => {
            console.log(res.data.msg);
            this.setState({ api: res.data.msg })
        })
    }



    render() {

        return (
            <div className='container'>

                <div className=" row ">
                    <div className='col-xl-6 text-center img-fluid'>
                    
                        <div class="card">
                        <div class="card-body">
                          <h2 class="card-title"><b>PAWAR CONSTRUCTION</b></h2>
                          <h4 class="card-subtitle mb-2 text-muted">ER . GOPAL PAWAR</h4>
                          <h6 class="card-subtitle mb-2 text-muted">Mob. No. - 7773918386</h6>
                          <h6 class="card-subtitle mb-2 text-muted">Email - gopupawar.86@gmail.com</h6>
                          <h6 class="card-subtitle mb-2 text-muted">Address - Pawar Construction, Samarth Nagar, Bhakshi road, Satana Dist-Nashik</h6>
                          <hr></hr>
                          <h6 class="card-subtitle mb-2 text-muted"><b>Register Here For Appointment </b></h6>
                     
                        </div>
                      </div>
                    </div>



                    <div className='col-xl-6 text-center'>
                        <input name="your_email" type="text" ref={this.x1} class="form-control" placeholder="Your Email" />

                        <input name="your_message" type="text" ref={this.x2} class="form-control" placeholder="Name" />


                        <button onClick={() => { this.myfunt() }} class="btn btn-danger">Register </button>

                    </div>



                </div>
            </div>

        )
    }
}

