import React from 'react'
import ReactDOM from 'react-dom'
import '../index.scss'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import TopSection from './topSection'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import Section5 from './section5'
import Section6 from './section6'
import Section7 from './section7'
import Section8 from './section8'
import Section9 from './section9'
import Section10 from './section10'
import Footer from './footer.js'

class Index extends React.Component{
    render(){
        return(
            <div className="container">
                <TopSection/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section7/>
                <Section8/>
                <Section9/>
                <Section10/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('container'))