import React from 'react'

const Section2 = ({ img }) => {
    return (
        <>
            <section classNameName='main_container'>
                <div className="cont container_box container-fluid">
                    <div className="text_container">
                        <div className="para pt-5">
                            <p className="para  display-6 mt-3 lh-base text-light  text-center">This is
                                Schilers. Awesome
                                Food
                                Theme.
                            </p>
                            <p className="para display-6 text-light text-center">Purchase it and eat Burgers.</p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-lg-2"></div>
                        <div className=" col-sm-4  col-md-12 col-lg-4 col-md-12  col-xxl-4  mt-md-5">
                            <p className="para text-warning fs-3">This is Schilers. Awesome Food Theme.
                                Purchase it and eat Burgers.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                tempor dunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco
                                laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate
                                velit esse cillum.</p>

                            <p className="text-light  d-none d-sm-block d-lg-block">Consectetur
                                adipiscing elit,
                                sed do
                                eiusmod
                                tempor
                                dunt ut labore et
                                dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xxl-4 mt-md-5">
                            <img src={img = "/img/about image.jpg"} className="img-fluid" alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2