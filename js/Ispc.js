var filter = "win16|win32|win64|mac|macintel";
var vWebType : Ispc = "";  //might work for global var

function Ispcornot() {
  if (navigator.platform ) {
   if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
     // Not Pc Platform
    vWebType = "NOTPC";
   } else {
     // Pc Platform
    vWebType = "PC";
   }
  }
}
