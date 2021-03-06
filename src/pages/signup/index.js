import React from 'react'
// import './login.css'
import img3 from '../../assets/img/img3.png'
import img2 from '../../assets/img/img2.png'
import { Link, useNavigate } from 'react-router-dom'
import { signUpAction } from '../../redux/actions/auth'
import { useDispatch } from "react-redux";
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notify = () =>  toast.success("SigUp Success", {
                position: toast.POSITION.TOP_CENTER,
                autoClose : 2000
            });
    const signUpHandler = (e) => {
        console.log('disini');
        e.preventDefault();
        console.log(e.target);
        const body = {
            email: e.target.email.value,
            username: e.target.name.value,
            password: e.target.password.value,
        };
        console.log(body);
        dispatch(signUpAction(body)).then((result) => {
            console.log('ini ',result.value.data.data);
            notify()
            setTimeout(()=> {
                navigate("/login", { replace: true })
               }, 3000)
        ;

        }).catch((err) => {
            toast.error("Email sudah terdaftar", {
                position: toast.POSITION.TOP_CENTER,
                autoClose : 2000
            });
        });
    };

    return (
        <div className='container-login'>
            <div className='row1-login' style={{ backgroundImage: `url(${img2})` }} ></div>
            <section className='row2-login'>
                <div className="wrap-form">
                    <form className="wraper-form-m" onSubmit={signUpHandler}>
                        <h1 className='text1-login'>Sign Up</h1>
                        <input className="inputLogin" placeholder="Name" name='name' />
                        <input className="inputLogin" placeholder="Email" name='email' />
                        <input className="inputLogin" placeholder="Password" name='password' type='password' />
                        <button className="button1" type='submit'>Sign Up</button>
                        <ToastContainer/>
                        <div className='wrap1'>
                            <div className='line1'></div>
                            <h3 className='text3-login'>Or try another way</h3>
                            <div className='line2'></div>
                        </div>
                        <button className='button2'>
                            <div className='wrap-google'>
                                <img src={img3} className="img-btn" alt='' />
                                <h3 className='text4'>Login with Google</h3>
                            </div>
                        </button>
                        <div className="button3" >
                            <Link className="textbtn3" to={"/login"} >
                                Login
                            </Link>
                        </div>
                    </form>
                </div>

                <footer className="footer">
                    <div className="logo">
                        <div className='circle2'>
                            <div className="circle3"></div>
                        </div>
                    </div>
                    <h3 className='text5'>Plan and book your perfect trip with <br /> expert advice, travel tips for vehicle<br />
                        information from us</h3>
                    <h3 className='text5'>&copy; Vehicle Rental Center. All rights reserved</h3>
                    <div className='line3'></div>
                    <div className='social-media-login'>
                        <i className="fab fa-twitter" style={{ fontSize: '26px' }}></i>
                        <i className="fab fa-facebook-f" style={{ fontSize: '26px' }}></i>
                        <i className="fab fa-instagram" style={{ fontSize: '26px' }}></i>
                        <i className="fab fa-linkedin-in" style={{ fontSize: '26px' }}></i>
                        <i className="fab fa-youtube" style={{ fontSize: '26px' }}></i>
                    </div>
                </footer>
            </section>
        </div>
    )
}

