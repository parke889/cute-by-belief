const objects = [
  {
    id: "duck",
    title: "Duck",
    creator: "pangj",
    date: "2026-02-25",
    image:
      "./asset/imgs/duck.png",
    x: 16,
    y: 12,
    w: 140,
    defaults: [
      "fell in love",
      "love this so much",
      "cute !! <3",
      "duck with piercings are acc adorable",
      "can’t resist its cuteness",
      "i want this duck so bad",
      "love cutieee ♡♡♡♡♡",
      "soo cuteee"
    ]
  },
  {
    id: "mushroom",
    title: "Mushroom",
    creator: "pangj",
    date: "2026-02-24",
    image:
      "./asset/imgs/mushroom.png",
    x: 58,
    y: 5,
    w: 90,
    defaults: ["best cap ever", "tiny cutieee", "so round"]
  },
  {
    id: "bowl",
    title: "Bowl",
    creator: "pangj",
    date: "2026-02-23",
    image:
      "./asset/imgs/bowl.png",
    x: 82,
    y: 11,
    w: 118,
    defaults: ["quietly cute", "i trust this bowl"]
  },
  {
    id: "shell",
    title: "Albino softshell turtle",
    creator: "sterc",
    date: "2/21/2026 21:05:14",
    image:
      "./asset/imgs/turtle.png",
    x: 37,
    y: 97,
    w: 98,
    defaults: ["angel object", "looks blessed already"]
  },
  {
    id: "stone",
    title: "Stone",
    creator: "pangj",
    date: "2026-02-20",
    image:
      "./asset/imgs/stone.png",
    x: 65,
    y: 35,
    w: 80,
    defaults: ["perfect pebble", "stone but emotionally soft"]
  },
  {
    id: "carrots",
    title: "Traffic Cone",
    creator: "pangj",
    date: "2026-02-21",
    image:
      "./asset/imgs/cone.png",
    x: 77,
    y: 28,
    w: 158,
    defaults: ["I want one on my shelf", "loveee", "so cute!!🧡", "cute cone", "✧˖°🧡☼⋆｡˚👷⊹₊", "⋆༺𓆩⚠️𓆪༻⋆", "♡🚧♡", "like this!"]
  },
  {
    id: "Roasted Chicken",
    title: "Roasted Chicken",
    creator: "young",
    date: "2026-03-02",
    image:
      "./asset/imgs/cute chicken.png",
    x: 8,
    y: 32,
    w: 122,
    defaults: ["🍗🧡", "it's crossing its legs 🩰🦢", "🍗✨shinyy✨🍗", "cute posture", "iconic", "love", "love", "🍗✨shinyy✨🍗", "🧡", "🍗🍗🍗🍗🍗🍗", "🫶🥹", "🍗🧡", "🥹", "🧡", "🐓.𖥔 ݁ ˖   ✦    ‧₊˚ ⋅", "🐓🐓🐓", "🧡", "🧡", "🧡", "🧡"]
  },
  {
    id: "broccoli",
    title: "Broccoli",
    creator: "pangj",
    date: "2026-02-23",
    image:
      "./asset/imgs/broccoli.png",
    x: 31,
    y: 42,
    w: 200,
    defaults: ["broccoli with aura", "i support this shape"]
  },
  {
    id: "spiky-seed",
    title: "Seed Cluster",
    creator: "pangj",
    date: "2026-02-24",
    image:
      "./asset/imgs/sweetgumballs.png",
    x: 56,
    y: 64,
    w: 222,
    defaults: ["unexpectedly adorable", "punk but cute"]
  },
  {
    id: "bread",
    title: "Bread Roll",
    creator: "pangj",
    date: "2026-02-24",
    image:
      "./asset/imgs/bun.png",
    x: 8,
    y: 61,
    w: 134,
    defaults: ["soft king", "warm loaf energy"]
  },
  {
    id: "gourd",
    title: "Gourd",
    creator: "pangj",
    date: "2026-02-25",
    image:
      "./asset/imgs/lp.png",
    x: 82,
    y: 91,
    w: 154,
    defaults: ["storybook vegetable", "so whimsical"]
  },
  {
    id: "salt",
    title: "Salt Shaker",
    creator: "pangj",
    date: "2026-02-19",
    image:
      "./asset/imgs/ricesalt.png",
    x: 54,
    y: 84,
    w: 308,
    defaults: ["tiny seasoning icon", "cute utility object"]
  },
  {
    id: "cone",
    title: "Cone",
    creator: "pangj",
    date: "2026-02-18",
    image:
      "./asset/imgs/sanitizerBIG.png",
    x: 18,
    y: 80,
    w: 222,
    defaults: ["safety but make it cute", "orange legend"]
  },
  // {
  //   id: "vinyl",
  //   title: "Record",
  //   creator: "pangj",
  //   date: "2026-02-18",
  //   image:
  //     "./asset/imgs/lp.png",
  //   x: 43,
  //   y: 80,
  //   w: 100,
  //   defaults: ["playful disc", "music object supremacy"]
  // },
  {
    id: "birdhouse",
    title: "Bird House",
    creator: "pangj",
    date: "2026-02-20",
    image:
      "./asset/imgs/pumpkin.png",
    x: 79,
    y: 49,
    w: 122,
    defaults: ["home sweet home", "pastel guardian"]
  },
  {
    id: "fish",
    title: "Fish",
    creator: "pangj",
    date: "2026-02-21",
    image:
      "./asset/imgs/fish.png",
    x: 8,
    y: 94,
    w: 222,
    defaults: ["friend shaped", "aquatic sweetheart"]
  },
  {
    id: "lemon",
    title: "Lemon",
    creator: "pangj",
    date: "2026-02-21",
    image:
      "./asset/imgs/pot.png",
    x: 38,
    y: 70,
    w: 102,
    defaults: ["sour but lovable", "can i adopt this lemon?"]
  },
  {
    id: "button",
    title: "Button",
    creator: "pangj",
    date: "2026-02-16",
    image:
      "./asset/imgs/sillypers.png",
    x: 86,
    y: 65,
    w: 194,
    defaults: ["tiny portal", "fashion baby"]
  },
  // {
  //   id: "teacup",
  //   title: "Tea Cup",
  //   creator: "pangj",
  //   date: "2026-02-17",
  //   image:
  //     "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  //   x: 86,
  //   y: 16,
  //   w: 118,
  //   defaults: ["cup of tenderness", "blessed beverage object"]
  // }
];

