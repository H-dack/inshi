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
  { en: "配列を2つの部分に分割して, それぞれを再帰的に行うソート", jp: "クイックソート" },
  { en: "配列を半分に分割し続け, それぞれをソートした後に1つに結合するソート", jp: "マージソート" },
  { en: "完全二分木の性質をもつデータ構造を利用し, 最大値を効率的に取り出すソート", jp: "ヒープソート" },
  { en: "整列済みの部分に対して, 新しい要素を適切な位置に挟み込んでいくソート", jp: "挿入ソート" },
  { en: "未成列の部分から最小値を探し出し, 未成列の先頭の要素と交換することを繰り返すソート", jp: "選択ソート" },
  { en: "隣り合う要素を比較し, 順序が逆であれば入れ替えることを繰り返すソート", jp: "バブルソート" },
  { en: "キーの大小関係を比較せず, 値の出現回数をカウントすることによるソート", jp: "カウントソート" },
  { en: "ノードの左側にはそのノードより小さい値, 右側にｈ大きい値のみを配置する分木", jp: "二分探索木" },
  { en: "左右の部分木の高さの差が常に1になるように自動的にバランスを保つ二分探索木", jp: "AVL木" },
  { en: "ノードに2種類の属性を持たせ, 特定のルールでバランスを保つデータ構造", jp: "赤黒木" },
  { en: "ネットワークの通信機能を7つの階層（レイヤー）に分割して定義したISOによる標準モデル", jp: "OSI参照モデル" },
  { en: "インターネットで標準的に使われる, 4つの階層からなる通信プロトコルスイート", jp: "TCP/IP" },
  { en: "TCP/IPのトランスポート層において, コネクションを確立し, データの到達確認を行う信頼性の高いプロトコル", jp: "TCP" },
  { en: "インターネット（ネットワーク層）において、パケットを指定されたIPアドレスの宛先まで届けるためのルーティングを行うプロトコル", jp: "IP" },
  { en: "ドメイン名（人間が読めるURLなど）とIPアドレス（コンピュータが認識する数字列）を相互に変換するシステム", jp: "DNS" },
  { en: "パケットの宛先IPアドレスを見て、次に送信すべき最適な経路（ルータ）を選択する動作", jp: "ルーティング" },
  { en: "過去の内部状態（記憶）を持たず、現在の入力だけで出力が決定する論理回路", jp: "組み合わせ回路" },
  { en: "過去の内部状態（記憶）を保持し、現在の入力と過去の状態の両方によって出力が決定する論理回路", jp: "順序回路" },
  { en: "プロセッサ内で、現在実行されている命令そのものを一時的に格納しておくレジスタ", jp: "命令レジスタ" },
  { en: "プロセッサ内で、次に実行すべき命令が格納されている主記憶のアドレスを保持しておくレジスタ", jp: "プログラムカウンタ" },
  { en: "演算装置（ALU）による計算結果を一時的に蓄積・保持するためのレジスタ", jp: "アキュムレータ" },
  { en: "主記憶への書き込みを行う際、キャッシュメモリだけでなく主記憶にも同時にデータを書き込むキャッシュ制御方式", jp: "ライトスルー方式" },
  { en: "主記憶への書き込みを行う際、キャッシュメモリにのみ書き込んでおき、そのブロックが破棄される時に初めて主記憶へ書き戻す方式", jp: "ライトバック方式" },
  { en: "主記憶の特定のブロックが、キャッシュメモリの特定の1箇所にしか格納できないアドレスマッピング方式", jp: "ダイレクトマップ方式" },
  { en: "主記憶の任意のブロックを、キャッシュメモリのどの場所（ライン）にでも格納できるアドレスマッピング方式", jp: "フルアソシアティブ方式" },
  { en: "アクセスしようとした仮想メモリのページが、まだ物理メモリ（主記憶）上に存在しない場合に発生するCPUの割り込み現象", jp: "ページフォールト" },
  { en: "メモリ置換アルゴリズムにおいて、最も長い間参照（アクセス）されていないページを優先的に追い出す方式", jp: "LRU" },
  { en: "メモリ置換アルゴリズムにおいて、最もアクセスされた回数（頻度）が少ないページを優先的に追い出す方式", jp: "LFU" },
  { en: "物理メモリが不足し、OSがページの入れ替え（ディスクI/O）ばかりに時間を取られ、システム全体のパフォーマンスが著しく低下する現象", jp: "スラッシング" },
  { en: "複数のプロセスが互いに相手の持っている資源（リソース）の解放を待ち続け、処理が永久に停止してしまう状態", jp: "デッドロック" },
  { en: "複数のプロセスが共有リソースに同時アクセスするのを防ぐため、排他制御（鍵の管理）を行うための整数型の変数や仕組み", jp: "セマフォ" }
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
