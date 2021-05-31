//React Modules
import React from 'react';

//SCSS
import '../../../scss/startProject.scss';

//Components
import { FormSubmitButton } from '../../../components/buttons/buttons';

export default function StartProject() {
    return (
        <section className="py-4 my-5">
            <div className="container">
                <div className="row py-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center heading">
                        <h1 className="m-0 pb-0">Let's Start A Project</h1>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="mx-5 formStyle py-3">
                            <form className="d-flex flex-column">
                                <label className="mb-0 mt-2">Name</label>
                                <input type="name" name="" id="" />

                                <label className="mb-0 mt-2">Email</label>
                                <input type="email" name="" id="" />

                                <label className="mb-0 mt-2">Phone number</label>
                                <input type="tel" name="" id="" />

                                <label className="mb-0 mt-2">How can I help you?</label>
                                <select name="" id="">
                                    <option value="" defaultValue>Choose</option>
                                    <option value="" >Choose</option>
                                    <option value="" >Choose</option>
                                </select>
                                
                                <label className="mb-0 mt-2">What is your budget?</label>
                                <select name="" id="" className="mb-4">
                                    <option value="" defaultValue>Choose</option>
                                    <option value="" >R7 000 - R10 000</option>
                                    <option value="" >R10 000 - R15 000</option>
                                    <option value="" >More than R15 000</option>
                                </select>

                                <FormSubmitButton />
                            </form>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center contactMethods">
                                    <ul>
                                        <li className="lead"><a href="tel:0678151282"><i className="fas fa-phone"></i> 067 815 1282</a></li>
                                        <li className="my-2 lead"><a href="mailto:brad@bradleymubenga.co.za"><i className="fas fa-envelope-open-text"></i>     brad@bradleymubenga.co.za</a></li>
                                        <li className="lead"><a href="/"><i className="fas fa-map-marker-alt"></i> Cape Town, South Africa</a></li>
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
