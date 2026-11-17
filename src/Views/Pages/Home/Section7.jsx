import Images from '../Components/InstagramImges/Images'

const Section7 = () => {
    return (
        <>
            <section className='main_container'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="para text-light fs-1 text-center">Follow us on Instagram</p>
                        </div>
                    </div>
                </div>
                <div className="col row w-100">
                    <div className="col-lg-12 me-0 d-flex justify-content-center">
                        <div>
                            <p className="number d-flex justify-content-center align-items-center mx-md-0">
                                <i className="fa-brands fa-instagram me-3"></i> cakeshop
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row d-flex justify-content-center text-center">
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