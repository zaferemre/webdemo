import React from 'react';
import About from './About';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 mt-5">
                            <h1 className="display-3 fw-bolder mb-4 text-center">Welcome to our new website!</h1>
                            <p className="lead text-center fs-3 mb-4 ">From now on we are going to be using this website as a better alternative for tracking our business activities
                                please make sure you have regitered your account and ready to learn to use our website
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4 mb-5 rounded-pill px-4 py-2">Register</button>
                                <button className="btn btn-light me-4 mb-5 rounded-pill px-4 py-2">How to use</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>


    );
}

export default Home;
