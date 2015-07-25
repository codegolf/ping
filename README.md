# PING - A Game in < 256 Bytes of HTML+JS

A super minimalistic mix of the classic Pong and Breakout games (without the bricks) in < 256 bytes of HTML and JS. Golfed by [@aemkei](http://aem1k.com), [@subzey](https://github.com/subzey) and […](https://github.com/codegolf/ping/pulls).

### Demo

[PLAY THE DEMO](http://rawgit.com/codegolf/ping/master/index.html)!

Use your keyboard to control the paddle movement.

### Source (226 bytes)

```html
<body onload=k=13,x=W=27,X=Y=1,setInterval('for(i=h="
",k=k<0?0:24<k?24:k,X=x%W?X:-X,Y=x<0?1:297<x?1%(x-299
-k)?p:-1:Y,x+=Y*(W+X*Y);i++<297+k;p.innerHTML=h+888)h
+=i%W?i^x?" ":0:"|\\n"',99) onkeydown=k+=event.which-
38><pre id=p>
```

See the [annotated source](https://github.com/codegolf/ping/blob/master/annotated.js) for details.


### Gameplay Video

![Ping](https://raw.githubusercontent.com/codegolf/ping/master/ping.gif)