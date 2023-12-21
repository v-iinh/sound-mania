const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");

const rectangle1X = 0;
const rectangle1Color = "#ff5d5d";

const rectangle2X = 50;
const rectangle2Color = "#6ad1fe";

const rectangle3X = 100.05;
const rectangle3Color = "#23cf57";

const rectangle4X = 151;
const rectangle4Color = "#fe781f";

const rectangle5X = 201;
const rectangle5Color = "#fffc5d";

const rectangle6X = 251;
const rectangle6Color = "#965dff";

const rectangleWidth = 50;
const rectangleHeight = 10;
const rectangleY = 0;

gameCtx.fillStyle = rectangle1Color;
gameCtx.fillRect(rectangle1X, rectangleY, rectangleWidth, rectangleHeight);

gameCtx.fillStyle = rectangle2Color;
gameCtx.fillRect(rectangle2X, rectangleY, rectangleWidth, rectangleHeight);

gameCtx.fillStyle = rectangle3Color;
gameCtx.fillRect(rectangle3X, rectangleY, rectangleWidth, rectangleHeight);

gameCtx.fillStyle = rectangle4Color;
gameCtx.fillRect(rectangle4X, rectangleY, rectangleWidth, rectangleHeight);

gameCtx.fillStyle = rectangle5Color;
gameCtx.fillRect(rectangle5X, rectangleY, rectangleWidth, rectangleHeight);

gameCtx.fillStyle = rectangle6Color;
gameCtx.fillRect(rectangle6X, rectangleY, 49, rectangleHeight);


