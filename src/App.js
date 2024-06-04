import MediaQuery from 'react-responsive';
import MobileHero from './Slides/Mobile/HeroSlide/Hero'
import DeskHero from './Slides/Desktop/HeroSlide/Hero'

import './App.css';
import MyWorkCard from './Slides/Desktop/MyWork.js/MyWorkCardLeft';
import MyWorkCardLeft from './Slides/Desktop/MyWork.js/MyWorkCardLeft';
import MyWorkCardRight from './Slides/Desktop/MyWork.js/MyWorkCardRight';

function App() {
  return (
    <>
      <MediaQuery query='(max-device-width:1224px)'>
        <MobileHero></MobileHero>

      </MediaQuery>
      <MediaQuery query='(min-device-width:1224px)'>
        <DeskHero></DeskHero>
        <MyWorkCardLeft></MyWorkCardLeft>
        <MyWorkCardRight></MyWorkCardRight>
      </MediaQuery>
    </>
  );
}

export default App;
