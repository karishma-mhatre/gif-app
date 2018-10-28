import React, { Component } from 'react';

class GIFDetails extends Component {
    render() {
        return (
            <div classNAme="flex-container">
                <div>
                    <img src={this.props.gifDetails.images.original.url} 
                        width={this.props.gifDetails.images.original.width} 
                        height={this.props.gifDetails.images.original.height} 
                        alt={this.props.gifDetails.title}>
                    </img>
                </div>
                <div>
                    <input type="text" value={this.props.gifDetails.bitly_url}></input>
                </div>
            </div>
        );
    }
}

export default GIFDetails;