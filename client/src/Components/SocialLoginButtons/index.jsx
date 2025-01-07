import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SocialLoginButtons = ({ onFacebookLogin, onGoogleLogin }) => {
    return (
        <div className="social-login text-center mt-4">
            <p>Or sign in with</p>
            <div className="d-flex justify-content-center">
                <button 
                    className="btn btn-outline-primary mx-2"
                    onClick={onFacebookLogin}
                    aria-label="Sign in with Facebook"
                >
                    <FaFacebook /> Facebook
                </button>
                <button 
                    className="btn btn-outline-danger mx-2"
                    onClick={onGoogleLogin}
                    aria-label="Sign in with Google"
                >
                    <FaGoogle /> Google
                </button>
            </div>
        </div>
    );
};

export default SocialLoginButtons;
