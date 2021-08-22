import React from "react";
import '../assets/Navbar.css';
import {NavLink} from 'react-router-dom';
import StudentPopUpLogin from './StudentPopUpLogin';
import StudentPopUpRegister from './StudentPopUpRegister';
import TeacherPopUpLogin from './TeacherPopUpLogin';
import TeacherPopUpRegister from './TeacherPopUpRegister';

function NavbarInbuilt(){
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="#">SSJ Intern</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/about">About</NavLink>
              </li>
              <li class="nav-item dropdown">
                <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Register</NavLink>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#registerAsTeacher">Register as Teacher</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#registerAsStudent">Register as Student</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Login
                </NavLink>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#loginAsTeacher">Login as Teacher</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#loginAsStudent">Login as Student</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/courses">Courses</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <TeacherPopUpRegister id="registerAsTeacher" />
      <StudentPopUpLogin  id="loginAsStudent" />
      <StudentPopUpRegister  id="registerAsStudent" />
      <TeacherPopUpLogin  id="loginAsTeacher" />
    </div>
  );
}

export default NavbarInbuilt;
