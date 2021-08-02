import React, { Component }  from 'react';

class Socials extends Component {
    render() {
        return (
            <div className="socials">
                <ul>
                    <li>
                    <a href="https://www.facebook.com/spacebaconmusic">
                        <img src="images/svg/vintage/facebook.svg" alt="facebook" />
                    </a>
                    </li>
                    <li>
                    <a href="https://instagram.com/spacebacon">
                        <img src="images/svg/vintage/instagram.svg" alt="instagram" />
                    </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/spacebaconmusic">
                        <img src="images/svg/vintage/twitter.svg" alt="twitter" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/c/SpaceBaconOfficial/videos">
                        <img src="images/svg/vintage/youtube.svg" alt="youtube" />
                    </a>
                    </li>

                    <li>
                    <a href="https://soundcloud.com/spacebacon">
                        <img src="images/svg/vintage/soundcloud.svg" alt="soundcloud" />
                    </a>
                    </li>
                    <li>
                    <a href="https://spacebacon.bandcamp.com/">
                        <img src="images/svg/vintage/bandcamp.svg" alt="bandcamp" />
                    </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Socials;