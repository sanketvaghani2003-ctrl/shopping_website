import axios from 'axios';
import './SignIn.css'
import { useState } from 'react';

const SignIn = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function inputemail(e) {
        setEmail(e.target.value);
    }


    function inputPassword(e) {
        setPassword(e.target.value);
    }


    function handlelogin(e) {
        e.preventDefault();

        let formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);
        
        axios.post("https://studiogo.tech/student/shoppingapi/login.php", formdata, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then((response) => {
            if (response.status == 200) {
                var json = response.data;
                if (json.status == "yes") {
                    sessionStorage.setItem("islogin", "yes");
                    sessionStorage.setItem("user_id", json.userdata.user_id);
                    sessionStorage.setItem("name", json.userdata.name);
                    window.location = "/";
                }
                else {
                    alert(json.message);
                }
            }
        }).catch((error) => {
            console.log("username and password invalid");
        })
    }


    return (<>
        <div className="signIn-page">
            <div className="container">
                <div className="signIn-details">
                    <div className="row">
                        <div className="col-6">
                            <div className="signIn-img-parts">
                                <img src="/signIn/sign_In.png" className="img-fluid signin" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="signIn-content">
                                <h3 className="logos">FASCO</h3>
                                <div className='signIn-part'>
                                    <h3 className='signIn-title '>Sign In To FASCO</h3>
                                    <div className='row'>
                                        <div className="col-6">
                                            <div className='google-signUp d-flex'>
                                                <img src="/signIn/google-img.svg" className='img-fluid google-img' alt="" />
                                                <h4 className='google d-flex  align-items-center justify-content-center'>Sign up with Google</h4>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className='mails-singUp d-flex'>
                                                <img src="/signIn/mail-img.svg" className='img-fluid mail-img' alt="" />
                                                <h4 className='mails d-flex  align-items-center justify-content-center'>Sign up with Google</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='second-option '>
                                    <div className='line'></div>
                                    <h3 className='or'>OR</h3>
                                    <div className='line'></div>
                                </div>

                                <div className='signIn-form'>
                                    <form method='post' onSubmit={handlelogin}>
                                        <div className='form-group'>
                                            <input type="email" name='email' value={email} onChange={inputemail} className="form-control w-100" placeholder='Email' aria-describedby="emailHelp" required ></input>
                                        </div>

                                        <div className='form-group'>
                                            <input type="password" name='password' value={password} onChange={inputPassword} className="form-control w-100" placeholder='Password' aria-describedby="emailHelp" required ></input>
                                        </div>

                                        <button type="submit" className='btn_sign-in'>Sign In</button>
                                        <button type="button" className='btn_register'>Register Now</button>
                                        <h3 className='forget_pass '>Forget Password?</h3>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>{/* end row */}


                </div>

            </div>

        </div>

    </>)
}
export default SignIn;