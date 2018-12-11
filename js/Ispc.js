var filter = "win16|win32|win64|mac|macintel";
var vWebType = "";

if (navigator.platform ) {
 if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
   // Not PC Platform
  vWebType = "NOTPC";
 } else {
   // PC Platform
  vWebType = "PC";
 }
}
