import React from 'react'


export default class Footer extends React.Component {
    render() {
        return (
            <div className="topsectionAlignment footer">
                <div><hr/></div>
                <div >
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        <p>&copy; 2017, photography.com</p>
                    </div>
                    <div className="col-md-5 col-sm-5 col-lg-5"></div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <a href="#">Contact</a>                        
                        <a href="#">Partners</a>
                        <a href="#">Terms</a>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}