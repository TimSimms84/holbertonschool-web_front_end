/**Write a new function named createElement:

It accepts one argument data (String)
It creates a paragraph element
The content of the paragraph is set to data
It appends to the document body the paragraph
Create a new function named queryWikipedia:

It accepts one argument callback (function)
Using XMLHttpRequest, it get the article of Stack Overflow with the URL https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*
Once the fetch is correctly executed, it calls the callback function with the extract of the API response
Call queryWikipedia with createElement as callback */
function createElement(data) {
  let pTag = document.createElement("p");
  pTag.innerText = data;
  document.body.append(pTag);
}

function queryWikipedia(callback) {
  let myReq = new XMLHttpRequest;
  myReq.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  myReq.send();
  myReq.onload = function () {
    json = JSON.parse(myReq.response);
    callback(json.query.pages[21721040].extract);
  }
}

queryWikipedia(createElement);
