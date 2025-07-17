
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("1件目の検索結果");
  console.log("開始時刻: " + data.list.g1[0].start_time);
  console.log("終了時刻: " + data.list.g1[0].end_time);
  console.log("チャンネル: " + data.list.g1[0].service.name);
  console.log("タイトル: " + data.list.g1[0].title);
  console.log("サブタイトル: " + data.list.g1[0].subtitle);
  console.log("番組説明: " + data.list.g1[0].content);
  console.log("出演者: " + data.list.g1[0].act);

  console.log("2件目の検索結果");
  console.log("開始時刻: " + data.list.g1[1].start_time);
  console.log("終了時刻: " + data.list.g1[1].end_time);
  console.log("チャンネル: " + data.list.g1[1].service.name);
  console.log("タイトル: " + data.list.g1[1].title);
  console.log("サブタイトル: " + data.list.g1[1].subtitle);
  console.log("番組説明: " + data.list.g1[1].content);
  console.log("出演者: " + data.list.g1[1].act);

}



function kensaku() {
  

}



// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {


if (document.querySelector('div#result')) {
  let re = document.querySelector('div#result');
  re.remove();
}


  let div = document.createElement('div');
  div.setAttribute('id', 'result');


  

  if (data.list == null) {

  let h3 = document.createElement('h3');
  h3.textContent = "ヒットしませんでした";
  div.insertAdjacentElement('beforeend', h3);

  } else if (os.getAttribute('value') === 'g1') {
  
    let h3 = document.createElement('h3');
  h3.textContent = "NHK の番組表（検索結果は" + data.list.g1.length + "件）";
  div.insertAdjacentElement('beforeend', h3);

  for (let i = 0; i < data.list.g1.length; i++) {  
  
    let h2 = document.createElement('h2');
  h2.textContent = (i+1) + "件目の検索結果";
  div.insertAdjacentElement('beforeend', h2);

  let table = document.createElement('table');
  let th = document.createElement('th');
  th.textContent = "開始時刻";
  let tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  let td = document.createElement('td');
  td.textContent = data.list.g1[i].end_time;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "終了時刻";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.g1[i].start_time;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "チャンネル";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.g1[i].service.name;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "タイトル";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.g1[i].title;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "サブタイトル";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.g1[i].subtitle;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "番組説明";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.g1[i].content;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "出演者";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.g1[i].act;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);
  
  div.insertAdjacentElement('beforeend', table);
  }
 }

 else if (os.getAttribute('value') === 'e1') {
  
    let h3 = document.createElement('h3');
  h3.textContent = "NHK の番組表（検索結果は" + data.list.e1.length + "件）";
  div.insertAdjacentElement('beforeend', h3);

  for (let i = 0; i < data.list.e1.length; i++) {  
  
    let h2 = document.createElement('h2');
  h2.textContent = (i+1) + "件目の検索結果";
  div.insertAdjacentElement('beforeend', h2);

  let table = document.createElement('table');
  let th = document.createElement('th');
  th.textContent = "開始時刻";
  let tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  let td = document.createElement('td');
  td.textContent = data.list.e1[i].end_time;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "終了時刻";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.e1[i].start_time;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "チャンネル";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.e1[i].service.name;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "タイトル";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.e1[i].title;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "サブタイトル";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.e1[i].subtitle;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "番組説明";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.e1[i].content;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);

  th = document.createElement('th');
  th.textContent = "出演者";
  tr = document.createElement('tr');
  tr.insertAdjacentElement('afterbegin', th);
  td = document.createElement('td');
  td.textContent = data.list.e1[i].act;
  tr.insertAdjacentElement('beforeend', td);
  table.insertAdjacentElement('beforeend', tr);
  
  div.insertAdjacentElement('beforeend', table);
  }
 }

 




  let bo = document.querySelector('body');
  bo.insertAdjacentElement('beforeend', div);



}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
b = document.querySelector('button');
b.addEventListener('click' , sendRequest);




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  service = document.querySelector('select#service');
  genre = document.querySelector('select#genre');

  sdx = service.selectedIndex;
  gdx = genre.selectedIndex;

  sos = service.querySelectorAll('option');
  gog = genre.querySelectorAll('option');

  os = sos.item(sdx);
  og = gog.item(gdx);

  console.log("チャンネル: " + os.getAttribute('value'));
  console.log("ジャンル: " + og.getAttribute('value'));

  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + os.getAttribute('value') + '-' + og.getAttribute('value') + '-j.json';

  axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

  

    printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること


