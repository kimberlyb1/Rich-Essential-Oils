import React from 'react';
import ylangYlangImage from '../images/YlangYlang.webp'; // Import the image
import '../styles/YlangYlang.css'; // Correct CSS import

const YlangYlang = () => {
    return (
        <div className="oil-card">
            <img src={ylangYlangImage} alt="Ylang Ylang Essential Oil" className="oil-image" />
            <h2>Ylang Ylang Essential Oil</h2>
            <p>
                Ylang Ylang oil is known for its ability to calm the mind and promote relaxation.
                It is used to alleviate anxiety, relieve stress, and balance emotions. Additionally,
                it helps balance the skin’s oil production, making it ideal for maintaining healthy skin.
            </p>
            <h3>Benefits</h3>
            <ul>
                <li>Relieves stress and anxiety</li>
                <li>Promotes relaxation and emotional balance</li>
                <li>Balances skin oil production</li>
            </ul>
        </div>
    );
};

export default YlangYlang;