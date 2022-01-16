import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import caro from '../../images/caro.jpg'
import caro1 from '../../images/caro1.jpg'
import caro2 from '../../images/caro2.jpg'
import caro3 from '../../images/caro3.jpg'
import { Carousel, NavLink } from 'react-bootstrap';
import  Aos  from 'aos';
import "./Caro.css"
import Notification from "./Notification";

const Caro = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });

    
  }, []);
  
  return (
    
   <>
     <img src={caro3} alt="pic" className="dede" />
     <div className='boad' >
     <div class="toggle" onclick="toggleMenu()"> </div>
       <h2 className='logos'> <Link to="/" className='carolink'>RoadMaster</Link> </h2>
       <ul className='ul' data-aos="zoom-out-right">
         <li><Link to="/boad" className='carolinks'>Dashboad</Link></li>
         <li ><Link to="/new" className='carolinks'>NewComplians</Link></li>
         <li ><Link to="/news" className='carolinks'>News</Link></li>
         <li ><Link to="/signup" className='carolinks'>Login</Link></li>
        
       </ul>
     </div>
     <div className='content' data-aos="flip-left" >
       <div className='container' >
             <h1 className='ring'> Road Traffic</h1>
             <p>Road traffic accidents remain a major public health and development 
             challenge in Ghana. They are among the top 10 causes of deaths, draining 2.54% of its gross domestic product annually. Some recent reports suggest that between January and July 2021, about 8 deaths and 43 injuries were recorded daily on Ghana’s roads.</p>
       </div>
     </div>
    
   </>
  );
}

export default Caro;
