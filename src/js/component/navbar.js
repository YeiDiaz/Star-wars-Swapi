import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoStarWars from "../../img/logoStarWars.png";
import { DropdownButton, Dropdown, Navbar, ButtonGroup } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Menu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar bg="dark">
			<Link to="/">
				<Navbar.Brand href="#home">
					<span className="navbar-brand mb-0 ml-5 h1">
						<img className="LOGO  bg-light" src={logoStarWars} alt="LOGO" />
					</span>
				</Navbar.Brand>
			</Link>

			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end mr-5">
				<DropdownButton drop={"left"} variant="dark" title={"Favorites " + store.favorites.length}>
					{store.favorites.length == 0 ? (
						<Dropdown.Item>Empty</Dropdown.Item>
					) : (
						store.favorites.map((favorite, i) => {
							return (
								<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
									{favorite.type == "people" ? (
										<div>
											<i className="fas fa-id-card">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									) : (
										<div>
											<i className="fas fa-globe-americas">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									)}
								</Dropdown.Item>
							);
						})
					)}
				</DropdownButton>
			</Navbar.Collapse>
		</Navbar>
	);
};
