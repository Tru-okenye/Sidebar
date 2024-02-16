import React from "react";
import {FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
 export const links = [
    {
        id:1,
        name:'Home',
        url:'/'
    },
     {
        id:2,
        name:'About',
        url:'/about'
    },
     {
        id:3,
        name:'Projects',
        url:'/projects'
    },
     {
        id:4,
        name:'Skills',
        url:'/skills'
    },
];
 export const Socials = [
    {
        id:1,
        link:"https/twitter.com",
        icon: <FaTwitter />,
        name: 'twitter'
    },
    {
        id:2,
        link:"https/linkedin.com",
        icon: <FaLinkedin />,
        name: 'Linkedin'
    },
    {
        id:3,
        link:"https/instagram.com",
        icon: <FaInstagram />,
        name: 'Instagram'
    },
 ];