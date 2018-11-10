import React, { Component } from 'react';
import GIFList from '../GIFList/GIFList';
import GIFDetails from '../GIFDetails/GIFDetails';

class Container extends Component { 
    render() {
        if(this.props.error){
            return (
                    <div className="container container_white-font">
                        Something went wrong! Please try again later...
                    </div>
                );
        }else if(this.props.isSearchContent) {
            if(!this.props.isLoaded) {
                return (
                    <div className="container container_white-font">
                        Search anything...
                    </div>
                );
            }else {
                return (
                    <GIFList GIFList={this.props.GIFList} 
                            setGIFDetailsId={this.props.setGIFDetailsId} >
                    </GIFList>
                    );
            }
        }else {
            let gifDetails = this.props.GIFLis.filter(function(gif) {
                return gif.id === this.props.GIFDetailsId;
            });

            return (
                <GIFDetails gifDetails={gifDetails[0]}>
                </GIFDetails>
                );
        }
    }
}

export default Container;