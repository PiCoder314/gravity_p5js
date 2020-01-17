class Particle {
  constructor(x=Math.random()*window.innerWidth, y=Math.random()*window.innerWidth) {
    this.radius = 10
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.mass = 1
  }
  applyForce(force){
    const acc = force.copy().div(this.mass)
    this.acc.add(acc)
  }
  render() {
    noFill()
    stroke(255)
    ellipse(this.pos.x,this.pos.y,this.radius,this.radius)
  }
  calculateGravity(other) {
    const m = this.mass
    const M = other.mass
    const d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y)
    let force = createVector(-this.pos.x+other.pos.x, -this.pos.y+other.pos.y)
    force.setMag((G*m*M)/d*d)
    this.applyForce(force)
    // other.applyForce(force)
  }
  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    // this.vel.limit(1)
    this.acc.mult(0)
  }
}
