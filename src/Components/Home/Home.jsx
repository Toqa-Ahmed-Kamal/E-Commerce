import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import FirstCom from './FirstCom';
import SecondCom from './SecondCom';
import ThirdCom from './ThirdCom';
import FourthCom from './FourthCom';
import Testimonials from './Testimonials';
import Instagram from './Instagram';
import FifthCom from './FifthCom';


export default function Home(){
    const location = useLocation();
    const fifthRef = useRef(null);

    useEffect(() => {
        // If navigation requested scroll to fifth, or there's a hash
        const state = location.state || {};
        if (state.scrollTo === 'fifth' || location.hash === '#fifth') {
            // small timeout to ensure element is mounted
            setTimeout(() => {
                if (fifthRef.current) {
                    fifthRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 50);
        }
    }, [location]);

    useEffect(() => {
        const handler = (e) => {
            setTimeout(() => {
                if (fifthRef.current) {
                    fifthRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 50);
        };
        window.addEventListener('scrollToFifth', handler);
        return () => window.removeEventListener('scrollToFifth', handler);
    }, []);

    return <>
        <FirstCom/>
        <SecondCom/>
        <ThirdCom/>
        <FourthCom/>
        <div id="fifth-section" ref={fifthRef}>
            <FifthCom/>
        </div>
        <Testimonials/>
        <Instagram/>
    </>
}