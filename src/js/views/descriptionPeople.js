import React, { useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Container, Table, CardImg, Button, Image, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescriptionPeople = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.people[params.theid];

	return (
		<div className="mt-5 text-center">
			<Container>
				<Row>
					<Col xs={6} md={5}>
						<Image
							className=" w-100 h-100"
							src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
							style={{
								width: "100px",
								height: "100px",
								boxShadow: "8px 6px 15px #9e9e9e"
							}}
							rounded
						/>
					</Col>
					<Col xs={6} md={4}>
						<div>
							<Card border="light" style={{ width: "40rem" }}>
								<div className="text-center">
									<Card.Header>
										<strong>Character</strong>
									</Card.Header>
								</div>
								<Card.Body>
									<div className="text-center">
										<Card.Title>{element.name}</Card.Title>
									</div>
									<Card.Text>
										<strong>Star Wars</strong>, traducido al español como La Guerra de las Galaxias,
										es una franquicia compuesta de películas, novelas, cómics, videojuegos y
										juguetes. Es un universo de ficción creado por George Lucas. La historia de Star
										Wars utiliza arquetipos comunes a la ciencia ficción, climax político y
										mitología, así como temas musicales de estos aspectos.
										<br />
										Siendo uno de los ejemplos más importantes de la space opera (subgénero de
										ciencia ficción) Star Wars se ha convertido en una parte esencial de la cultura
										popular, así como una de las películas de mayor recaudación en taquilla de todos
										los tiempos y una de las mas aclamadas por el público en genera
									</Card.Text>
								</Card.Body>
							</Card>
							<br />
						</div>
					</Col>
				</Row>
				<hr className="border border-bottom-0.5" />
				<div className="text-light">
					<Table responsive>
						<thead className="text-white">
							<tr>
								<th>Name</th>
								<th>Birth</th>
								<th>Gender</th>
								<th>Height</th>
								<th>Skin</th>
								<th>Eye-Color</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-white">
								<td>{element.name}</td>
								<td>{element.birth_year}</td>
								<td>{element.gender}</td>
								<td>{element.height}</td>
								<td>{element.skin_color}</td>
								<td>{element.eye_color}</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<br />
				<div className="col text-center">
					<Link to="/people/home">
						<button className="btn btn-primary">Back People</button>
					</Link>
				</div>
			</Container>
		</div>
	);
};
