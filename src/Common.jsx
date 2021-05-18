import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>{props.name}  <strong className="brand-name"> Coders Choice</strong></h1>
                                <h2 className="my-3">
                                    We are the team of talented developer making website
                            </h2>
                                <div className="mt-3">
                                    <NavLink className="btn-get-started" to={props.visit}>{props.btname} </NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Common;
