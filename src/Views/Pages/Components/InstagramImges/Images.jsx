const Images = ({ img }) => {
    return (
        <>
            <div className="col-lg-3">
                <div>
                    <img src={img} alt="image" className="img-fluid mt-2" />
                </div>
            </div>
        </>
    )
}

export default Images