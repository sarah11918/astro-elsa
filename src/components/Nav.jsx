import React from 'react'
import styles from '../styles/nav.css';


const Nav = () => {
    //const get = element => document.getElementbyId(element);

// let open = document.getElementbyId("menu=btn");
// let nav = document.getElementbyId("nav");
// let exit = document.getElementbyId("exit-btn");

// open.addEventListener("click", () => {
//   nav.classList.add("open-nav");
// })

// exit.addEventListener("click", () => {
//   nav.classList.remove("open-nav");
// })

    return(
        <header>
                
            <a href="/" class="logo">Company</a>
            
            <svg height="32px" id="menu-btn" class="open" viewBox="0 0 32 32" >
                <path fill="white" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" onClick="alert('You have clicked the open.')"/>
            </svg>
            
            <nav id="nav">
                <svg viewBox="0 0 24 24" id="exit-btn" class="exit">
                    <path id="exit" fill="white" d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" onClick="alert('You have clicked the exit.')"/>
                </svg>
                
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/blog/">Blog</a></li>
                    <li><a href="/form/">React form</a></li>
                    <li><a href="data-fetching">Data Fetching</a></li>
                </ul>
            </nav>
            
        </header>
    )
}
    
 export default Nav;       
        
        
