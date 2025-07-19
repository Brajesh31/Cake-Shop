import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="main_container">
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center  mt-5 text-sm-center">
                                    <img src={"/img/logo.png"} className="img-fluid" alt="image" />
                                </div>

                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row border-top border-dark mt-5">
                                    <div className="col-lg-6">
                                        <p className="para_two mt-5 text-light pt-3">Consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            dunt ut
                                            labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                        <div className="d-flex gap-3 mt-5 pt-1">
                                            <div>
                                                <p className="number_two d-flex justify-content-center align-items-center mx-md-0">
                                                    <i className="fa-brands fa-instagram me-3"></i> Instagram
                                                </p>
                                            </div>
                                            <div>
                                                <p className="number_two d-flex justify-content-center align-items-center mx-md-0">
                                                    <i className="fa-brands fa-facebook me-3"></i> Facebook
                                                </p>
                                            </div>
                                            <div className="d-none d-sm-none d-md-block">
                                                <p className="number_two d-flex justify-content-center align-items-center mx-md-0">
                                                    <i className="fa-brands fa-twitter me-3"></i>Twitter
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <i className="fa-brands fa-telegram fs-2 mt-5 pt-3 mx-5" style={{ color: "white" }}></i>
                                        <div className="para text-warning fs-3 ms-5 mt-2">Location</div>
                                        <div className="para_two text-light fs-6 ms-5 mt-2">4736 Poe Lane, HOT SPRINGS,
                                            Montana-59845
                                        </div>
                                    </div>
                                    <div className="col-lg-3 ">
                                        <i className="fa-solid fa-phone fs-2 mt-5 pt-3 ms-5" style={{ color: "white" }}></i>
                                        <div className="para text-warning fs-3 ms-5 mt-2">Contact</div>
                                        <div className="para_two text-light fs-6 ms-5 mt-2">913-473-7000 </div>
                                        <div className="para_two text-light fs-6 ms-5 mt-2">contact@cakeshop.com </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row border-bottom border-dark mt-4"></div>
                        </div>
                    </section >

                    <div className="p text-light mt-5 text-center fs-4">
                        Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"
                            style={{ color: "#FFD43B" }} ></i> by BRAJESH KUMAR
                    </div>
                </div >
            </footer >
            {/* style="color: #FFD43B;" */}
        </>
    )
}

export default Footer