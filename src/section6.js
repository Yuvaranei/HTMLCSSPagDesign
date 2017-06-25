import React from 'react'

export default class Section6 extends React.Component {
    render() {
        return (
            <div className="topsectionAlignment section6">
               
                    <div style={{float:"left"}}>
                        <img className="boxImages" style={{height:"300px"}} src="../images/box1.jpg" alt="Box1"/>
                    </div>
                   <div style={{float:"left"}}>
                        <img className="boxImages" src="../images/box2.jpg" alt="Box2"/>
                        <div>
                            <h2>Wildlife Photography</h2>                           
                            </div>
                    </div>
                    <div style={{float:"left"}}>
                        <img className="boxImages" style={{height:"300px"}} src="../images/box3.jpg" alt="Box1"/>
                    </div>
               
             
                    <div style={{float:"left",clear:"both"}}>
                        <img className="boxImages" src="../images/box4.jpg" alt="Box1"/>
                    </div>
                    <div style={{float:"left"}}>
                        <img className="boxImages" src="../images/box5.jpg" alt="Box2"/>                    
                    </div>
                    <div style={{float:"left"}}>
                        <img className="boxImages" src="../images/box6.jpg" alt="Box1"/>
                    </div>
                
          </div>
            
        )
    }
}