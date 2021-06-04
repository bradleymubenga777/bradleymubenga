//REACT Modules
import React from 'react'

//Assets
import MongoDB from '../../../assets/images/mongodb-logo.png';
import Express from '../../../assets/images/express-logo.png';
import ReactLogo from '../../../assets/images/React-icon.svg.png';
import NodeJS from '../../../assets/images/nodejs-logo.png';
import GraphQL from '../../../assets/images/graphql-logo.png';

//SCSS
import '../../../scss/talkTech.scss';

export default function TalkTech() {
    return (
        <section className="py-5 talkTech">
            <div className="container text-center">
                <h1>Let's Talk Tech</h1>
                <p className="lead">I specilize in the MERNG Stack, this consists of <span className="boldThing">MongoDB, MySQL, Express, React, Node.js, GraphQL {'&'} Apollo</span>. I believe that having <span className="boldThing">interpersonal skills</span> is important, so I do my best to <span className="boldThing">communicate effectively, stategise and learn</span> in every situation I find myself in.</p>

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
