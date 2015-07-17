/*eslint-disable */

K = 13;

x =
W = 27
H = 297

X =
Y =

setInterval(function() {

  h = "";

  K = Math.max(Math.min(24, K), 0)

  if (x%W == 0) {
    X *= -1;
  }

  if (x < W) {
    Y *= -1;
  } else if (x > H) {
    Y *= Math.abs(x-H-K-2) < 2 ? -1 : p;
  }

  x += Y*(W+X*Y);

  for (i=0;i++<H+K;){
    if (i%W==0){
      h+= "\n";
    } else if (i == x){
      h+= 0;
    } else {
      h += " ";
    }
  }

  p.innerText = h += 888;

},99)