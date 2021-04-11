import React, { useState, useContext } from "react";
import { Card, Container, Button, Row, Col, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();

	return (
		<div className="container d-flex flex-column text-center">
			<div className="Main mt-5 d-flex" style={{ overflowX: "scroll", width: "1100px", height: "550px" }}>
				{props.info.map((element, index) => {
					return (
						<Card style={{ minWidth: "20rem", margin: "15px" }} key={index}>
							<Card.Img variant="top" src="https://i.ytimg.com/vi/8B8Jm-yuV_g/maxresdefault.jpg" />
							<Card.Body>
								<Card.Title className="text-center">{element.name}</Card.Title>
								<Card.Text>
									<tr>
										<td>Gender: {element.gender} </td>
									</tr>
									<tr>
										<td>Hair-Color: {element.hair_color} </td>
									</tr>
									<tr>
										<td>Eye-Color: {element.eye_color}</td>
									</tr>
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<ButtonToolbar
									className="justify-content-between"
									aria-label="Toolbar with Button groups">
									<Link to={`/descriptionPeople/${index}`}>
										<Button variant="primary">Learn More</Button>
									</Link>
									<Link onClick={() => actions.addFavorite(element.name, "people")}>
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
People.propTypes = {
	info: PropTypes.string
};
