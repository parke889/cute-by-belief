const BASE_W = 1594;
const BASE_H = 1512;
const R = 31.7813;

const GRID_START_X = 124.2634;
const GRID_START_Y = 44.8030;
const GRID_STEP_X = 63.56;
const GRID_STEP_Y = 63.56;

const gridCoords = [
  [6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],
  [4,1],[5,1],[13,1],[15,1],[16,1],
  [3,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[14,2],[15,2],[16,2],
  [2,3],[6,3],[13,3],[15,3],[16,3],
  [2,4],[6,4],[14,4],[15,4],[16,4],
  [1,5],[5,5],[15,5],[16,5],
  [1,6],[5,6],[15,6],[16,6],
  [0,7],[5,7],
  [0,8],[5,8],
  [0,9],[5,9],
  [0,10],[5,10],
  [0,11],[5,11],[15,11],[16,11],
  [1,12],[5,12],[15,12],[16,12],
  [1,13],[5,13],[15,13],[16,13],
  [2,14],[6,14],[14,14],[16,14],
  [3,15],[7,15],[13,15],[16,15],
  [4,16],[8,16],[9,16],[10,16],[11,16],[12,16],[13,16],[14,16],[15,16],[16,16],
  [5,17],[6,17],[12,17],[13,17],[15,17],[16,17],
  [7,18],[8,18],[9,18],[10,18],[11,18]
];

const connections = [
  [[6,0],[7,0]], [[7,0],[8,0]], [[8,0],[9,0]], [[9,0],[10,0]], [[10,0],[11,0]], [[11,0],[12,0]],
  [[12,0],[13,1]],
  [[4,1],[5,1]], [[5,1],[6,0]],
  [[13,1],[14,2]],
  [[15,1],[15,2]], [[15,1],[16,1]], [[15,1],[16,2]], [[16,1],[16,2]],
  [[3,2],[4,1]],
  [[6,2],[6,3]], [[6,2],[7,2]],
  [[7,2],[8,2]], [[8,2],[9,2]], [[9,2],[10,2]], [[10,2],[11,2]], [[11,2],[12,2]],
  [[12,2],[13,3]],
  [[14,2],[15,2]], [[14,2],[15,3]],
  [[15,2],[15,3]], [[15,2],[16,1]], [[15,2],[16,2]], [[15,2],[16,3]], [[16,2],[16,3]],
  [[2,3],[2,4]], [[2,3],[3,2]],
  [[6,3],[6,4]], [[6,3],[7,2]],
  [[13,3],[14,4]],
  [[15,3],[15,4]], [[15,3],[16,2]], [[15,3],[16,3]], [[15,3],[16,4]], [[16,3],[16,4]],
  [[14,4],[15,4]], [[14,4],[15,5]],
  [[15,4],[15,5]], [[15,4],[16,3]], [[15,4],[16,4]], [[15,4],[16,5]], [[16,4],[16,5]],
  [[1,5],[1,6]], [[1,5],[2,4]],
  [[5,5],[5,6]], [[5,5],[6,4]],
  [[15,5],[15,6]], [[15,5],[16,4]], [[15,5],[16,5]], [[15,5],[16,6]], [[16,5],[16,6]],
  [[5,6],[5,7]],
  [[15,6],[16,5]], [[15,6],[16,6]],
  [[0,7],[0,8]], [[0,7],[1,6]],
  [[5,7],[5,8]],
  [[0,8],[0,9]], [[5,8],[5,9]],
  [[0,9],[0,10]], [[5,9],[5,10]],
  [[0,10],[0,11]], [[5,10],[5,11]],
  [[0,11],[1,12]],
  [[5,11],[5,12]],
  [[15,11],[15,12]], [[15,11],[16,11]], [[15,11],[16,12]], [[16,11],[16,12]],
  [[1,12],[1,13]], [[5,12],[5,13]],
  [[15,12],[15,13]], [[15,12],[16,11]], [[15,12],[16,12]], [[16,12],[16,13]],
  [[1,13],[2,14]], [[5,13],[6,14]], [[15,13],[16,13]], [[14,14],[15,13]],
  [[2,14],[3,15]], [[6,14],[7,15]], [[16,13],[16,14]],
  [[3,15],[4,16]], [[7,15],[8,16]], [[13,15],[13,16]], [[13,15],[14,14]], [[16,14],[16,15]],
  [[4,16],[5,17]],
  [[8,16],[9,16]], [[9,16],[10,16]], [[10,16],[11,16]], [[11,16],[12,16]],
  [[12,16],[12,17]], [[12,16],[13,15]], [[12,16],[13,16]],
  [[13,16],[13,17]], [[13,16],[14,16]], [[14,16],[15,16]],
  [[15,16],[15,17]], [[15,16],[16,16]], [[16,15],[16,16]],
  [[5,17],[6,17]], [[6,17],[7,18]],
  [[12,17],[13,17]], [[13,17],[14,16]], [[15,17],[16,17]], [[16,16],[16,17]],
  [[7,18],[8,18]], [[8,18],[9,18]], [[9,18],[10,18]], [[10,18],[11,18]],
  [[11,18],[12,17]]
];

const DOT_COLOR = "#ffffffff";

let s = 1;
let duration = 90;
let fieldStep = 4;
let sketchHost = null;
let clusters = [];

function setup() {
  sketchHost = document.getElementById("cccSketch");
  const c = createCanvas(sketchHost.clientWidth, sketchHost.clientHeight);
  c.parent("cccSketch");
  pixelDensity(1);
  noStroke(1);
  updatePoints();
}

function windowResized() {
  if (!sketchHost) return;
  resizeCanvas(sketchHost.clientWidth, sketchHost.clientHeight);
  updatePoints();
}

function updatePoints() {
  clusters = [];

const cols = width < 760 ? 1 : 3;
const gap = width < 760 ? 0 : -170;
const clusterW = cols === 1 ? width : (width - gap * (cols - 1)) / cols;
  const clusterH = height;

  for (let i = 0; i < cols; i++) {
    const localScale = min(clusterW / BASE_W, clusterH / BASE_H) * 0.98;
    const areaX = cols === 1 ? 0 : i * (clusterW + gap);
    const ox = areaX + (clusterW - BASE_W * localScale) * 0.5;
    const oy = (clusterH - BASE_H * localScale) * 0.5;

    const pts = [];
    const dotMap = new Map();

    for (const [gx, gy] of gridCoords) {
      const d = {
        gx,
        gy,
        x: ox + (GRID_START_X + gx * GRID_STEP_X) * localScale,
        y: oy + (GRID_START_Y + gy * GRID_STEP_Y) * localScale,
        r: R * localScale
      };
      pts.push(d);
      dotMap.set(keyOf(gx, gy), d);
    }

    clusters.push({
      pts,
      dotMap,
      scale: localScale,
      fieldStep: max(1, round(1.2 * localScale))
    });
  }
}

function draw() {
  clear();

  let t = constrain((frameCount % (duration + 45)) / duration, 0, 1);
  t = easeInOutCubic(t);
  const diagProg = easeInOutCubic(constrain(map(t, 0.12, 1, 0, 1), 0, 1));

  fill(DOT_COLOR);
  noStroke();

  for (const cluster of clusters) {
    const sigma = lerp(R * cluster.scale * 0.46, R * cluster.scale * 0.69, t);
    const threshold = exp(-(sq(R * cluster.scale)) / (2 * sq(sigma))) * 1.05;

    for (const pair of connections) {
      const a = cluster.dotMap.get(keyOf(pair[0][0], pair[0][1]));
      const b = cluster.dotMap.get(keyOf(pair[1][0], pair[1][1]));
      if (!a || !b) continue;

      const dx = abs(a.gx - b.gx);
      const dy = abs(a.gy - b.gy);

      if (dx === 1 && dy === 1) {
        drawDiagonalMetaball(a, b, diagProg, cluster.scale);
      } else if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
        drawOrthogonalFieldBridge(a, b, sigma, threshold, cluster.fieldStep);
      }
    }

    for (const p of cluster.pts) {
      circle(p.x, p.y, p.r * 2);
    }
  }
}

