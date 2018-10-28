import React, { Component } from 'react';
import GIFList from '../GIFList/GIFList';
import GIFDetails from '../GIFDetails/GIFDetails';

class Container extends Component { 
    render() {
        if(this.props.error){
            return (<div className="flex-container color-white large-font">Something went wrong! Please try again later...</div>);
        }else if(this.props.isSearchContent) {
            if(!this.props.isLoaded) {
                return (<div className="flex-container color-white large-font">Search anything...</div>);
            }else {
                return (
                    <GIFList GIFList={this.props.GIFList} 
                            setGIFDetailsId={this.props.setGIFDetailsId} >
                    </GIFList>
                    );
            }
        }else {
            let list = this.props.GIFList;
            let gifId = this.props.GIFDetailsId;

            let gifDetails = list.filter(function(gif) {
                return gif.id === gifId;
            });

            return (
                <GIFDetails gifDetails={gifDetails[0]}>
                </GIFDetails>
                );
        }
    }
}

export default Container;