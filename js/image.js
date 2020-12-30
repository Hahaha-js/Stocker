

var container = document.querySelector('#container');
var pageElement = document.querySelector('#page');

function Data() {
  var pageVal = pageElement.value;
  if (pageVal <= 0) {
    alert('페이지 값을 확인해 주세요');
  } else {
    container.innerHTML = '';          // 이미지 누적 안되게 가져오는 법           
    getData(pageVal);
  }
}

function getData() {
  var pageVal = pageElement.value;
  var url = `https://picsum.photos/v2/list?page=${pageVal}&limit=18`;
  axios.get(url).then(function (res) {
    console.log(res);
    if (res.status === 200) { //통신이 잘됐다 응답이 왔다.라는 뜻
      res.data.forEach(function (item) {
        makeItem(item);
      });
    }
  });
}

function makeItem(item) {
  var modUrl = `https://picsum.photos/id/${item.id}/300`;
  var img = document.createElement('img');
  img.src = modUrl;
  container.append(img);

}






