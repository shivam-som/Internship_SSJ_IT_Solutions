import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

const TeacherPopUpLogin = (props) => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginTeacherBtn= async(e)=>{
        e.preventDefault();

        const res = await fetch('/loginTeacher', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }); 
        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("INvalid Credentials");
        }else{
            window.alert("Login Successfull");
            history.push("/");
        }
    }

    return (
        <div>
            <div class="modal fade"  id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                                <img src="https://source.unsplash.com/350x350/?study" alt="" height="100%" width="100%" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Teacher login</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form method="POST">
                                        <div class="mb-3">
                                            <label class="form-label">Email Address</label>
                                            <input type="text" class="form-control" value={email} onChange={(e) =>setEmail(e.target.value)} id="email" name="email" placeholder="Email" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Password</label>
                                            <input type="password" class="form-control" value={password} onChange={(e) =>setPassword(e.target.value)} id="password" name="password" placeholder="Password" />
                                        </div>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="rememberMe" />
                                            <label class="form-check-label" for="rememberMe">Remember me</label>
                                        </div>
                                        <div class="modal-footer d-block">
                                            <p class="float-start">Not yet account <a href="#">Sign Up</a></p>
                                            <button type="submit" class="btn btn-warning float-end" onClick={loginTeacherBtn}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherPopUpLogin;