function drawOrthogonalFieldBridge(c1, c2, sigma, threshold, currentFieldStep) {
  const pad = c1.r * 1.5;
  const minX = floor((min(c1.x, c2.x) - pad) / currentFieldStep) * currentFieldStep;
  const maxX = ceil((max(c1.x, c2.x) + pad) / currentFieldStep) * currentFieldStep;
  const minY = floor((min(c1.y, c2.y) - pad) / currentFieldStep) * currentFieldStep;
  const maxY = ceil((max(c1.y, c2.y) + pad) / currentFieldStep) * currentFieldStep;

  const denom = 2 * sigma * sigma;

  for (let y = minY; y <= maxY; y += currentFieldStep) {
    for (let x = minX; x <= maxX; x += currentFieldStep) {
      const v = pairFieldValue(
        x + currentFieldStep * 0.5,
        y + currentFieldStep * 0.5,
        c1,
        c2,
        denom
      );
      if (v >= threshold) {
        rect(x, y, currentFieldStep + 0.6, currentFieldStep + 0.6);
      }
    }
  }
}

function pairFieldValue(x, y, c1, c2, denom) {
  const dx1 = x - c1.x;
  const dy1 = y - c1.y;
  const dx2 = x - c2.x;
  const dy2 = y - c2.y;

  return (
    exp(-(dx1 * dx1 + dy1 * dy1) / denom) +
    exp(-(dx2 * dx2 + dy2 * dy2) / denom)
  );
}

