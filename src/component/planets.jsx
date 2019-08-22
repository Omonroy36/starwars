import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Planets extends React.Component {

    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
                <div className="carousel-inner">
                    <Context.Consumer>
                        {({ store }) => {
                            return store.planets.map((item, i) => {
                                return (
                                    <div className={"carousel-item " + (i == 0 ? "active" : "")} id="image1" key={i}>
                                        <div className="imagess">
                                            <h5>{item.name}</h5>
                                            <ul>
                                                <li >
                                                    {item.climate}
                                                </li>
                                                <li>
                                                    {item.population}
                                                </li>
                                                <li>
                                                    {item.terrain}
                                                </li>
                                                <li>
                                                    {item.created}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                        }
                    </Context.Consumer>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}