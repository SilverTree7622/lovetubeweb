
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
