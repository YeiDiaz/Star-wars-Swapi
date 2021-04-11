const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],

			planets: [],

			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPeople: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ people: info.results });
			},

			loadPlanet: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ planets: info.results });
			},
			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
			},

			deleteFavorite: id => {
				const store = getStore();

				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
