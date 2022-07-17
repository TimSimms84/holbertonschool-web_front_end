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
