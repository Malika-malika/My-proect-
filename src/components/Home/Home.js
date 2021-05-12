import React from 'react';
//import Carousel from 'react-material-ui-carousel';
//import Baner from '../Baner/Baner';
import Gifka from '../Gifka/Gifka';
import IphonePro from '../IphonePro/IphonePro';
import MacPro from "../MacPro/MacPro";
import IpadPro from "../IpadPro/IpadPro";
//import Carousel from "../Carousel/Carousel";


const Home = () => {
    return (
        <div>
            <IphonePro/>
            <Gifka/>
            <MacPro/>
            <IpadPro/>
            {/*<Carousel/>*/}
            {/*<Carousel />*/}
            {/*<Baner/>*/}
            
        </div>
    );
};

export default Home;



