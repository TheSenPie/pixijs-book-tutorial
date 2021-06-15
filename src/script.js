let Container = PIXI.Container
    Sprite = PIXI.Srite;

// create the renderer
let renderer = PIXI.autoDetectRenderer(256, 256, {
    antialias: false,
    transparent: false,
    resolution: 1
});

// add the canvas to the HTML document
document.body.appendChild(renderer.view);
scaleToWindow(renderer.view);

window.addEventListener("resize", function(event){ 
    scaleToWindow(renderer.view);
});

// create a container object called the `stage`
let stage = new Container();

// tell the `renderer` to `render` the `stage`
renderer.render(stage);
