const generateImagePath = (name) => `src/assets/${name}.png`;

const imageNames = [
  "logo",
  "fb",
  "winsta",
  "wwht",
  "wyou",
  "wf",
  "pencil",
  "search",
  "group",
  "frame",
  "ticket",
  "airplane",
  "percent",
  "rating"
];

const IMAGES = imageNames.reduce((acc, name) => {
  acc[name.toUpperCase()] = generateImagePath(name);
  return acc;
}, {}); 


export { IMAGES };
