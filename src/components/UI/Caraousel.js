import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Caraousel extends Component {
    render() {
        //const url = "http://63.142.251.101:3000/" + props.imageUrl;
        return (
            <Carousel>
                <div>
                    <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src= "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

//ReactDOM.render(<Caraousel />, document.querySelector('.demo-carousel'));
export default Caraousel;