import React,{useState} from 'react';
import {db} from "./firebase";
import "../ContactForm.css";

const Contact = () => {
    const[name,SetName] = useState(null);
    const[email,SetEmail] = useState(null);
    const[message,SetMessage] = useState(null);

    const HandleSubmit = (e) => {
        e.preventDefault();
        db.collection("contacts")
        .add({
            name:name,
            email:email,
            message:message,
        })
        .then(() =>{
            alert("Thank you for your message !!");
        })
        .catch(error => {
            alert(error.message);
        });
        SetName('');
        SetMessage('');
        SetEmail('');
    };

    return (
        <form className="bg-gray-200 rounded-lg shadow-2xl p-20 form" onSubmit={HandleSubmit}>           
            <label className="text-3xl text-white-100 font-bold cursive">Name</label>
            <input placeholder="Name" value={name} onChange={(e) => SetName(e.target.value)}/>

            <label className="text-3xl text-white-100 font-bold cursive">Email</label>
            <input placeholder="Email" value={email} onChange={(e) => SetEmail(e.target.value)}/>

            <label className="text-3xl text-white-100 font-bold cursive">Message</label>
            <textarea placeholder="Message" value={message} onChange={(e) => SetMessage(e.target.value)}/>

            <button type="submit" className="text-3xl text-white-100 font-bold cursive">Submit</button>

        </form>
            
        
    )
}

export default Contact;
