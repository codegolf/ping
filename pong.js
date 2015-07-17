/* eslint-disable */

K = 13,
x = W = 27,
H = 297,
X = Y =
setInterval(function() {
    for (
      h = "",
      K = K < 0 ? 0 : K > 24 ? 24 : K,
      X *= x % W ? 1 : -1,
      x < W ?
        Y *= -1 :
        x > H && (
          Y *= Math.abs(x - H - K - 2) < 2 ?
            -1 :
            p
        ),
      x += Y * (W + X * Y),
      i = 0;
      i++ < H + K;
    )
      h += i % W ?
        i == x ? 0 : " " : "\n";
    p.innerText = h + 888
}, 99);