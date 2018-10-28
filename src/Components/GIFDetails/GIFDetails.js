import React, { Component } from 'react';

class GIFDetails extends Component {
    render() {
        return (
            <div className="flex-container">
                <div>
                    <img src={this.props.gifDetails.images.original.url} 
                        width={this.props.gifDetails.images.original.width} 
                        height={this.props.gifDetails.images.original.height} 
                        alt={this.props.gifDetails.title}>
                    </img>
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default GIFDetails;