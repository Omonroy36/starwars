import React, { Fragment } from "react";
import { Link } from "react-router-dom";



export class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="title"><img src="imgs/stlogo.png" alt="logo" width="250px" height="150px" /></div>
                    <div className="row">
                    <div className="col-md-4 characters">
                        <Link to="/characters" className="col-md-4"></Link>
                        </div>
                        <div className="col-md-4 vehicles">
                        <Link to="/vehicles"></Link>
                        </div>
                        <div className="col-md-4 planets">
                        <Link to="/planets"></Link>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}