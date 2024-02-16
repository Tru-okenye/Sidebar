import React, {useContext} from "react";
import {FaTimes} from 'react-icons/fa';
import { links,Socials } from "./Links";
import './App.css';
import { useGlobalContext } from "./Context";
const Sidebar = () => {
    const{showSidebar, closeSidebar} = useGlobalContext()
return (
<aside className={`${showSidebar?' sidebar' : 'display'} `}>
<div >
    <div className="ptn">

<h1>Sidebar</h1>
<button onClick={closeSidebar}>
<FaTimes/>

</button>
    </div>
{
    links.map((item)=> {
        const{id, name, url} = item;
        return(
            <div key={id}> 
            <a href={url}>{name}</a>
            
            </div>

            
        )
    })
}

</div>
<div>
{
    Socials.map((social)=> {
        const{id, link, icon, name} = social;
        return(
            <ul key={id} className='links'> 
            <li>
                {icon}
            <a href={link} >{name}</a>

            </li>
            </ul>

            
        )
    })
}

</div>



</aside>
)
};

export default Sidebar;