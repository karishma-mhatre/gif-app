import React, { Component } from 'react';
import GIFList from '../GIFList/GIFList';
import GIFDetails from '../GIFDetails/GIFDetails';

class Container extends Component { 
    render() {
        if(this.props.error){
            return (<div>Error</div>);
        }else if(this.props.isSearchContent) {
            if(!this.props.isLoaded) {
                return (<div>Loading</div>);
            }else {
                return (
                    <GIFList GIFList={this.props.GIFList} 
                            setGIFDetailsId={this.props.setGIFDetailsId} >
                    </GIFList>
                    );
            }
        }else {
            console.log("in else");
            console.log(this.props);
            let list = this.props.GIFList;
            let gifId = this.props.GIFDetailsId
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