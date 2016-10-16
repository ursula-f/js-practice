!function($) {

  var
      shake = new TimelineLite(),
      firstDot = $(".dot-one"),
      dotA = $(".dotA"),
      dotB = $(".dotB"),
      dotC = $(".dotC"),
      dotD = $(".dotD"),
      dotGroup = $(".dotGroup"),
      dotAPath = [{x:0, y:0}, {x:40, y:-40}, {x: 150, y: -120}],
      dotBPath = [{x:0, y:0}, {x:-40, y:40}, {x: -150, y: -120}],
      dotCPath = [{x:0, y:0}, {x: -240, y:-40}, {x:-150, y: 120}],
      dotDPath = [{x:0, y:0}, {x:240, y:40},  {x:150, y:120}],
      body = $("body");

    shake

           .from(firstDot, 0.2, {x:"+=30", yoyo:true, repeat:3})
           .to(firstDot, 0.2, {x:"-=30", yoyo:true, repeat:3})
             .from(firstDot, 0.2, {x:"+=30", yoyo:true, repeat:3})
           .to(firstDot, 0.2, {x:"-=30", yoyo:true, repeat:3})
           .fromTo(dotGroup, 0.2, {autoAlpha:0},{autoAlpha:1}, "rim")
           .to(dotA, 2, {bezier:{curviness: 0.25, values:dotAPath }, ease:Power4.easeOut}, "rim")
           .to(dotB, 1, {bezier:{curviness: 0.25, values:dotBPath }, ease:Power2.easeOut}, "rim+=0.15")
           .to(dotC, 2, {bezier:{curviness: 0.25, values:dotCPath }, ease:Power4.easeOut}, "rim")
           .to(dotD, 1, {bezier:{curviness: 0.25, values:dotDPath }, ease:Power3.easeOut}, "rim+=0.15");

          //  var c = document.getElementById("canvas");
          //  var ctx = c.getContext("2d");
          //  ctx.beginPath();
          //  ctx.moveTo(0, 0);
          //  ctx.lineTo(300, 150);
          //  ctx.stroke();

}(jQuery);
