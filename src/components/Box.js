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
  componentDidMount() {
    var xhr = new XMLHttpRequest();//XMLHttp 객체 만들기
    xhr.onreadystatechange = function() { //콜백함수 쓰기
        if(this.readyState === 4 && this.status === 200){//readyState 4. 데이터를 전부 받은 상태, 200 요청이 성공이면    
            //데이터로 해야 할 일 하기    
            quotesData = JSON.parse(xhr.response);      
            let rdnIdx = Math.floor(Math.random()*102)
            currentQuote = quotesData.quotes[rdnIdx].quote;
            currentAuthor = "- " + quotesData.quotes[rdnIdx].author;

            document.querySelector(".quote").innerHTML = currentQuote
            document.querySelector(".author").innerHTML = currentAuthor
        }
    };

    /*
    GET : 대부분의 요청에 사용, 서버에서 무언가 얻기 위해 사용
    POST : 서버에 데이터를 보내기 위해 웹 form과 자주 함께 자주 사용, 서버에 저장, 삭제, 업데이트 될 데이터를 보낼때 사용
    */
    xhr.open("GET", json, true); //(요청 유형, 서버주소, 비동기여부)
    xhr.send(); //POST의 경우 인자로 파라미터
    this.setState({
        quote: currentQuote,
        author: currentAuthor
    })
  }
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

let xhr = new XMLHttpRequest();
xhr.open('GET', json);
xhr.send();
xhr.onload = () => {
  quotesData = JSON.parse(xhr.response);
}
// let quotesData1;
// function getQuotes(func) {
//     return $.ajax({
//       headers: {
//         Accept: 'application/json'
//       },
//       url:
//         'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
//       success: function (jsonQuotes) {
//         if (typeof jsonQuotes === 'string') {
//           quotesData1 = JSON.parse(jsonQuotes);
//         }
//       }
//     });
//   }
//   function getRandomQuote() {
//     return quotesData1.quotes[
//       Math.floor(Math.random() * quotesData1.quotes.length)
//     ];
    
//   }
//   function getQuote() {
//     let randomQuote = getRandomQuote();
//     console.log(randomQuote)
//   }
function setColor() {
    let rdnIndex = Math.floor(Math.random()*13);
    $("body").css("background-color", COLOR[rdnIndex]);
    $(".rndColor").css("color", COLOR[rdnIndex])
    $(".rndColorBorder").css("border", `2px solid ${COLOR[rdnIndex]}`)
}

$(document).ready(() => {
    // getQuotes().then(() => {
    //     getQuote();
    //   });
    setColor();
    //let box = new Box();
   // box.ajaxRequest(json);

    })


    


export default Box;
