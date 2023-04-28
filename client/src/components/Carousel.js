import React from 'react';

const Carousel = () => {
    return (
        <div>
            {/*<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">*/}
            {/*    <div className="carousel-indicators">*/}
            {/*        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"*/}
            {/*                className="active" aria-current="true" aria-label="Slide 1"></button>*/}
            {/*        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"*/}
            {/*                aria-label="Slide 2"></button>*/}
            {/*        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"*/}
            {/*                aria-label="Slide 3"></button>*/}
            {/*    </div>*/}
            {/*    <div className="carousel-inner">*/}
            {/*        <div className="carousel-item active">*/}
            {/*            <img src="..." className="d-block w-100" alt="..."/>*/}
            {/*                <div className="carousel-caption d-none d-md-block">*/}
            {/*                    <h5>First slide label</h5>*/}
            {/*                    <p>Some representative placeholder content for the first slide.</p>*/}
            {/*                </div>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item">*/}
            {/*            <img src="..." className="d-block w-100" alt="..."/>*/}
            {/*                <div className="carousel-caption d-none d-md-block">*/}
            {/*                    <h5>Second slide label</h5>*/}
            {/*                    <p>Some representative placeholder content for the second slide.</p>*/}
            {/*                </div>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item">*/}
            {/*            <img src="..." className="d-block w-100" alt="..."/>*/}
            {/*                <div className="carousel-caption d-none d-md-block">*/}
            {/*                    <h5>Third slide label</h5>*/}
            {/*                    <p>Some representative placeholder content for the third slide.</p>*/}
            {/*                </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"*/}
            {/*            data-bs-slide="prev">*/}
            {/*        <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
            {/*        <span className="visually-hidden">Previous</span>*/}
            {/*    </button>*/}
            {/*    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"*/}
            {/*            data-bs-slide="next">*/}
            {/*        <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
            {/*        <span className="visually-hidden">Next</span>*/}
            {/*    </button>*/}
            {/*</div>*/}


            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain"}}>


                <div className="carousel-inner">




                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/300×300/?pastry" className="d-block w-100" alt="..." style={{"height":"500px","filter":"brightness(30%)"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <div style={{"zIndex":"100"}}>
                                <form className="d-flex">
                                    <input className="form-control me-3 text-light " type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <br/>
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" alt="..." style={{"height":"500px","filter":"brightness(30%)"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <div style={{"zIndex":"100"}}>
                                <form className="d-flex">
                                    <input className="form-control me-3 text-light " type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <br/>
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." style={{"height":"500px","filter":"brightness(30%)"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <div style={{"zIndex":"100"}}>
                                <form className="d-flex">
                                    <input className="form-control me-3 text-light " type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <br/>
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form>

                            </div>
                        </div>
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
        </div>
    );
};

export default Carousel;