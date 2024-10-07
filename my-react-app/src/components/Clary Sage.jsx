import React from 'react';
import './ClarySage.css';
import clarySageImage from '../public/clarySage.jpg';

const ClarySage = () => {
    return (
        <div className="oil-card">
            <img src="/img/clary-sage.jpg" alt="Clary Sage Essential Oil" className="oil-image" />
            <h2>Clary Sage Essential Oil</h2>
            <p>
                Clary Sage oil is recognized for its hormone-balancing properties, making it ideal
                for alleviating symptoms of PMS and menopause. It helps reduce stress and promotes
                relaxation, while its anti-inflammatory properties improve skin health.
            </p>
            <h3>Benefits</h3>
            <ul>
                <li>Balances hormones</li>
                <li>Relieves symptoms of PMS and menopause</li>
                <li>Reduces stress and inflammation</li>
            </ul>
        </div>
    );
};

export default ClarySage;
