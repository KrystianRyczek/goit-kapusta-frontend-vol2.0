import '../css/HomePage.css'
import { Outlet } from "react-router-dom"
import kapusta from '../images/kapusta-svg.svg'
import {useHome} from '../hooks/useHome'

export default function HomePage() {
  const {isLogin} = useHome()
  if(isLogin){
    return(<></>)
  }

  return (
    <div className="home-page-container">
      <div className='home-page-logo-box'>
        <div className='home-page-top-svg-box'>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
        </div>
      </div>
      <div className='home-page-logo'>
        <h1 className='home-page-logo-h'>Kapu$ta</h1>
        <p className='home-page-logo-p'>SMART FINANCE</p>
      </div>
      <div className='home-page-bottom-svg-box'>
        <div>
          <img className="home-page-bottom-svg" src={kapusta}  alt="Kapusta"/>
          <div className='home-page-svg-spot'> </div>
        </div>
        <div>
          <img className="home-page-bottom-svg" src={kapusta}  alt="Kapusta"/>
          <div className='home-page-svg-spot'> </div>
        </div>        

      </div>
      <Outlet/>
    </div>
  );
}
