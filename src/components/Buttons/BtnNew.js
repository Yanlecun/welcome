import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import jQuery from 'jquery'
const $ = (window.$=window.jQuery=jQuery);

class BtnNew extends Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        
        $(".writing").fadeOut(300, "linear", ()=> {
                this.props.btnHandler()
            } );
        $(".writing").fadeIn(300, "linear");
        
    }
    render() {
        return(
            <div>
                <button className="btn btn-default rndColor rndColorBorder animated shake" onClick={this.onClickHandler}>New Quote</button>
            </div>
        )
    }   
}
 


export default BtnNew