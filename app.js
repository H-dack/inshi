const wordQuestions = [
  { en: "同値関係", jp: "反射律 対称律 推移律" },
  { en: "半順序関係", jp: "反射律 反射対称律 推移律" },
  { en: "単射", jp: "f(x)=f(y)ならばx=y" },
  { en: "全射", jp: "任意のyに対してf(x)=yとなるxが存在する" },
  { en: "群", jp: "結合律 単位元 逆元" },
  { en: "アーベル群", jp: "群 交換律" },
  { en: "環", jp: "加法->アーベル群 乗法->半群 分配律" },
  { en: "半群", jp: "結合律" },
  { en: "体", jp: "乗法についても可換群となる環" },
  { en: "フェルマーの小定理", jp: "pが素数でaがpと互いに素なとき、a^(p-1)≡1(mod p)" },
  { en: "オイラーのφ関数", jp: "n以下の自然数のうち、nと互いに素なものの個数" },
  { en: "バブルソート最悪O( )", jp: "n^2" },
  { en: "バブルソート平均O( )", jp: "n^2" },
  { en: "挿入ソート最悪O( )", jp: "n^2" },
  { en: "挿入ソート平均O( )", jp: "n^2" },
  { en: "選択ソート最悪O( )", jp: "n^2" },
  { en: "選択ソート平均O( )", jp: "n^2" },
  { en: "クイックソート最悪O( )", jp: "n^2" },
  { en: "クイックソート平均O( )", jp: "nlogn" },
  { en: "マージソート最悪O( )", jp: "nlogn" },
  { en: "マージソート平均O( )", jp: "nlogn" },
  { en: "ヒープソート最悪O( )", jp: "nlogn" },
  { en: "ヒープソート平均O( )", jp: "nlogn" },
  { en: "交換律を満たす群", jp: "アーベル群" },
];

/* ---------------------------
   品詞問題
----------------------------*/
const partQuestions = [
  {word: "反射律", answer: "aRa", choices: ["aRa", "aRb => bRa", "aRbかつbRa => a = b", "aRbかつbRc => aRc"]},
  {word: "対称律", answer: "aRb => bRa", choices: ["aRa", "aRb => bRa", "aRbかつbRa => a = b", "aRbかつbRc => aRc"]},
  {word: "反対称律", answer: "aRbかつbRa => a = b", choices: ["aRa", "aRb => bRa", "aRbかつbRa => a = b", "aRbかつbRc => aRc"]},
  {word: "推移律", answer: "aRbかつbRc => aRc", choices: ["aRa", "aRb => bRa", "aRbかつbRa => a = b", "aRbかつbRc => aRc"]},
];

/* ---------------------------
   品詞の四択
----------------------------*/

let mode = "";
let current = 0;
let remainingIndexes = [];

/* ---------------- */
function startWordQuiz() {

  mode = "word";

  startQuiz(wordQuestions);

}

/* ---------------- */
function startPartQuiz() {

  mode = "part";

  startQuiz(partQuestions);

}

/* ---------------- */
function startQuiz(list) {

  document.getElementById("menu").style.display =
    "none";

  document.getElementById("quizArea").style.display =
    "block";

  remainingIndexes = [];

  for (let i = 0; i < list.length; i++) {
    remainingIndexes.push(i);
  }

  next();

}

/* ---------------- */
function next() {

  let list =
    mode === "word"
      ? wordQuestions
      : partQuestions;

  /* 全問クリア */
  if (remainingIndexes.length === 0) {

    document.getElementById("quiz").innerText =
      "全問クリア！";

    document.getElementById("choices").innerHTML =
      "";

    document.getElementById("answer").style.display =
      "none";

    document.getElementById("answerButton").style.display =
      "none";

    return;
  }

  /* ランダム */
  let rand =
    Math.floor(Math.random() * remainingIndexes.length);

  current = remainingIndexes[rand];

  document.getElementById("result").innerText = "";

  document.getElementById("progress").innerText =
    "残り " + remainingIndexes.length + " 問";

  /* 単語問題 */
  if (mode === "word") {

    document.getElementById("quiz").innerText =
      list[current].en;

    document.getElementById("answer").style.display =
      "block";

    document.getElementById("answerButton").style.display =
      "block";

    document.getElementById("choices").innerHTML =
      "";

    document.getElementById("answer").value =
      "";

  }

  /* 品詞問題 */
  else {

    document.getElementById("quiz").innerText =
      list[current].word;

    document.getElementById("answer").style.display =
      "none";

    document.getElementById("answerButton").style.display =
      "none";

    let html = "";

    for (let choice of list[current].choices) {

      html += `
        <button onclick="checkPart('${choice}')">
          ${choice}
        </button>
      `;

    }

    document.getElementById("choices").innerHTML =
      html;

  }

}

/* ---------------- */
function check() {

  let ans =
    document.getElementById("answer").value.trim();

  let correct =
    wordQuestions[current].jp;

  judge(ans === correct, correct);

}

/* ---------------- */
function checkPart(choice) {

  let correct =
    partQuestions[current].answer;

  judge(choice === correct, correct);

}

/* ---------------- */
function judge(isCorrect, correctAnswer) {

  if (isCorrect) {

    document.getElementById("result").innerText =
      "正解！";

    remainingIndexes =
      remainingIndexes.filter(
        index => index !== current
      );

  }

  else {

    document.getElementById("result").innerText =
      "不正解 正解: " + correctAnswer;

  }

  setTimeout(() => {
    next();
  }, 1000);

}
