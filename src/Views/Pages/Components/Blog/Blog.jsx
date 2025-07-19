import React from 'react'

const Blog = ({ img, blog_title, blog_Content }) => {
    return (
        <>
            <div className="col-lg-6">
                <div className="card mb-3 border border-dark">
                    <div className="row g-0  ">
                        <div className="col-md-6" style={{ background: "#000" }}>
                            <img src={img} className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="card col-md-6 " style={{ background: "#000" }}>
                            <div className="card-body">
                                <h5 className="para text-warning mt-3 fs-2">{blog_title}</h5>
                                <p className="card-text text-light mt-4 fs-6">{blog_Content}
                                </p>
                                <p className="learn text-warning mt-5 ">LERN MORE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog