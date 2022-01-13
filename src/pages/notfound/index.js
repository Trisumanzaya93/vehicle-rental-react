import React, { Component } from 'react'
import notfound from '../../assets/img/notfound.png'

export default class Notfound extends Component {
    render() {
        return (
            <div>
                <div className='container w-100% d-flex flex-column justify-content-center align-items-center'>
                    <img src={notfound} style={{'width':"50%"}} alt='' />
                    <div style={{fontSize:"30px"}} >
                        Silahkan kembali ke halaman <br/>
                        <a style={{marginLeft:"150px"}} href='/'>Home</a>
                    </div>
                </div>
            </div>
        )
    }
}
