import React from 'react';
import './main.css'
import { ReactComponent as ArrowRight } from '../../assets/svgs/arrow-circle-right-solid.svg';
const Main = (props) => {
    return ( 
       <div className="main-container">
           <div className="main-box">
             <h2>Your Key to Financial Freedom</h2>
             <p>Take charge of your money and secure a brighter financial future with Dr. Garmia Singh, PHD</p>
             <div className="main-start">
               <div className="start1">
               <ArrowRight />
               </div>
              <div>
              <h2  className="start2">
               Let's Begin
             </h2>
              </div>
             
             </div>
            
           </div>

       </div>
     );
}
 
export default Main;