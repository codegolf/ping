# Pong Game in < 256 Bytes of HTML+JS

A super minimalistic clone of the classic Pong game in < 256 bytes of HTML and JS. Golfed by [@aemkei](http://aem1k.com).

### Demo

[PLAY THE DEMO](http://rawgit.com/codegolf/pong/master/index.html)!

Use your keyboard to control the paddle movement.

### Source (231 bytes)

```html
<body onload=k=13,x=W=27,X=Y=setInterval(
'for(i=h="",k=k<0?0:24<k?24:k,X*=x%W?1:-1
,Y*=x<0?-1:297<x?(Q=x-299-k)*Q<4?-1:p:1,x
+=Y*(W+X*Y);i++<297+k;p.innerText=h+888)h
+=i%W?i^x?" ":0:"|\\n"',99) onkeydown=k+=
event.which-38><pre id=p>
```

### Gameplay Video

![Pac-Man](https://raw.githubusercontent.com/codegolf/pong/master/pong.gif)