import React from 'react'

const Pagination = () => {
    return (
        <>
            <div className="container-fluid main_container d-none d-sm-none d-md-block">
                <nav aria-label="Page navigation example">
                    <div className="pagination ms-5 ps-5">
                        <li className="page-item">
                            <a className="page page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item ms-2"><a className="page page-link" href="#">1</a></li>
                        <li className="page-item ms-2"><a className="page page-link" href="#">2</a></li>
                        <li className="page-item ms-2"><a className="page page-link" href="#">3</a></li>
                        <li className="page-item ms-2">
                            <a className="page page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Pagination