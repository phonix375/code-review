import React from 'react';
import "./donation.css"
import { FaBorderNone } from "react-icons/fa"
import { SiBuymeacoffee } from "react-icons/si"
import {VscSmiley} from "react-icons/vsc"




function DonationPage() {
    return (
        <div className="donatebox">
            <h1>Please consider Donating to support further development of this website and its concepts. Thank you.</h1>
            
            <a className="donationmodal" href="#"><SiBuymeacoffee size={55} color=" #c3e7ff" /> Buy Me A Coffee
            </a>
            
        </div>
    )
}
export default DonationPage;


