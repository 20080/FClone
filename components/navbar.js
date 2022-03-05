import Link from "next/link";
import styles from '../styles/navbarfoo.module.css'
import { useState, useEffect } from "react";
export default function Navbar(){
    const [isOpen, setisOpen] = useState(false);
    const [st,setst] = useState(0);
    const [temp,setTemp] = useState(0);
    const [dir,setDir] = useState(false);
    const openMenu = ()=> {setisOpen(!isOpen);
    console.log("Clicked == " + isOpen)
    }

const handleScroll = () => {
    // console.log("scrolling");
    setst(window.pageYOffset);
   
    if(st>temp){
        console.log("up");
        setDir(true);
    }
    else{
        console.log("down");
        setDir(false);
    }
    setTemp(st);
}
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
    return(
        <nav className={dir===false ? styles.nav : styles.nav+' '+styles.scroll}>
        <div className={styles.logo}>
        <h1 className={styles.logo}>Hello</h1>
        </div>
        <ul className={isOpen===false ? styles.list : styles.list+' '+styles.active} >
        <li className={styles.items} ><Link href={'/Home'}><a>HOME</a></Link></li>
        <li className={styles.items} ><Link href={'/Pricing'}><a>PRICING</a></Link></li>
        <li className={styles.items} ><Link href={'/Products'}><a>PRODUCTS</a></Link></li>
        <li className={styles.items} ><Link href={'/Blog'}><a>BLOG</a></Link></li>
        <li className={styles.items} ><button className="small-button">LOGIN</button></li>
        <li className={styles.items} ><button className="small-button">GET STARTED</button></li>
        </ul>

        <button className ={isOpen===false ? styles.burger : styles.burger+' '+styles.active }
        onClick={openMenu}
        >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
        </nav>
    )
}