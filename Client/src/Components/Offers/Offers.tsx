import './Offers.css'
import offer from '../../assets/offfer.jpg'

export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Instant vehicle </h1>
                <h1>diagnostics </h1>
                <p> by one click</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={offer} alt=""/>
            </div>
        </div>
    );
};

