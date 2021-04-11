import React, { useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Card, Container, Table, CardImg, Button, Image, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescriptionPlanets = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.planets[params.theid];

	return (
		<div className="mt-4">
			<Container>
				<Row>
					<Col xs={6} md={5}>
						<Image
							className=" w-100 h-100"
							src="https://images.unsplash.com/photo-1593974751347-9a2e8e9afeb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
							style={{ width: "100px", height: "100px", boxShadow: "8px 6px 15px #9e9e9e" }}
							rounded
						/>
					</Col>

					<Col xs={6} md={4}>
						<div>
							<Card border="light" style={{ width: "40rem" }}>
								<div className="text-center">
									<Card.Header>
										<strong>Planets</strong>
									</Card.Header>
								</div>
								<Card.Body>
									<div className="text-center">
										<Card.Title>{element.name}</Card.Title>
									</div>
									<Card.Text>
										La saga de George Lucas revolucionó por completo los «efectos especiales». El
										guión incluía decenas de astronaves, criaturas y objetos inventados como las
										«espadas láser», el cineasta tuvo que reunir a los mejores especialistas en
										efectos visuales de Hollywood, que hicieron un trabajo sorprendente, teniendo en
										cuenta que en la época los ordenadores no eran tan comunes ni avanzados como los
										de ahora.
										<br />
										Utilizaron maquetas y muñecos de látex que en cierto sentido tienen más encanto
										que las criaturas del cine moderno, pues aunque son mucho más limitados, tienen
										textura real, y están ahí, delante de la cámara. El potencial de los técnicos
										reunidos para la cinta era tan grande que Lucas fundó una compañía, Industrial
										Light & Magic, especializada en hacer todo tipo de efectos para cualquier
										película.
									</Card.Text>
								</Card.Body>
							</Card>
							<br />
						</div>
					</Col>
				</Row>
				<hr className="border border-bottom-0.5" />
				<div>
					<Table responsive>
						<thead className="text-white">
							<tr>
								<th>Name</th>
								<th>Climate</th>
								<th>Population</th>
								<th>Orbital Period</th>
								<th>Rotation Period</th>
								<th>Diameter</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-white">
								<td>{element.name}</td>
								<td>{element.climate}</td>
								<td>{element.population}</td>
								<td>{element.orbital_period}</td>
								<td>{element.rotation_period}</td>
								<td>{element.diameter}</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<br />
				<div className="col text-center">
					<Link to="/planets/home">
						<button className="btn btn-primary">Back Planets</button>
					</Link>
				</div>
			</Container>
		</div>
	);
};
