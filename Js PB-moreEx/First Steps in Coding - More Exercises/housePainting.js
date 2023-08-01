function housePainting(input) {
  let h = Number(input[0]);
  let l = Number(input[1]);
  let hTriangle = Number(input[2]);

  let rearWall = h * l;
  let window = 1.5 * 1.5;
  let rearWalls = 2 * rearWall - 2 * window;
  let backWall = h * h;
  let enter = 1.2 * 2;
  let frontWalls = backWall * 2 - enter;
  let wallArea = rearWalls + frontWalls;

  let green = wallArea / 3.4;

  let roofs = rearWall * 2;
  let triangle = 2 * (h * hTriangle) / 2;
  let roofArea = roofs + triangle;
   
  let red = roofArea/4.3;

  console.log(green.toFixed(2));
  console.log(red.toFixed(2));
}
housePainting([6, 10, 5.2]);
