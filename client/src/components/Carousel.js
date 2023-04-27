import React from 'react';

const Carousel = () => {
    return (
        <div>


            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="row">
                    <div className="col-md-0"></div>
                    <div className="col-md-12">

                        <div className="carousel-inner">

                            {/*<div> style={{"zIndex":"1"}}*/}
                            {/*    <form className="d-flex">*/}
                            {/*        <input className="form-control me-2 text-light" type="search" placeholder="Search"*/}
                            {/*               aria-label="Search"/>*/}
                            {/*        <button className="btn btn-outline-success" type="submit">Search</button>*/}
                            {/*    </form>*/}

                            {/*</div>*/}


                            <div className="carousel-item active">
                                <img src="https://source.unsplash.com/random/300×300/?pastry" className="d-block w-100" alt="..." style={{"height":"700px","marginTop":"-100px"}}/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" alt="..." style={{"height":"700px","marginTop":"-100px"}}/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." style={{"height":"700px","marginTop":"-100px"}}/>
                            </div>
                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
                    <div className="col-md-0"></div>
                </div>

            </div>
        </div>
    );
};

export default Carousel;