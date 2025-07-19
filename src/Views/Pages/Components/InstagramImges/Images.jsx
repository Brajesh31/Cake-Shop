import React from 'react'

const Images = ({ img }) => {
    return (
        <>
            <div class="col-lg-3">
                <div>
                    <img src={img} alt="image" class="img-fluid mt-2" />
                </div>
            </div>
        </>
    )
}

export default Images