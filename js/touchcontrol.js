// ispc.js의 첫번째 함수에서 쓰이는 함수


function Touchfunc(vWebType) {
  if (vWebType == "NOTPC") {
    console.log("This platform is : Not PC");
  }else if(vWebType == "PC"){
    console.log("This platform is : PC");
  }else {
    console.log("System Error: in 'lovetubeweb/js/touchcontrol.js'")
  }

}
