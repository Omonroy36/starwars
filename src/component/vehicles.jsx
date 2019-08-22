import React from "react";
import { Context } from "../store/appContext";

export class Vehicles extends React.Component{

    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
        <div className="carousel-inner">
        <Context.Consumer>
                        {({ store }) => {
                            return store.vehicles.map((item, i) => {
                                return (
                                    <div className={"carousel-item " + (i == 0 ? "active" : "")} id="image1" key={i}>
                                        <div className="imagess">
                                            <h5>{item.name}</h5>
                                            <ul>
                                                <li >
                                                    {item.model}
                                                </li>
                                                <li>
                                                    {item.manufacturer}
                                                </li>
                                                <li>
                                                    {item.vehicle_class}
                                                </li>
                                                <li>
                                                    {item.max_atmosphering_speed}
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