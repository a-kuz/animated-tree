import P5 from "p5";
import { Turtle } from "./Turtle";

export function drawIt(p5: P5, pdl = 9, axiom = "22220") {
  let startDl = pdl;
  let maxDl = 12;
  Turtle.p5 = p5;

  let axmTemp = "";
  let itr = 11;
  let dl = pdl;

  let stc = [];
  let turtle: Turtle = new Turtle();

  const randint = p5.random;

  let translate = { "1": "21", "0": "1[-20]+20" };
  // console.log(Array.from(axiom));

  const t = Array.from(Array(itr).keys());
  if (axiom === "22220")
    for (let k in t) {
      // console.log({ k });
      for (let ch of Array.from(axiom)) {
        // console.log({ ch, trch: translate[ch] });
        if (translate[ch]) axmTemp += translate[ch];
        else axmTemp += ch;
      }
      axiom = axmTemp;
      axmTemp = "";
    }
  //console.log({ axiom });
  let mul = p5.map(startDl, 0, maxDl, 0, 3);
  for (let ch of Array.from(axiom)) {
    //console.log(ch);
    if (ch === "+") turtle.right(randint(-16, 16));
    else if (ch === "-") turtle.left(randint(-16, 16));
    else if (ch === "2") {
      if (randint(0, 10) > 5) {
        turtle.forward(dl, mul * 2.1);
      }
    } else if (ch === "1") {
      if (randint(0, 10) > 5) {
        turtle.forward(dl, mul * 2);
      }
    } else if (ch === "0") {
      stc.push(turtle.pensize());

      turtle.pensize(mul);
      let r = randint(0, 10);
      if (r < 3) turtle.pencolor("#009900AA");
      else if (r > 6) turtle.pencolor("#667900");
      else turtle.pencolor("#20BB00");
      turtle.forward(dl - p5.map(startDl, 0, maxDl, 0, 2), mul);
      turtle.pensize(stc.pop());
      turtle.pencolor("#111");
    } else if (ch === "[") {
      turtle.pensize(turtle.pensize() * 0.79);
      stc.push(turtle.pensize());
      stc.push(turtle.x);
      stc.push(turtle.y);
      stc.push(turtle.angle);
    } else if (ch === "]") {
      //turtle.penup();
      turtle.setHeading(stc.pop());
      turtle.y = stc.pop();
      turtle.x = stc.pop();

      turtle.pensize(stc.pop());
      // turtle.pendown();
    }
  }
  // turtle.update();
  // turtle.mainloop();
  return axiom;
}
