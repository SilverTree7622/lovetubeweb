// 컴퓨터인지 아닌지 알아보는 함수
function Ispcornot() {
  var filter = "win16|win32|win64|mac|macintel";
  var vWebType = "";  //might work for global variable

  if (navigator.platform ) {
   if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
     // Not Pc Platform
    vWebType = "NOTPC";
   } else {
     // Pc Platform
    vWebType = "PC";
   }
  }

  // To js/touchcontrol.js event
  Touchfunc(vWebType);
}


// windowwidth의 크기(jquery)를 측정해 컴퓨터인지 아닌지 판별하는 함수
// windows width detect function
function widthdetect() {
    var windowWidth = $( window ).width();
  if(windowWidth <= 770) {
  //창 가로 크기가 770 이상일 경우
  console.log("가로 화면 px크기에 따라서 not pc로 인식");
  } else {
  //창 가로 크기가 770 보다 클 경우
  console.log("가로 화면 px크기에 따라서 pc로 인식");
  }

  console.log("보이는 창 크기 : " + windowWidth + "px");

}
