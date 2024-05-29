import './Hero.css'
import arrow_icon from '../../assets/arrow.png'
import hero_clip from '../../assets/hero_videoclip.mp4'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>EV Condition Control</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Revolutionize </p>
                        {/* <img src={hand_icon} alt="" /> */}

                    </div>
                    <p>your EV experience </p>
                    <p>with precision diagnostics</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Updates</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="hero-right">
                {/* <img src={hero_image} alt="" /> */}
                <video autoPlay loop muted>
                    <source src={hero_clip} type="video/mp4"/>


                </video>
            </div>
        </div>
    );
};
