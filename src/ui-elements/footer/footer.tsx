import React from 'react';
import './footer.scss'
import { useLocation } from 'react-router-dom';

type FooterProps = {
    isShown?: string
};

const Footer:React.FC<FooterProps> = ({isShown}) => {
    const location = useLocation();
    console.log("pathname: ", location.pathname)
    
    return (
        <div className={`footer ${location.pathname === "/login" || location.pathname === "/signUp" ? "hide" : ""}`}>
            Footer
        </div>
    )
}
export default Footer;