import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { DescriptionPeople } from "./views/descriptionPeople";
import { Context } from "./store/appContext";
import { DescriptionPlanets } from "./views/descriptionPlanets";
import injectContext from "./store/appContext";

import { Menu } from "./component/navbar";
import { People } from "./component/people";
import { Planets } from "./component/planets";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanet();
	}, []);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Menu />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/people/:theid">
						<People info={store.people} />
					</Route>
					<Route exact path="/descriptionPeople/:theid">
						<DescriptionPeople />
					</Route>
					<Route exact path="/planets/:theid">
						<Planets info={store.planets} />
					</Route>
					<Route exact path="/descriptionPlanets/:theid">
						<DescriptionPlanets />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
