import axios from 'axios';
import './SignUp.css'
import { useState } from 'react';

const SignUp = () => {

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputName = (e) => {
        setName(e.target.value)
    }
    const inputContact = (e) => {
        setContact(e.target.value)
    }
    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    // const [formData, setFormData] = useState({
    //     name: "",
    //     contact: "",
    //     email: "",
    //     password: "",
    // });


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };


    function handleSubmit(e) {
        e.preventDefault();
        // console.log('Form Data:', formData);

        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("contact", contact);

        axios.post("https://studiogo.tech/student/shoppingapi/register.php", formData, {

            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((response) => {
            if (response.status == 200) {
                alert("seccessful!");
            }
        }).catch((error) => {
            console.log("fail", error);
        })
    }


    return (<>

        <section className='SignUp-page'>
            <div className='container'>
                <div className='signUp-details'>
                    <div className="row">
                        <div className="col-6">
                            <div className="signIn-img-parts">
                                <img src="/signUp/sign_Up.png" className="img-fluid signup" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='signUp-content'>
                                <h3 className="logos">FASCO</h3>
                                <div className='signUp-part'>
                                    <h3 className='signIn-title '>Create Account</h3>
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

                                <form className='form' method='submit' onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-6">
                                            {/* name */}
                                            <div className='form-group'>
                                                <input type="text" name='name' value={name} onChange={inputName} className="form-control w-100" placeholder='First Name' required ></input>
                                            </div>
                                            {/* email */}
                                            <div className='form-group'>
                                                <input type="text" name='email' value={email} onChange={inputEmail} className="form-control w-100" placeholder='Email Address' required ></input>
                                            </div>
                                            {/* password */}
                                            <div className='form-group'>
                                                <input type="password" name='password' value={password} onChange={inputPassword} className="form-control w-100" placeholder='Password' required ></input>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            {/* contact */}
                                            <div className='form-group'>
                                                <input type="text" name='contact' value={contact} onChange={inputContact} className="form-control w-100" placeholder='Phone Number' required ></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* btn */}
                                    <button type="submit" className='btn_acc_create'>Create Account</button>
                                    <h4 className='msg-link'>Already have an account? <span> <a href="/signIn" >Login</a></span></h4>
                                </form>
                                <h3 className='fasco-terms'>FASCO Terms & conditions</h3>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    </>)

}

export default SignUp;