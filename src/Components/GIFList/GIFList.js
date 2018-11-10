import React, { Component } from 'react';
import './gifList.css';

class GIFList extends Component {
    render() {
        return (
            <>
                {
                    this.props.GIFList.map(element => {
                        return (
                            <div className="img-container" onClick={this.props.setGIFDetailsId} key={element.id}>
                                <img className="img-container__img" src={element.images.original.url} alt={element.title} data-id={element.id}></img>
                            </div>
                        );
                    })
                }
            </>
        );
    }
}

export default GIFList;