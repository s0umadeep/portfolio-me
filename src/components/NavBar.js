import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar(){

    return(
        <header className="bg-gray-700">
            <div className="container mx-auto flex justify-around"> 
                <nav className="flex">
                    <NavLink to = "/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-200 text-4xl font-bold cursive tracking-widest" >
                        Home
                    </NavLink>
                    <NavLink to ="/post" 
                    activeClassName="text-red-100 bg-gray-600"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100 text-3xl font-bold cursive">
                        Blogspot
                    </NavLink>
                    <NavLink to = "/project" 
                    activeClassName="text-red-100 bg-gray-600"    
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100  text-3xl font-bold cursive">
                        Projects
                    </NavLink>
                    <NavLink to = "/about" 
                    activeClassName="text-red-100 bg-gray-600"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100 text-3xl font-bold cursive">
                        About Me
                    </NavLink>
                </nav>

                <div className="inline-flex py-3 px-3 my-6"> 
                    <SocialIcon url ="https://github.com/s0umadeep" className ="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url ="https://www.linkedin.com/in/soumadeep-dhar/" className ="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url ="https://www.instagram.com/s0umadeep/" className ="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url ="https://www.quora.com/profile/Soumadeep-Dhar" className ="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>

            </div>
        </header>
    );
}