import React from "react";

//Import componente Trabajo  // OSCAR

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component

const CardsImagen =[
	{
		imagen: "https://picsum.photos/200/300"
	},

	{
		imagen: "https://picsum.photos/200/300"
	},

	{
		imagen: "https://picsum.photos/200/300"
	},

	{
		imagen: "https://picsum.photos/200/300"
	}

];


const Home = () => {
	return (

	<div className="text-center">

		<div id="Head">
		<Navbar/>
		</div>

		<div id="Body">
		<Jumbotron/>
		</div>
		
		<div className="container_Cards">

				<div className="row">
					{CardsImagen.map((item, index) => (

						<div className="col-12 mb-4 col-sm-6 col-md-4 col-lg-3" key={index}>
						<Card CardsImagen={item} />
						</div>
					))}
				</div>


		<div id="Footer">
		<Footer/>
		</div>	
		</div>
	</div>
	);
};

export default Home;
