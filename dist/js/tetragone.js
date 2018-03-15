/*
Tetragone Grid System
by Malo Widerspach
mowh.fr
github.com/m0wh/tetragone
*/

var tetragone = function(ttClassName = "tetragone", ttMaxColumns = 3) {
  var ttGrids = document.getElementsByClassName(ttClassName);
  for (var g = 0; g < ttGrids.length; g++) {
    var ttGridElements = ttGrids[g].children;
    var e = ttGridElements.length;
    while (e > 0) {
      if (e >= ttMaxColumns) {
        var ttGridElementWidth = Math.round( Math.random() * (ttMaxColumns-1) ) + 1;
      } else {
        var ttGridElementWidth = Math.round( Math.random() * (e-1) ) + 1;
      }
      for (var i = 0; i < ttGridElementWidth; i++) {
        ttGridElements[ttGridElements.length - e + i].classList.add("tg-" + ttGridElementWidth);
      }
      e-=ttGridElementWidth
    }
  }
}
