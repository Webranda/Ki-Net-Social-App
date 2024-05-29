import React, { useState } from 'react';
import { db } from '../firebase/firebase';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userCollection = db.collection("users");

        userCollection.add({
            email: email,
            password: password,
        }).then((docRef) => {
            console.log('document written with ID:', docRef.id);
        }).catch((err) => {
            console.log('error adding document:', err);
        });

        console.log('Email:', email, 'Password:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
            <p>
                Already have an account? <a href="#">Log in</a>
            </p>
        </form>
    );
}

export default Signup;