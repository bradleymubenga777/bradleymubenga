import React from 'react'

//Assets
import MongoDB from '../../../assets/images/mongodb-logo.png';
import Express from '../../../assets/images/express-logo.png';
import ReactLogo from '../../../assets/images/React-icon.svg.png';
import NodeJS from '../../../assets/images/nodejs-logo.png';
import GraphQL from '../../../assets/images/graphql-logo.png';

export default function TalkTech() {
    return (
        <section className="py-3">
            <div className="container text-center">
                <h1>Let's Talk Tech</h1>
                <p className="lead">I specilize in the MERN Stack, this consists of MongoDB, MySQL, Express, React and Node.js. I believe that having interpersonal skills is important, so I do my best to communicate effectively, stategise and learn in every situation I find myself in.</p>

                <div className="d-flex justify-content-center">
                    <img className="img-fluid px-2" width="50px" alt="MongoDB" src={MongoDB} />
                    <img className="img-fluid px-2" width="50px" alt="Express" src={Express} />
                    <img className="img-fluid px-2" width="50px" alt="React" src={ReactLogo} />
                    <img className="img-fluid px-2" width="50px" alt="NodeJS" src={NodeJS} />
                    <img className="img-fluid px-2" width="50px" alt="GraphQL" src={GraphQL}/>
                </div>
            </div>
        </section>
    )
}
