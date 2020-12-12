// function getKanyeQuote() {
//     let ajax = new XMLHttpRequest();
//     ajax.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let KanyeQuote = JSON.parse(this.responseText);
//             let quote = KanyeQuote.quote;
//             document.getElementById("kanye-quote").innerHTML = quote
//         }
//     }

//     ajax.open('GET', 'https://api.kanye.rest', true);
//     ajax.send();
// }

// let kanyeButton = document.getElementById("kanye-button");
// kanyeButton.addEventListener("click", getKanyeQuote)




//___________________________this is ^^^^^^^ me before the es6 bullet in the assingment ^ everthing up here works  ____________________________________________________________
// this is what i gather from your advise is bellow

// class tweet {
//     content = ''

//     constructor(grabdattweet) {
//         this.getNewTweet();
//     }
//     getNewTweet() {
//         let kanyeButton = document.getElementById("kanye-button");
//         kanyeButton.addEventListener("click", getKanyeQuote)
//         let ajax = new XMLHttpRequest();
//         ajax.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 let this.content = JSON.parse(this.responseText);
//                 let quote = KanyeQuote.quote;
//                 document.getElementById("kanye-quote").innerText = quote
//             }
//         }

//         ajax.open('GET', 'https://api.kanye.rest', true);
//         ajax.send();
//     }







class tweet {
    content = '';

    constructor(grabdattweet) {
        this.getNewTweet();
    }
    getNewTweet() {
        let kanyeButton = document.getElementById("kanye-button");
        kanyeButton.addEventListener("click", function () {
            let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    this.content = JSON.parse(this.responseText);
                    document.getElementById("kanye-quote").innerText = this.content.quote
                }
            }

            ajax.open('GET', 'https://api.kanye.rest/', true);
            ajax.send();
        });
    }
  
}
  let variableName = new tweet();

