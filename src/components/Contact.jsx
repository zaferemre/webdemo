import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact</h3>
                            <h1 className="display-6 text-center mb-4">
                                Want To <b>Join</b> Us?
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                        <div className="row">
                            <img src="assets/Contact.PNG" alt="" className="col-md-4 mb-5" />
                            <div className="col-md-6">
                                <div class="mb-3 mt-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                    <input type="email" class="form-control" id="name" placeholder="John Smith" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Please tell us about yourself.</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-dark mb-4">
                                    Send Message <i className="fa fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
