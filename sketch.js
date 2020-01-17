let particles = []
let n = 20
let G = .00001
function setup() {
  createCanvas(windowWidth, windowWidth);
  noStroke()
  for (i=0; i<n; i++) {
    particles.push(new Particle())
  }
  // particles[0].mass = 1000
  // particles[0].radius = 50
  // frameRate(1)
  for (pt of particles) {
    pt.mass = Math.random()*10
  }
}
function draw() {
  background(0)
  for(pt of particles) {
    for(other of particles) {
      if (pt !== other) {
        pt.calculateGravity(other)
      }
    }
    pt.update()
    pt.render()
  }
  // if (frameCount == 10) {
    // noLoop()
  // }
}
