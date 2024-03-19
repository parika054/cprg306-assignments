"use client";
import React from 'react';
import { useUserAuth } from './_utils/auth-context';

function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        await gitHubSignIn();
    };

    const handleLogout = async () => {
        await firebaseSignOut();
    };

    if (user) {
        return (
            <div className="flex justify-center items-center h-screen bg-blue-200">
                <div className="text-center bg-black p-8 rounded-lg shadow-lg max-w-sm">
                    <p className="mb-4 text-lg">Authorization went Successful !!! <span className="font-semibold">{user.displayName}</span> ({user.email})</p>
                    <button onClick={handleLogout} className="bg-blue-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Logout
                    </button>
                    <div className="mt-4">
                        <a href="/week-8/shopping-list" className="text-blue-400 hover:text-purple-500">Click here to Go to Shopping List </a>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center items-center h-screen bg-blue-100">
                <div className="text-center p-8 ">
                    <button onClick={handleLogin} className="bg-blue-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login with GitHub
                    </button>
                </div>
            </div>
        );
    }
}

export default LandingPage;