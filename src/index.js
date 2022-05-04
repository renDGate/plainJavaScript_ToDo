import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リスとに追加する関数
const createIncompleteList = (text) => {
  // テキストボックスの値を取得して初期化する

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // 完了したTODOに追加する
    // div生成
    const divForComp = document.createElement("div");
    divForComp.className = "list-row";

    // liタグ生成
    const liForComp = document.createElement("li");
    liForComp.innerText = text;

    // 戻すボタン生成
    const redoBtn = document.createElement("button");
    redoBtn.addEventListener("click", () => {
      // 完了したTODOから削除
      const delTarget = redoBtn.parentNode;
      document.getElementById("complete-list").removeChild(delTarget);
      // 未完了に追加

      // テキスト取得
      const text = redoBtn.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    redoBtn.innerText = "戻す";
    // divの子に要素を設定
    divForComp.appendChild(liForComp);
    divForComp.appendChild(redoBtn);
    document.getElementById("complete-list").appendChild(divForComp);
    // 親タグを未完了から削除
    const delTarget = completeBtn.parentNode;
    document.getElementById("incomplete-list").removeChild(delTarget);
  });

  // 削除生成
  const delBtn = document.createElement("button");
  delBtn.innerText = "削除";
  delBtn.addEventListener("click", () => {
    // 親タグを未完了から削除
    const delTarget = delBtn.parentNode;
    document.getElementById("incomplete-list").removeChild(delTarget);
  });

  // divの子に要素を設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(delBtn);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-buttun")
  .addEventListener("click", () => onClickAdd());
