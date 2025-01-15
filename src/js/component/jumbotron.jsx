import React from "react";

const Jumbotron =() => {

    
        return(
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold text-start">A Warm Welcome!</h1>
        <div>
        <p className="col-md-8 fs-4 text-start" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum qui inventore, magni asperiores vero quia quod nesciunt.</p>
        </div>     
        <button className="btn btn-primary btn-lg float-start" type="button">Call to action!</button>
      </div>
    </div>
              );

}

export default Jumbotron;