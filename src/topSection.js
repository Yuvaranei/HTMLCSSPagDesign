import React from 'react'

export default class TopSection extends React.Component{
    render(){
        return(
                    <section className="imgbackground whiteFont">            
                        <div className="topsectionAlignment">
                            <nav className="navbar">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand whiteFont" href="#">Photography</a>
                                </div>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li className="contactButton"><span><a href="#" >Contact us</a></span></li>
                                </ul>
                            </div>
                        </nav>
                            {/*<iframe className="" src="https://www.youtube.com/embed/qVC8kTT1xl4" ></iframe>*/}
                            <div className="topsectionDescription">
                                <h1>Tips for Best Nature Photography</h1>
                                <p>Sunshine, Flower, Wildlife, Tulips, Sprouting, Underwater Photography</p>
                            </div>
                            <a href="#"><img src="../images/playButton.png" alt="play button"/> Play button</a>

                        </div>
                    </section>
        )
        
    }
}