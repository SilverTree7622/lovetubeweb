
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



function widthdetector() {
    var windowWidth = $( window ).width();
  if(windowWidth <= 770) {
  //창 가로 크기가 770 이상일 경우
  } else {
  //창 가로 크기가 770 보다 클 경우
  }
}
