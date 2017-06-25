import React from 'react'

export default class Section3 extends React.Component {
    render() {
        return (
            <div className="topsectionAlignment section3">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <h2>What Lens Should You Use for Flower Photography? The Answer Might Delight You</h2>
                        <p>Spring has definitely sprung. Nature’s vast array of quickly changing colors, foliage and landscapes have added punch from flowers representing all colors of the rainbow. You may have read Christina Harman’s recent article 10 Tips for Stunning Flower Photos with a bevy of tools and tips for photographing flowers.</p>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-sm-5 col-md-5 col-lg-5">
                        <img src="../images/tulip4.jpg" alt="Tulip1" className="tulip1" style={{ width: "100%" }}/>
                        <img src="../images/tulip1.jpg" alt="Tulip2" className="tulip2" style={{ width: "90%" }}/>
                        <img src="../images/tulip6.jpg" alt="Tulip3" className="tulip3" style={{ width: "70%" }}/>
                    </div>
                </div>
                <div className="learnMoreButton"><button type="button" className="btn btn-default btn-lg">Learn More</button></div>
            </div>
        )
    }
}