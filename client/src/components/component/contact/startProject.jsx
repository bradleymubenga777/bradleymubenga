//React Modules
import React from 'react';

//SCSS

//Components

export default function StartProject() {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center py-3">
                        <h1>Let's Start A Project</h1>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div>
                            <form className="d-flex flex-column">

                                <label for="name" className="mb-0 mt-2">Name</label>
                                <input type="name" name="" id="" />

                                <label for="name" className="mb-0 mt-2">Email</label>
                                <input type="email" name="" id="" />

                                <label for="name" className="mb-0 mt-2">Phone number</label>
                                <input type="tel" name="" id="" />

                                <label for="name" className="mb-0 mt-2">How can I help you?</label>
                                <select name="" id="">
                                    <option value="" defaultValue>Choose</option>
                                    <option value="" >Choose</option>
                                    <option value="" >Choose</option>
                                </select>
                                
                                <label for="name" className="mb-0 mt-2">What is your budget?</label>
                                <select name="" id="">
                                    <option value="" defaultValue>Choose</option>
                                    <option value="" >R5 000 - R7 000</option>
                                    <option value="" >R7 000 - R15 000</option>
                                    <option value="" >More than R15 000</option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <ul>
                                        <li>067 815 1282</li>
                                        <li>brad@bradleymubenga.co.za</li>
                                        <li>Cape Town, South Africa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
