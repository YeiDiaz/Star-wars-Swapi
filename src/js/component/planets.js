import React, { useState, useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, ButtonToolbar, CardGroup, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();

	return (
		<div className="container d-flex flex-column text-center">
			<div className="Main mt-5 d-flex" style={{ overflowX: "scroll", width: "1100px", height: "550px" }}>
				{props.info.map((element, index) => {
					return (
						<Card style={{ minWidth: "20rem", margin: "15px" }} key={index}>
							<Card.Img
								variant="top h-50"
								src="https://images.unsplash.com/photo-1556988680-40f0449b35e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
							/>
							<Card.Body>
								<Card.Title className="text-center">{element.name}</Card.Title>
								<Card.Text>
									<tr>
										<td>Population: {element.population}</td>
									</tr>
									<tr>
										<td>Gravity: {element.gravity}</td>
									</tr>
									<tr>
										<td>Terrain: {element.terrain}</td>
									</tr>
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<ButtonToolbar
									className="justify-content-between"
									aria-label="Toolbar with Button groups">
									<Link to={`/descriptionPlanets/${index}`}>
										<Button variant="primary">Learn More</Button>
									</Link>
									<Link onClick={() => actions.addFavorite(element.name, "planet")}>
										<Button variant="outline-warning">
											<i className="far fa-heart" />
										</Button>
									</Link>
								</ButtonToolbar>
							</Card.Footer>
						</Card>
					);
				})}
			</div>
			<div>
				<Link to="/">
					<button className="btn btn-primary mt-4" style={{ top: "15" }}>
						Back home
					</button>
				</Link>
			</div>
		</div>
	);
};

Planets.propTypes = {
	info: PropTypes.any
};
