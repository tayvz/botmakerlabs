$.fn.typewriter = function() {
  this.each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
      c.html("");
          var e = function() {
            if ("<" == b.substring(a, a + 1)) {
              var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span
