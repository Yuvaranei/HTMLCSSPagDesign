import React from 'react'

export default class Section2 extends React.Component {
    render() {
        return (
            <div className="topsectionAlignment section2">
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                            <img src="../images/flower1.jpg" alt="Flower1" style={{ width: "100%" }} />
                            <div className="caption">
                                <h3>Flower Photography </h3>
                                <p>Primes are available at many focal lengths. These include 14mm, 24mm, 35mm, 50mm and 85mm and beyond.
                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                            <img src="../images/flower2.jpg" alt="Flower2" style={{ width: "100%" }} />
                            <div className="caption">
                                <h3>Flower - Marry Gold</h3>
                                <p>Macro photography lenses have a life size 1:1 ratio.
                                    The ranges of macro focal lengths start from 40mm</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                            <img src="../images/flower3.jpg" alt="Flower3" style={{ width: "100%" }} />
                            <div className="caption">
                                <h3>Flower - Bunch of flowers</h3>
                                <p>Telephotos leverage distance and separate the flower from the background.
                                     First, minimize the distance between the camera and the flower.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}