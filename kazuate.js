// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let finish = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
b = document.querySelector('button');
b.addEventListener('click' , hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  y1 = document.querySelector('input[name="yoso"]');
  yoso = Number(y1.value);
  kaisu = kaisu + 1;
  p1 = document.querySelector('span#kaisu');
  p2 = document.querySelector('span#answer');
  p1.textContent = kaisu;
  p2.textContent = yoso;

  p3 = document.querySelector('p#result');

  if (kaisu >= 4 || finish > 0) {
    p3.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
  } else if (kotae === yoso) {
    p3.textContent = "正解です。おめでとう！";
    finish = finish+1;
  } else if (kaisu === 3) {
    p3.textContent = "まちがい。残念でした答えは " + kotae + " です。";
  } else if (kaisu <= 2 && yoso < kotae) {
    p3.textContent = "まちがい。答えはもっと大きいですよ。";
  } else if (kaisu <= 2 && yoso > kotae) {
    p3.textContent = "まちがい。答えはもっと小さいですよ。";
  } 
  
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}