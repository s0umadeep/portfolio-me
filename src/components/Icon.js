import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvira, faGithub, faJava, faJenkins, faJira, faJs, faLinux, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Icon = () => {

    return(
    <div className="grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-20 mb-2">
    <FontAwesomeIcon icon={faJava} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faJs} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faCode} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faGithub} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faJenkins} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faCloud} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faLinux} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faPython} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faReact} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faEnvira} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faDatabase} className="text-black text-4xl"/>
    <FontAwesomeIcon icon={faJira} className="text-black text-4xl"/>
    </div>
    )};
export default Icon;
