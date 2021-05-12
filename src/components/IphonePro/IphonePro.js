import React from 'react';
import Video from 'react-responsive-video';
import videoSrc from '../../assets/video/iphone.mp4';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./IphonePro.css";

const IphonePro = () => {
    return (
        <>
        <Link to="/iphone" style={{color: 'black'}}>
            <div className="video">
            <Video 
            className="video"
            mp4={videoSrc}
            objectFit={"cover"}
            />
            </div>
        </Link>
            
        <div className="text">
            <div className="iphone">
                <div className="iphone-12">
                    <h2 className="iphone__tittle">iPhone 12</h2>
                    <p className="iphone__par">From $29.12/mo. for 4 mo. or $699 before trade-in</p>
                    <p className="iphone__par">Buy directly from Apple with special carrier offers</p>
                    <a className="iphone__link">Learn more <ArrowForwardIosIcon/> </a> 
                    <a className="iphone__link">View pricing <ArrowForwardIosIcon/> </a>
                </div>
            </div>
        </div>

        </>
    );
};

export default IphonePro;