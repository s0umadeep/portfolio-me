import React,{useState,useEffect} from "react";
import "../App.css";
import {Spring} from "react-spring/renderprops";
import Contact from "../components/contact.js";

export default function Home(){

    const[visit,setVisit] = useState();

    useEffect(()=>{
        getVisit();
    },[]);

    const getVisit = async()=> {
        const data = await fetch('https://api.countapi.xyz/update/soumadeep.netlify.app/1f1072f5-dd48-4ce8-96ff-ef792dfe7d4c/?amount=1')
        const visitjson = await data.json();
        console.log(data);
        setVisit(visitjson.value);
    };


    return(
        <main className="Layout" >
            <section className="relative flex justify-center pt-12 lg:pt-60 px-8">
            <Spring
            from={{opacity:0,marginTop:-500 }}
            to={{opacity:1,marginTop:0 }}>

                {props=>(
                    <div style={props}>
                    <h1 className =" text-4xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"> Hey there, I'm Soumadeep </h1>
                    <p className =" text-3xl text-green-100 font-bold pl-10 ml-2 cursive leading-none lg:leading-snug ">Thanks for visiting my website, Please navigate through the links to know more...</p>
                    <p className =" text-3xl text-green-100 font-bold pl-10 ml-2 cursive leading-none lg:leading-snug  " > Visitor count : {visit} </p>
                    </div>    
                ) }
            </Spring>
            </section>
            <div className="grid p-12 mx-auto pt-12  justify-center my-auto container relative">
            <Contact/> 
            </div> 
            <footer className="bg-white" >Developed by Soumadeep ❤ </footer>
        </main>
    );

}