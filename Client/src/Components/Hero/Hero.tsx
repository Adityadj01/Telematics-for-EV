import './Hero.css';
import arrow_icon from '../../assets/arrow.png';
import hero_clip from '../../assets/hero_videoclip.mp4';

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>EV Condition Control</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Revolutionize your EV experience with precision diagnostics</p>
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <p></p>
                </div>
                {/* Wrap the "Latest Updates" section in an anchor tag for redirection */}
                <div className="hero-latest-btn">
                    <a href="https://insideevs.com/news/" target="_self" rel="noopener noreferrer">
                        <div>Latest Updates
                        <img src={arrow_icon} alt=""/>
                        </div>
                    </a>
                </div>
            </div>
            <div className="hero-right">
                {/* Existing video section */}
                <a href="https://youtu.be/La8vsNO4bdI" target="_blank" rel="noopener noreferrer">
                    <video autoPlay loop muted>
                        <source src={hero_clip} type="video/mp4"/>
                    </video>
                </a>
            </div>
        </div>
    );
};
