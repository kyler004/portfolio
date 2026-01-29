import React, {useEffect, useRef, useState} from 'react';
import {
  Code2,
  Database,
  Layers,
  Terminal,
  Rocket,
  Gamepad2,
  Heart,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export default function App() {
    const heroRef = useRef<HTMLDivElement>(null); 
    const timelineRef = useRef<HTMLDivElement>(null); 
    const projectsRef = useRef<HTMLDivElement>(null); 
    const skillsRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        //Animations
        const obeserverOptions = {
            threshold: 0.1, 
            rootMargin: '0px 0px -100px 0px'
        }; 

        
    })
    return (
        <div>
            <div>Portfolio</div>
        </div>
    )
}