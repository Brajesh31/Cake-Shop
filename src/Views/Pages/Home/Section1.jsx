import React from 'react';
import Button from '../Components/Button/Button';

const Section1 = ({ title = "Healthy Made", title2 = "Delicious Cake" }) => {
    return (
        <>
            <section className="cake">
                <div className="container pt-5">
                    <div className="container-fluid pt-5 image">
                        <div className="box mt-5 text-light py-5 display-4 fw-light">
                            <h1 className='display-3'>{title}</h1>
                            {title2 && <p>{title2}</p>}
                        </div>
                        <Button />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section1;
