import React from "react";

const Card =(props) => {

    const { imagen } = props.CardsImagen;

       return(
       
        <div className="card h-100" style={{height: '50px', objectFit: 'cover'}}>
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sapiente ratione accusantium voluptate deleniti, magni ducimus recusandae nisi ab veniam sequi reiciendis numquam sit odio..</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    );
}


export default Card;