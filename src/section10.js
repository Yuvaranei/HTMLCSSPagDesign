import React from 'react'

export default class Section10 extends React.Component {
    render() {
        return (
            <div className="topsectionAlignment section10">
                <div>
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        <h3>Contact us</h3>
                        <div>
                            <p>+91 000-000-0000</p>
                            <p>pics@gameday.asia</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        <h3>Follow us</h3>
                        <div>
                            <p>Linkedin</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2"></div>
                    <div className="col-md-4 col-sm-4 col-lg-4" style={{float: "right"}}>
                        <h3>Join our monthy newspaper</h3>
                        <div>
                            <p>You need a helping hand for your project?</p>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your E-mail here" name="email"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default btn-md overlapButton" type="submit">
                                            <span >Enter</span></button>
                                    </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}