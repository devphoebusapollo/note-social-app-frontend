import React from 'react';

export default function Signup() {
    return (
        <div className="signup-container">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <input type="password" placeholder="Re-enter Password" required/>
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="Province"/>
                <input type="text" placeholder="Country"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}