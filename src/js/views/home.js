import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Caption, Card, Jumbotron, Container } from "react-bootstrap";
// import { Carousel, CarouselItem, CarouselItemProps, CarouselProps, Caption, Card } from "react-bootstrap";

export const Home = () => (
	<div className="container text-center mt-4">
		<div>
			<Link to="/people/whatever">
				<Jumbotron fluid>
					<Container>
						<h1>Star Wars Characters</h1>
						<p>GO!</p>
					</Container>
				</Jumbotron>
			</Link>
		</div>
		<div>
			<Link to="/planets/whatever">
				<Jumbotron fluid>
					<Container>
						<h1>Star Wars Planets</h1>
						<p>Go!</p>
					</Container>
				</Jumbotron>
			</Link>
		</div>
	</div>
);
