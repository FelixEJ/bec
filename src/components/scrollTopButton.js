import React, { useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './scrollTopButton.css';

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <span id="scrollTop" style={{display: visible ? 'block' : 'none'}}>
            <FaArrowCircleUp onClick={scrollToTop}
            style={{display: visible ? 'inline' : 'none'}} />
        </span>
    );
}

export default ScrollTopButton;