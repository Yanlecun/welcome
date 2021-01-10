import React, { Component } from 'react'
import Quote from "./Quote.js"
import Button from "./Button.js"
import jQuery from 'jquery'

const $ = (window.$=window.jQuery=jQuery);
var currentQuote = "",
  currentAuthor = "",
  quotesData ;
let json = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
const COLOR = [
    "#e1d5c4",
    "#5fc1a0",
    "#3D2B1F",
    "#a52a2a",
    "#5f9ea0",
    "#ff7f50",
    "#e9967a",
    "#483d8b",
    "#90ee90",
    "#9370db",
    "#c9b4b1",
    "#dda0dd",
    "#663399"
    ]

class Box extends Component{
  constructor(props) {
      super(props)
      this.state = {
          quote: currentQuote,
          author: currentAuthor
      }
      this.setColor = this.setColor.bind(this)
      this.ajaxRequest = this.ajaxRequest.bind(this)
  }
  setColor() {
      let rdnIndex = Math.floor(Math.random()*13);
      $("body").css("background-color", COLOR[rdnIndex]);
      $(".rndColor").css("color", COLOR[rdnIndex])
      $(".rndColorBorder").css("border", `2px solid ${COLOR[rdnIndex]}`)
  }
  ajaxRequest(json){
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() { 
          if(this.readyState === 4 && this.status === 200){
              quotesData = JSON.parse(xhr.response);      
              let rdnIdx = Math.floor(Math.random()*102)
              currentQuote = quotesData.quotes[rdnIdx].quote;
              currentAuthor = "- " + quotesData.quotes[rdnIdx].author;

              document.querySelector(".quote").innerHTML = currentQuote
              document.querySelector(".author").innerHTML = currentAuthor
          }
      };

      xhr.open("GET", json, true); //(요청 유형, 서버주소, 비동기여부)
      xhr.send();
      this.setState({
          quote: currentQuote,
          author: currentAuthor
      })
  }
    render(){
        
        return (
            <div className="box">
                <div>
                    <Quote/>
                    <Button quote={this.state.quote + this.state.author} colorHandler={this.setColor} btnAjax={this.ajaxRequest} />
                </div>
            </div>
        )
    }
}


function setColor() {
    let rdnIndex = Math.floor(Math.random()*13);
    $("body").css("background-color", COLOR[rdnIndex]);
    $(".rndColor").css("color", COLOR[rdnIndex])
    $(".rndColorBorder").css("border", `2px solid ${COLOR[rdnIndex]}`)
}

$(document).ready(() => {
    setColor();
    let box = new Box();
    box.ajaxRequest(json);

    })


    


export default Box;
