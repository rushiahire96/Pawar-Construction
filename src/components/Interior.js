import React, { Component } from 'react'
import axios from 'axios';
import fileDownload from 'js-file-download';

export default class Interior extends Component {
    constructor() {
        super();
        this.state = {
            api: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8015/products/interior').then((res) => {
            console.log(res.data.msg);
            this.setState({ api: res.data.msg })
        })
    }

    handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }

    render() {
        const APIVALUE = this.state.api;
        console.log(APIVALUE);
        return (
            <div className='container'>
                <h1><b>Interior</b></h1>
                <div className='row'>{
                    APIVALUE.map((Obj)=>
                        <div className='col-xl-6 text-center'>
                            
                            <img src={`http://localhost:8015/uploads1/${Obj.path}`} width="580" height="480"   alt="Product Image" />
                            <h3 class="text-center " >Name: {Obj.name}</h3>
                            
                            <h4>Size:{Obj.size}</h4>
                            
                            <p className='text-center'>
                                <button class="btn btn-success">Add To Cart</button>
                            </p> 
                        </div>
                    )
                }

            </div>
            </div>

        )
    }
}

