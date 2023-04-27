import React from 'react';


const Card = () => {
    return (
        <div>
            <div className="text-secondary p-5">
                <div className="card my-5" style={{"width":"18rem","background":"black","color":"white","maxHeight":"360px"}}>
                    <img src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2021/03/19/biriyani.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">About food</p>
                        <div className="container w-100">
                            <select className=" p-1 h-100 bg-dark text-light rounded">
                                {Array.from(Array(6),(e,i)=>{
                                    return (
                                        <option key={i+1} value={i+1}>
                                            {i+1}
                                        </option>
                                    )
                                })}
                            </select>


                            <select className="m-2 p-1 h-100 bg-dark text-light rounded">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>


                            <div className="d-inline h-100 p-1">
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;