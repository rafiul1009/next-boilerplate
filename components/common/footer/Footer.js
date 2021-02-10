import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { baseUrl } from '../../../config/config';

const Footer = () => {

    const [showScroll, setShowScroll] = useState(false);
    
    const addDefaultSrc = (e, name) => {
        switch (name) {
            case 'logo':
                e.target.src = baseUrl + '/static/img/logo.svg'
                break;
            default:
                e.target.src = baseUrl + '/images/product-placeholder.png'
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const checkScrollTop = () => {
        if (window.pageYOffset > 200) {
            setShowScroll(true);
        } else if (window.pageYOffset <= 200) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowScroll(false);
    };

    return (
        <footer>
            <button type="button" className={`scroll-to-top ${showScroll ? 'active' : ''}`} onClick={scrollTop}><i className="fas fa-long-arrow-alt-up"></i></button>
        </footer>
    );
};

export default Footer;