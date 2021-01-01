import React ,{useEffect, useState }from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "../App.css";
import {Spring} from "react-spring/renderprops";
import  Icontiles  from "../components/Icon.js";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function About(){

    const[author,setAuthor] = useState(null);

    useEffect (()=>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage" :image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    },[]);

    if(!author) return<div>Loading...</div>
    return(
        <main className="Layout">

<Spring
            from={{opacity:0,marginTop:-500 }}
            to={{opacity:1,marginTop:0 }}>

                {props=>(
                    <div style={props}>

            <div className="p-10 lg:pt-36 container mx-auto relative">
                <section className="bg-gray-700 rounded-lg shadow-2xl lg:flex p-20">
                <img src ={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name}/>
                <div className="text-lg flex flex-col justify-center">
                <h1 className="cursive text-6xl text-green-300 mb-4">
                    Hey there, I'm {" "}
                <span className="text-green-100">
                    {author.name}
                </span>
                </h1>
                <div className="prose lg:prose-xl text-white">
                <BlockContent blocks={author.bio} projectId=" 2c4qxtuv" dataset="production"/>
                </div>                
                </div>
                </section>
                </div>
                <h3 className="grid cursive text-5xl text-black-700 mb-4 text-lg justify-center">
                Skills
                </h3>
                <div className="p-10 container mx-auto relative">
                <section className="bg-gray-300 rounded-lg shadow-2xl lg:flex p-10">
                <Icontiles/>
                </section>   
                </div>
                </div>
                ) }
            
            </Spring>
            <footer className="bg-white" >Developed by Soumadeep ❤ {"  "} Copyright © 2020, All rights reserved </footer>
        </main>
    );
}