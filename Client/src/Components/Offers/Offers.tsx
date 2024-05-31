import './Offers.css';
import offer from '../../assets/offfer.jpg';

export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Instant vehicle </h1>
                <h1>diagnostics </h1>
                <p> by one click</p>
                {/* Wrap the button in an anchor tag for redirection */}
                <a href="https://iwheels.co/blog/obd-devices-in-electric-vehicles/" target="_blank" rel="noopener noreferrer">
                    <button>Check Now</button>
                </a>
            </div>
            <div className="offers-right">
                <img src={offer} alt=""/>
            </div>
        </div>
    );
};
