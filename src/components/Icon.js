import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvira, faGithub, faJava, faJenkins, faJira, faJs, faLinux, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Icon = () => {

    return(
    <div className="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-20">
    <FontAwesomeIcon icon={faJava} className="text-black text-4xl hover:text-green-900 hover:text" title="Java"/>
    <FontAwesomeIcon icon={faJs} className="text-black text-4xl hover:text-green-900" title="Java Script"/>
    <FontAwesomeIcon icon={faCode} className="text-black text-4xl hover:text-green-900" title="Visual Studio"/>
    <FontAwesomeIcon icon={faGithub} className="text-black text-4xl hover:text-green-900" title="Github"/>
    <FontAwesomeIcon icon={faJenkins} className="text-black text-4xl hover:text-green-900" title="Jenkins"/>
    <FontAwesomeIcon icon={faCloud} className="text-black text-4xl hover:text-green-900" title="Open Telecom Cloud"/>
    <FontAwesomeIcon icon={faLinux} className="text-black text-4xl hover:text-green-900" title="Linux"/>
    <FontAwesomeIcon icon={faPython} className="text-black text-4xl hover:text-green-900" title="Python"/>
    <FontAwesomeIcon icon={faReact} className="text-black text-4xl hover:text-green-900" title="React JS"/>
    <FontAwesomeIcon icon={faEnvira} className="text-black text-4xl hover:text-green-900" title="Spring Boot"/>
    <FontAwesomeIcon icon={faDatabase} className="text-black text-4xl hover:text-green-900" title="Database"/>
    <FontAwesomeIcon icon={faJira} className="text-black text-4xl hover:text-green-900" title="Jira"/>
    </div>
    )};
export default Icon;
