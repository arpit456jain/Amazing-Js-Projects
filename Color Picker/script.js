const { Component } = React;
const { render, findDOMNode } = ReactDOM;

const quarter = Math.PI * 0.5;
const third = Math.PI * 2 / 3;
const twoThirds = third * 2;
const thirtyDegrees = 30 * (Math.PI / 180);

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hue: 0,
      saturation: 100,
      lightness: 50,
      changing: false };

    this.svg = null;
    this.point = null;
    this.dragEvent = this.drag.bind(this);
    this.stopDragEvent = this.stopDrag.bind(this);
  }
  componentDidMount() {

  }
  startDrag(e) {
    let point = this.getPoint(e);

    window.addEventListener("mousemove", this.dragEvent);
    window.addEventListener("mouseup", this.stopDragEvent);
    this.setState({ changing: true });
  }
  drag(e) {
    let point = this.getPoint(e);
    var angle = Math.atan2(point.y, point.x);

    var distance = Math.min(
    Math.sqrt(point.x * point.x + point.y * point.y),
    148);


    point.x = Math.cos(angle) * distance;
    point.y = Math.sin(angle) * distance;
    this.reticle.setAttribute("cx", point.x);
    this.reticle.setAttribute("cy", point.y);

    let targetAngle = angle + quarter;
    let lightness = 50;
    let saturation = 100;
    let percent = distance / 148;

    if (targetAngle > 0 && targetAngle < third) {
      //light color
      saturation = percent * 50 + 50;
      lightness = targetAngle / third * percent * 50 + 50;
    } else if (targetAngle > third && targetAngle < twoThirds) {
      //achromatic
      // let mult = -(((targetAngle / third)*2) - 3);
      // lightness=(50*mult)+50;

      // 			let mult = (percent*0.5)+0.5;
      // 			if(targetAngle<Math.PI){
      // 				lightness =( Math.abs(targetAngle / third - 2)) * 100;
      // 				console.log(mult)

      // 			}

      saturation = (1 - percent) * 50;

      lightness = 50;

      let mult = (targetAngle / third - 1.5) * -1;
      lightness = mult * 100 * percent + 50;

    } else {
      if (angle < 0) {
        //darkblue top
        percent = (1 - angle * -1 / Math.PI) * 2;
        lightness = percent * 37.5 + 12.5;
      } else {
        //darkblue bottom
        lightness = (targetAngle - twoThirds) / thirtyDegrees * 12.5;
      }
    }

    this.setState({ lightness: lightness, saturation: saturation });
  }
  stopDrag(e) {
    window.removeEventListener("mousemove", this.dragEvent);
    window.removeEventListener("mouseup", this.stopDragEvent);
    this.setState({ changing: false });
  }

  getPoint(e) {
    let point = this.svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    return point.matrixTransform(this.svg.getScreenCTM().inverse());
  }

  setReticle() {

  }

  render() {
    const { hue, saturation, lightness, changing } = this.state;
    return /*#__PURE__*/(
      React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "-200 -200 400 400",
        cursor: changing ? "none" : "auto",
        ref: el => {
          this.svg = el;
        },
        onMouseDown: e => {
          this.startDrag(e);
        } }, /*#__PURE__*/

      React.createElement("linearGradient", { id: "greyscale", x1: "-128", x2: "128", gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/
      React.createElement("stop", { offset: "0%", stopColor: "#000" }), /*#__PURE__*/
      React.createElement("stop", { offset: "100%", stopColor: "#fff" })), /*#__PURE__*/

      React.createElement("radialGradient", { id: "color", cx: "0%", cy: "-148", r: "256", gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/
      React.createElement("stop", { offset: "0%", stopColor: `hsl(${hue},100%,50%)` }), /*#__PURE__*/
      React.createElement("stop", { offset: "57.5803918%", stopColor: `hsl(${hue},100%,50%)`, stopOpacity: "0.5" }), /*#__PURE__*/
      React.createElement("stop", { offset: "100%", stopColor: `hsl(${hue},100%,50%)`, stopOpacity: "0" })), /*#__PURE__*/


      React.createElement("circle", { fill: "url(#greyscale)", cx: "0", cy: "0", r: "148" }), /*#__PURE__*/
      React.createElement("circle", { fill: "url(#color)", cx: "0", cy: "0", r: "148" }), /*#__PURE__*/

      React.createElement("circle", {
        fill: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        cx: "-150",
        cy: "-150",
        r: "10",
        stroke: "#fff",
        ref: el => {
          this.reticle = el;
        } }), /*#__PURE__*/


      React.createElement("text", { y: "-160", textAnchor: "middle", fontFamily: "sans-serif" }, `hsl(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`)));


  }}




render( /*#__PURE__*/React.createElement(ColorPicker, null), document.getElementById("react"));