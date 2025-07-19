import React from 'react'
import Blog from '../Components/Blog/Blog'

const Section6 = ({ img, blog_title, blog_Content }) => {
    return (
        <>
            <section className='main_container'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <p
                                className="para text-light display-5 mt-md-5 pt-md-5 ms-lg-5 px-lg-5 mt-lg-5 pt-lg-5 d-flex justify-content-lg-end">
                                Our Blog
                            </p>
                        </div>
                        <div className="col-lg-7 col-md-7  d-flex justify-content-end pt-5 d-none d-sm-none d-md-block">
                            <div className="button bg-warning me-5 h-50 mt-5 pt-2">
                                <p className=" d-flex justify-content-center fs-6 py-2">MORE BLOG</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-5 pt-5">
                    <div className="row">
                        <Blog img={"/img/blog1.jpg"} blog_title={"Tomato, black olive, feta & anchovy tart ulla mco laboris"} blog_Content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip."} />
                        <Blog img={"/img/blog2.jpg"} blog_title={"Tomato, black olive, feta & anchovy tart ulla mco laboris"} blog_Content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip."} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section6