import React from 'react'
import './login.css'
import img2 from '../../assets/img/img2.png'
import img3 from '../../assets/img/img3.png'
import { Link, useNavigate } from 'react-router-dom'
import { loginAction } from '../../redux/actions/auth'
import { useDispatch } from "react-redux";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginHandler = (e) => {
        console.log('disini');
        e.preventDefault();  
        console.log(e.target);      
        const body = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        console.log(body);
        // const URL = process.env.REACT_APP_HOST+"/auth/login";
        // axios
        //     .post(URL, body)
        //     .then((response) => {
        //         const token = response.data.data.token;
        //         localStorage.setItem("token", JSON.stringify(token));
        //         navigate("/", { replace: true });
        //     })
        //     .catch((err) => console.error(err));
        dispatch(loginAction(body)).then((result) => {
            console.log('ini ',result.value.data.data);
            const data = result.value.data.data
            localStorage.setItem("token", JSON.stringify(data.token));
            navigate("/", { replace: true });
        }).catch((err) => {
            
        });
    };
    
        return (
            <div className='container-login'>
                <div className='row1-login' style={{ backgroundImage: `url(${img2})` }} ></div>
                <section className='row2-login'>
                    <div className="wrap-form">
                        <form className="wraper-form-m" onSubmit={loginHandler}>
                            <h1 className='text1-login'>Login</h1>
                            <input className="inputLogin" placeholder="email" name="email"  />
                            <input className="inputLogin" placeholder="password"  name="password" type="password" />
                            <button type='submit' className="button1">Login</button>
                            <a href={{}} className='tex2'>Forgot password?</a>
                            <div className='wrap1'>
                                <div className='line1'></div>
                                <p className='text3-login'>Or try another way</p>
                                <div className='line2'></div>

                            </div>
                            <button className='button2'>
                                <div className='wrap-google'>
                                    <img src={img3} className="img-btn" alt='' />
                                    <h3 className='text4'>Login with Google</h3>
                                </div>
                            </button>
                            <div className="button3" >
                                <Link className="textbtn3" to={"/signup"} >
                                    Sign Up
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

    // const mapStateToProps = (state) => {
    //     return {
    //       auth: state.auth,
    //     };
    //   };
      
    //   const mapDispatchToProps = (dispatch) => {
    //     return {
    //       loginDispatch: (body) => {
    //         dispatch(loginAction(body));
    //       },
    //     };
    //   };
      
      export default Login;