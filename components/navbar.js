import Link from "next/link";
import styles from '../styles/navbarfoo.module.css'
import { useState } from "react";
export default function Navbar(){
    const [isOpen, setisOpen] = useState(false);
    const openMenu = ()=> {setisOpen(!isOpen);
    console.log("Clicked == " + isOpen)
    }
    return(
        <nav className={styles.nav}>
        <div className={styles.logo}>
        <h1 className={styles.logo}>Hello</h1>
        </div>
        <ul className={isOpen===false ? styles.list : styles.list+' '+styles.active} >
        <li className={styles.items} ><Link href={'Home'}><a>HOME</a></Link></li>
        <li className={styles.items} ><Link href={'Pricing'}><a>PRICING</a></Link></li>
        <li className={styles.items} ><Link href={'Products'}><a>PRODUCTS</a></Link></li>
        <li className={styles.items} ><Link href={'Blog'}><a>BLOG</a></Link></li>
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