import React from "react";
import {NavLink} from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="text-center mt-5">
      <h1>404 Error</h1>
      <h1 className="my-3">We are sorry, Page Not Found</h1>
      <br />
      <NavLink to="/" className="btn btn-outline-primary">Back To Home Page</NavLink>
    </div>
  );
}

export default ErrorPage;
