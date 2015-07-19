/* eslint-disable */

k = 13,                         // initial paddle position
x =                             // ball position
W = 27,                         // board width
X = Y =                         // ball x and y direction
setInterval(function() {
  for (
    i =                         // iterator
    h = "",                     // output string

    k = k < 0 ? 0 :             // keep paddle in bounds
    	24 < k ? 24 :
    	k,

    X *= x % W ?                // reflect if ball hits wall
    	1 :
    	-1,

    Y *=                        // change Y direction
      x < 0 ? -1 :              // reflect if ball hit top border
        297 < x ? (             // if ball hits bottom border ...
          (
          	Q = x - 299 - k     // calculate distance to paddle center
          ) * Q < 4 ?           // if distance^2 is less than four
            -1 :                // ... reflect up
            p                   // otherwise break the game
      ) : 1,

    x += Y * (W + X * Y);       // update ball position based on direction

    i++ < 297 + k;              // draw field and paddle offset

    p.innerText = h + 888       // draw paddle
  )
    h +=                        // draw character
      i % W ?                   // if in bounds ...
        i ^ x ? " " : 0 :       // ... draw ball or space
      "|\n";                    // else draw border and break line

}, 99)                          // render loop