import React, { Component } from 'react';
import './project2.css';

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://i.pinimg.com/originals/31/31/f8/3131f8e88091be610e852aa49868ba26.jpg" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}
