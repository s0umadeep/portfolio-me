import React,{useState,useEffect}from "react";
import "../App.css"

function  Tweet(props) {

useEffect(()=>{
    getImage()
},[]);
  
const [imageDetail,setImage]=useState();

    const getImage = async () =>{
        const imageResponse = await fetch (`https://randomuser.me/api`);
        const imagejson = await imageResponse.json();
        console.log(imagejson.results[0]);
        setImage(imagejson.results[0].picture.large)
    }

    console.log("Tweet component has been hit ...")
    return(
        <body>
        <img className= "Profile-image" src={imageDetail} alt="" ></img>
        </body>
    );
}

export default Tweet;