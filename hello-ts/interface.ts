interface Point {
  x: number,
  y: number
}

                            // Line anotation
/* let drawPoint = (point: { x: number, y: number }) => {
  // ...
} */

let drawPoint = (point: Point) => {
  // ...
}

drawPoint({
  x: 1,
  y: 2
})