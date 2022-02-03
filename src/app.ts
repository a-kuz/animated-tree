import P5 from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./styles.scss";
import { drawIt } from "./drawing";
let axiom = "22220";

const sketch = (p5: P5) => {
  let seed = Math.random() * 90;
  let dl = 1;

  // The sketch setup method
  p5.setup = () => {
    const canvas = p5.createCanvas(900, 700);
    canvas.parent("app");
    p5.loop();
    p5.background("white");
    //p5.frameRate(7);
  };
  p5.mouseClicked = () => {
    seed++;
    dl = 0.1;
    p5.loop();
  };
  p5.draw = () => {
    p5.randomSeed(seed);
    p5.background("#FFF");

    p5.translate(450, 700);
    axiom = drawIt(p5, dl, axiom);

    if (dl < 11.3) dl = p5.lerp(1, 12, dl / 12 + 0.001);
    else p5.noLoop();
  };
};

new P5(sketch);
