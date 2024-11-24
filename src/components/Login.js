import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";


export const Login = () => {
    return (

        <>
            <h1>Login Page</h1>
            <NavLink to='/home'>
                <button type="button" class="btn btn-primary">Button</button>
            </NavLink>
        </>
    );
}