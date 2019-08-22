import React from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    class StoreWrapper extends React.Component {
        constructor(props) {
            super(props);

            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updatedStore => this.setState({
                    store: Object.assign(this.state.store, updatedStore)
                })
            });
        }
        componentDidMount() {
            this.state.actions.getPlanets('https://swapi.co/api/planets/');
            this.state.actions.getVehicles('https://swapi.co/api/vehicles/');
            this.state.actions.getCharacters('https://swapi.co/api/people/');
        }

        render() {
            return (
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            );
        }
    }
    return StoreWrapper;
}

export default injectContext;