import React from "react";
import "../App.css";
export default function Home(){

    return(
        <main className="Layout" >
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className =" text-4xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"> Hey there, I'm Soumadeep </h1>
            </section>
            <footer className="bg-white">Developed by Soumadeep ❤ </footer>
        </main>
    );
}