const STORAGE_KEY = "ccc-object-comments-v1";

const skyBg = document.getElementById("skyBg");
const objectGrid = document.getElementById("objectGrid");
const modal = document.getElementById("objectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentsLayer = document.getElementById("commentsLayer");
const closeModalBtn = document.getElementById("closeModalBtn");
const commentCount = document.getElementById("commentCount");

let activeObjectId = null;
let streamInterval = null;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function makeSky() {
  const totalStars = window.innerWidth < 760 ? 18 : 30;
  skyBg.innerHTML = "";

  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("div");
    star.className = Math.random() > 0.18 ? "star" : "dot-cloud";

    const size = star.className === "star" ? rand(48, 130) : rand(20, 48);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${rand(-2, 96)}%`;
    star.style.top = `${rand(-1, 96)}%`;
    star.style.animationDuration = `${rand(7, 15)}s`;
    star.style.animationDelay = `${-Math.random() * 7}s`;

    skyBg.appendChild(star);
  }
}

function renderObjects() {
  objectGrid.innerHTML = "";

  objects.forEach((obj) => {
    const btn = document.createElement("button");
    btn.className = "object-card";
    btn.type = "button";
    btn.setAttribute("aria-label", `Open ${obj.title}`);
    btn.style.left = `${obj.x}%`;
    btn.style.top = `${obj.y}%`;
    btn.style.width = `${obj.w}px`;
    btn.style.setProperty("--jiggle-speed", `${rand(4.8, 7.2)}s`);
    btn.style.setProperty("--jiggle-delay", `${rand(-4, 0)}s`);

    btn.innerHTML = `<img src="${obj.image}" alt="${obj.title}" />`;
    btn.addEventListener("click", () => openModal(obj.id));

    objectGrid.appendChild(btn);
  });
}

function getStoredComments() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveStoredComments(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getCommentsFor(id) {
  const stored = getStoredComments();
  const obj = objects.find((item) => item.id === id);
  const saved = Array.isArray(stored[id]) ? stored[id] : [];
  const defaults = obj?.defaults || [];
  return [...defaults, ...saved];
}

function addCommentToObject(id, text) {
  const clean = text.trim();
  if (!clean) return;

  const stored = getStoredComments();
  if (!Array.isArray(stored[id])) stored[id] = [];
  stored[id].push(clean);
  saveStoredComments(stored);
}

function spawnComment(text) {
  const el = document.createElement("div");
  el.className = "floating-comment";
  el.textContent = text;

  el.style.setProperty("--y", `${rand(10, 84)}%`);
  el.style.animationDuration = `${rand(10, 18)}s`;
  el.style.opacity = (Math.random() * 0.25 + 0.7).toFixed(2);

  // random font size
  el.style.fontSize = `${rand(36, 10, 22)}pt`;

  commentsLayer.appendChild(el);
  el.addEventListener("animationend", () => el.remove());
}
function startCommentStream() {
  commentsLayer.innerHTML = "";
  clearInterval(streamInterval);

  const initial = getCommentsFor(activeObjectId);

  initial.slice(0, 9).forEach((text, index) => {
    setTimeout(() => {
      if (activeObjectId) spawnComment(text);
    }, index * 180);
  });

  streamInterval = setInterval(() => {
    if (!activeObjectId) return;

    const comments = getCommentsFor(activeObjectId);
    const text = comments[Math.floor(Math.random() * comments.length)];
    if (text) spawnComment(text);
  }, 900);
}

function openModal(id) {
  const obj = objects.find((item) => item.id === id);
  if (!obj) return;

  activeObjectId = id;
  modalImage.src = obj.image;
  modalImage.alt = obj.title;
  modalTitle.textContent = obj.title;
  modalMeta.innerHTML = `by ${obj.creator}<br>${obj.date}`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  commentInput.value = "";
  startCommentStream();
  updateCommentCount(id);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  commentsLayer.innerHTML = "";

  clearInterval(streamInterval);
  streamInterval = null;
  activeObjectId = null;
}

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!activeObjectId) return;

  const value = commentInput.value.trim();
  if (!value) return;

  addCommentToObject(activeObjectId, value);
  spawnComment(value);

  updateCommentCount(activeObjectId);

  commentInput.value = "";
  commentInput.focus();
});
closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

// window.addEventListener("resize", makeSky);

// makeSky();
renderObjects();

function updateCommentCount(id) {
  const count = getCommentsFor(id).length;
  commentCount.textContent = `${count} comments`;
}