function drawDiagonalMetaball(c1, c2, t, localScale) {
  if (t <= 0.001) return;

  const r1 = c1.r;
  const r2 = c2.r;
  const d = dist(c1.x, c1.y, c2.x, c2.y);
  if (d <= 0.001) return;

  const angleBetween = atan2(c2.y - c1.y, c2.x - c1.x);
  const maxDist = GRID_STEP_X * localScale * 1.55;
  if (d > maxDist) return;

  const open = lerp(0.08, 0.6, t);
  const handleLen = lerp(0.5 * localScale, 22 * localScale, t);
  const squash = lerp(0.18, 1.0, t);

  const angle1a = angleBetween + HALF_PI * open;
  const angle1b = angleBetween - HALF_PI * open;
  const angle2a = angleBetween + PI - HALF_PI * open;
  const angle2b = angleBetween - PI + HALF_PI * open;

  const p1a = createVector(c1.x + cos(angle1a) * r1, c1.y + sin(angle1a) * r1);
  const p1b = createVector(c1.x + cos(angle1b) * r1, c1.y + sin(angle1b) * r1);
  const p2a = createVector(c2.x + cos(angle2a) * r2, c2.y + sin(angle2a) * r2);
  const p2b = createVector(c2.x + cos(angle2b) * r2, c2.y + sin(angle2b) * r2);

  const h1 = p5.Vector.lerp(
    p1a,
    createVector(
      p1a.x + cos(angle1a - HALF_PI) * handleLen,
      p1a.y + sin(angle1a - HALF_PI) * handleLen
    ),
    squash
  );

  const h2 = p5.Vector.lerp(
    p2a,
    createVector(
      p2a.x + cos(angle2a + HALF_PI) * handleLen,
      p2a.y + sin(angle2a + HALF_PI) * handleLen
    ),
    squash
  );

  const h3 = p5.Vector.lerp(
    p2b,
    createVector(
      p2b.x + cos(angle2b - HALF_PI) * handleLen,
      p2b.y + sin(angle2b - HALF_PI) * handleLen
    ),
    squash
  );

  const h4 = p5.Vector.lerp(
    p1b,
    createVector(
      p1b.x + cos(angle1b + HALF_PI) * handleLen,
      p1b.y + sin(angle1b + HALF_PI) * handleLen
    ),
    squash
  );

  beginShape();
  vertex(p1a.x, p1a.y);
  bezierVertex(h1.x, h1.y, h2.x, h2.y, p2a.x, p2a.y);
  vertex(p2b.x, p2b.y);
  bezierVertex(h3.x, h3.y, h4.x, h4.y, p1b.x, p1b.y);
  endShape(CLOSE);
}

function keyOf(gx, gy) {
  return `${gx},${gy}`;
}

function easeInOutCubic(x) {
  return x < 0.5
    ? 4 * x * x * x
    : 1 - pow(-2 * x + 2, 3) / 2;
}