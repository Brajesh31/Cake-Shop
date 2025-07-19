import React from 'react'

const Blogs = ({ img }) => {
    return (
        <>
            <section className='main_container'>
                <div className="container  pt-5">
                    <div className="row">
                        <div className="card mb-3" id="blog">
                            <img src={img} className="card-img-top" alt="image" />
                            <div className="card-body text-light">
                                <h5 className="para_hover para card-title fs-2 mt-3">Google inks pact for new 35-storey
                                    office</h5>
                                <p className="para_two card-text mt-3 pt-1">That dominion stars lights dominion divide years
                                    for
                                    fourth have
                                    don't stars is that he earth it first without heaven in place seed it second morning
                                    saying.
                                </p>
                                <div className="icon_box d-flex">
                                    <div style={{ color: "#FFD43B" }}>
                                        <i className="fa-solid fa-user mt-2"></i>
                                        <span className="ms-2">Travel,Lifestytles</span>
                                    </div>
                                    <div className="ms-4 mt-1" style={{ color: "#FFD43B" }}>
                                        <i className="fa-solid fa-comment"></i>
                                        <span className="ms-2">03,Comment</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs