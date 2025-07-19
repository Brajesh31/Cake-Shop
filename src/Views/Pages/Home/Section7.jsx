import React from 'react'
import Images from '../Components/InstagramImges/Images'

const Section7 = ({ img }) => {
    return (
        <>
            <section className='main_container'>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="para text-light fs-1 text-center">Follow us on Instagram</p>
                        </div>
                    </div>
                </div>
                <div class="col row w-100">
                    <div class="col-lg-12 me-0 d-flex justify-content-center">
                        <div>
                            <p class="number d-flex justify-content-center align-items-center mx-md-0">
                                <i class="fa-brands fa-instagram me-3"></i> cakeshop
                            </p>
                        </div>
                    </div>
                </div>

                <div class="container mt-5">
                    <div class="row d-flex justify-content-center text-center">
                        <Images img={"/img/instra1.jpg"} />
                        <Images img={"/img/instra2.jpg"} />
                        <Images img={"/img/instra3.jpg"} />
                        <Images img={"/img/instra4.jpg"} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Section7