let visitorScore = 0;
let homeScore = 0;

let homeScoreText = document.getElementById("scoreholderHome");
let visitorScoreText = document.getElementById("scoreholderVisitor");

function add1Home() {
  homeScore += 1;
  homeScoreText.innerText = homeScore;
}

function add2Home() {
  homeScore += 2;
  homeScoreText.innerText = homeScore;
}

function add3Home() {
  homeScore += 3;
  homeScoreText.innerText = homeScore;
}

function add1Visitor() {
  visitorScore += 1;
  visitorScoreText.innerText = visitorScore;
}

function add2Visitor() {
  visitorScore += 2;
  visitorScoreText.innerText = visitorScore;
}

function add3Visitor() {
  visitorScore += 3;
  visitorScoreText.innerText = visitorScore;
}
