import React from 'react'
import Navbar from '../../component/molecule/navbar/navbar'
import ButtonComponent from '../../component/molecule/button/button'

export default function Paymentfinish() {
    return (
        <div>
            <Navbar/>
            <div className="jumbotron jumbotron-fgp text-white">
          <div className="wraper-text-fgp">
            <div className="wrap-text-back">
              <a href="/" className="text-a">
                &lt;
              </a>
              <p className="text-back">Back</p>
            </div>
            <div className="wraper-input-fgp">
              <h1 className="">Do’t worry, we got your back!</h1>
              <input
                className="input-fgp "
                placeholder="Enter your email address"
              />
              <ButtonComponent
                type={"send-link btn-total-color1-reservation"}
                text={"Send Link"}
              />
              <p className="text-resend-link">
                You will receive a link to reset your password.
              </p>
              <p >
                If you haven’t received any link, click <a className="text-resend-link2" href="/"> Resend Link</a>
              </p>
            </div>
          </div>
        </div>
        </div>
    )
}
