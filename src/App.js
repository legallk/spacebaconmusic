import './App.scss';
import React from 'react';
import Socials from './components/Socials';

import chris from './images/band/chris.jpg';
import jack from './images/band/jack.jpg';
import kevin from './images/band/kevin.jpg';
import sam from './images/band/sam.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">
      <nav className="sticky-top">
        <img src="images/header-logo.png" alt="space-bacon-header-logo" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#tour">Tour</a></li>
          <li><a href="#album">Album</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://www.customsmilesmerchandise.com/collections/space-bacon">Merch</a></li>
          <li><a href="https://www.youtube.com/channel/UCmNYvESK0Jk04GRueXFMO-g">Youtube</a></li>
          <li><a href="http://facebook.com/spacebaconmusic">Facebook</a></li>
          <li><a href="http://instagram.com/spacebacon">Instagram</a></li>
        </ul>
      </nav>
      </header>
      <div className="parallax first" id="first">
        <div className="text">
          <h1>Space Bacon</h1>
          <h4>Est. 2013</h4>
        </div>
      </div>
      <div className="container" id="about">
        <h2>About Us</h2>
        <p>The origin of Space Bacon traces back to the depths of Fordham University basement parties on the gritty streets of the Bronx. Since then, Space Bacon has grown from frat fests to the main stage, quickly conquering the title as one of the brightest up-and-coming jam bands in the region.</p>
        <p>Space Bacon has performed at The Capitol Theater, Irving Plaza, Brooklyn Bowl, TLA, Bowery Ballroom, as well as toured all around the country, performing with artists such as Umphrey’s McGee, Tauk, Spafford, Pigeons Playing Ping Pong, Papadosio, Breaking Biscuits, Consider the Source, and many more!</p>
        <p>All of the band’s live shows are documented and soundboards are released through their Bandcamp and Soundcloud pages, as well as a series of select studio and live releases on Spotify, Apple Music, or your favorite streaming service of choice!</p>
        <br /><br />
        <div className="images">
          <div className="img-wrap">
            <img src={jack} alt="jack" />
            <h4>Jack Willard - Guitar</h4>
          </div>
          <div className="img-wrap">
            <img src={chris} alt="chris" />
            <h4>Chris Gironda - Keyboards</h4>
          </div>
          <div className="img-wrap">
            <img src={kevin} alt="kevin" />
            <h4>Kevin LeGall - Bass</h4>
          </div>
          <div className="img-wrap">
            <img src={sam} alt="sam" />
            <h4>Sam Crespo - Drums</h4>
          </div>
        </div>
        <hr />
        <Socials />
      </div>
      <div className="parallax second"></div>
      <div className="container" id="tour">
        <h2>Tour</h2>
        <div className="bit-widget-initializer"
          data-artist-name="Space Bacon"
          data-text-color="#cccccc"
          data-link-color="#cccccc"
          data-background-color="#000000"
          data-display-limit="10"
          data-link-text-color="#ffffff"
          data-display-lineup="false"
          data-separator-color="rgba(124,124,124,0.25)"></div>
      </div>
      <div className="parallax third"></div>
      <div className="container album" id="album">
        <div className="row">
          <div>
            <h2>Cone</h2>
            <h3>The Debut Full Length Studio Album</h3>
            <p>"Rather than just a collection of songs the band has amassed over years of persistent touring, CONE is a sonic journey. Between fan favorites like <a href="https://spacebacon.bandcamp.com/track/ice-planet-32">“Ice Planet”</a>, <a href="https://spacebacon.bandcamp.com/track/cloud-coast-15">“Cloud Coast”</a>, and <a href="https://spacebacon.bandcamp.com/track/heatseeker-14">“Heatseeker”</a>, the Brooklyn quartet has composed unique interludes that stitch the album together as a cohesive work.</p>
            <p>Additionally, CONE features reimagined versions of time-tested songs from the road. In the studio, the band was able to further explore seemingly divergent influences of dance, prog, down-tempo grooves, and more as the pieces of CONE came together on the album mastered by Anthony Thogmartin (Papadosio)." - <a href="https://liveforlivemusic.com/news/space-bacon-cone-album-release-stream/">LiveForLiveMusic</a></p>
          </div>
          <div>
            <iframe style={{border: 0, width: '350px', height: '470px'}} title="bandcamp"
              src="https://bandcamp.com/EmbeddedPlayer/album=2758300430/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/" seamless="">
                <a href="https://spacebacon.bandcamp.com/album/cone">Cone by Space Bacon</a>
              </iframe>
          </div>
        </div>
      </div>
      <div className="parallax fourth"></div>
      <div className="container no-mobile" id="video">
        <iframe width="720" height="470" src="https://www.youtube.com/embed/0KbIdC6dKA0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="parallax fifth no-mobile"></div>
      <div className="container" id="contact">
        <h2>Contact Us</h2>
        <div className="row">
          <div>
            <h3>For Booking Please Contact:</h3>
            <p>Pivotal Agency // Sam Hutchinson - Booking Agent</p>
            <a href="mailto:SpaceBaconBooking@gmail.com">SpaceBaconBooking@gmail.com</a>
          </div>
          <div className="mobile-only">
            <br/><br/>
            <hr />
            <br/>
          </div>
          <div>
            <h3>For Press Inquiries and General Contact:</h3>
            <p>Harrison Waxenberg - Manager</p>
            <a href="mailto:SpaceBaconMGMT@gmail.com">SpaceBaconMGMT@gmail.com</a>     
          </div>
        </div>
      </div>
      <footer>
        <Socials />
        <div className="legal">
        © Space Bacon, LLC | Website Designed & Developed by <a href="mailto: Kev1nL3Gall@gmail.com">Kevin LeGall</a>
        <hr />
        Photos By Bill Murray
        </div>
      </footer>
    </div>
  );
}

export default App;
