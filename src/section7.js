import React from 'react'

export default class Section7 extends React.Component {
    render() {
        return (
            <div className="jumbotron section7">
                <div >
                    Wildlife photography is devoted to capturing animals in their natural habitats.
                    The animals are often photographed in action, such as eating, fighting, or in flight,.
                     Alternatively, more static portraits may be used to show detail of the animal
                 or to depict it in its environment
            </div>
                <div>
                    <img className="tinyImages" src="../images/tiny1.jpg" alt="tiny1" />
                    <img className="tinyImages" src="../images/tiny2.jpg" alt="tiny2" />
                    <img className="tinyImages" src="../images/tiny3.jpg" alt="tiny3" />
                    <img className="tinyImages" src="../images/tiny4.jpg" alt="tiny4" />
                </div>
                <div>
                    <img className="tinyImages" src="../images/tiny5.jpg" alt="tiny5" />
                    <img className="tinyImages" src="../images/tiny6.jpg" alt="tiny6" />
                    <img className="tinyImages" src="../images/tiny7.png" alt="tiny7" />
                    <img className="tinyImages" src="../images/tiny8.jpg" alt="tiny8" />
                </div>

            </div>
           
        )
    }
}