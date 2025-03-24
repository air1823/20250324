let all1, all2;
let frame1 = 0, frame2 = 0;
let button1, button2;
let showAll1 = false, showAll2 = false;
let iframe;

function preload() {
  all1 = loadImage('all1.png');
  all2 = loadImage('all2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => showAll1 = true);
  button1.mouseOut(() => showAll1 = false);
  
  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => showAll2 = true);
  button2.mouseOut(() => showAll2 = false);
  button2.mousePressed(() => {
    if (!iframe) {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://air1823.github.io/20250317/');
      iframe.position(windowWidth * 0.1, windowHeight * 0.2);
      iframe.size(windowWidth * 0.8, windowHeight * 0.6);
    }
  });
}

function draw() {
  background("#dde5b6");
  
  if (showAll1) {
    let frameWidth = 56; // 圖片 all1.png 的寬度為 ，禎數為 7
    let frameHeight = 40; // 圖片 all1.png 的高度為 40
    image(all1, 50, 150, frameWidth, frameHeight, frame1 * frameWidth, 0, frameWidth, frameHeight);
    if (frameCount % 20 === 0) { // 調整動畫速度
      frame1 = (frame1 + 1) % 7;
    }
  } else {
    frame1 = 0; // 重置動畫
  }
  
  if (showAll2) {
    let frameWidth = 58.7; // 圖片 all2.png 的寬度為 ，禎數為 8
    let frameHeight = 39; // 圖片 all2.png 的高度為 
    image(all2, 50, 150, frameWidth, frameHeight, frame2 * frameWidth, 0, frameWidth, frameHeight);
    if (frameCount % 20 === 0) { // 調整動畫速度
      frame2 = (frame2 + 1) % 8;
    }
  } else {
    frame2 = 0; // 重置動畫
  }
}
