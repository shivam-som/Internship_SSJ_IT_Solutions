import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const StudentPopUpRegister = (props) => {

    const history = useHistory();

    const [student, setStudent] = useState({
        name:"", standard:"", location:"", email:"", password:"", cpassword:""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setStudent({...student, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, standard, location, email ,password ,cpassword} = student;

        const res = await fetch("/registerAsStudent", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, standard, location, email ,password ,cpassword
            })
        });
        const data = await res.json();

        if(data.status===422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successful");
            console.log("Registration Successful");

            history.push("/");
        }
    }

    return (
        <div>
            <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                                <img src="https://source.unsplash.com/350x500/?computer" alt="" height="100%" width="100%" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Student Register</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form method="POST">
                                        <div class="mb-2">
                                            <label class="form-label">Name</label>
                                            <input type="text" class="form-control" value={student.name} onChange={handleInputs} id="name" name="name" placeholder="Username" required />
                                        </div>
                                        <div class="mb-2">
                                            <label class="form-label">Email Address</label>
                                            <input type="text" class="form-control" value={student.email} onChange={handleInputs} id="email" name="email" placeholder="E-Mail" />
                                        </div>
                                        <div className="row">
                                        <div class="mb-2 col-6">
                                            <label class="form-label">Standard</label>
                                            <input type="text" class="form-control" value={student.standard} onChange={handleInputs} id="standard" name="standard" placeholder="Enter Class" />
                                        </div>
                                        <div class="mb-2 col-6">
                                            <label class="form-label">Location</label>
                                            <input type="text" class="form-control" value={student.location} onChange={handleInputs} id="location" name="location" placeholder="Location" />
                                        </div>
                                        </div>
                                        <div class="mb-2">
                                            <label class="form-label">Password</label>
                                            <input type="password" class="form-control" value={student.password} onChange={handleInputs} id="password" name="password" placeholder="Password" />
                                        </div>
                                        <div class="mb-2">
                                            <label class="form-label">Confirm Password</label>
                                            <input type="password" class="form-control" value={student.cpassword} onChange={handleInputs} id="cpassword" name="cpassword" placeholder="Confirm Password" />
                                        </div>
                                        <div class="mb-2 form-check">
                                            <input type="checkbox" class="form-check-input" id="rememberMe" />
                                            <label class="form-check-label" for="rememberMe">Remember me</label>
                                        </div>
                                        <div class="modal-footer d-block">
                                            <p class="float-start">Have an account <a href="#">Sign In</a></p>
                                            <button type="submit" class="btn btn-warning float-end" onClick={PostData}>Submit</button>
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

export default StudentPopUpRegister;
