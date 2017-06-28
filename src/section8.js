import React from 'react'

export default class Section1 extends React.Component {
    render() {
        return (
            <div className="topsectionAlignment section8">
                <h1> “Look deep into nature, and then you will understand everything better.”  ~Albert Einstein</h1>
                <div style={{ padding: "3%" }}> Wildlife photography is devoted to capturing animals in their natural habitats.
                    The animals are often photographed in action, such as eating, fighting, or in flight,.
                     Alternatively, more static portraits may be used to show detail of the animal
                 or to depict it in its environment</div>
                <div style={{ margin: "auto", padding: "3%" }}>
                    <button type="button" className="btn btn-default btn-lg">Contact us</button>
                </div>
            </div>
        )
    }
}