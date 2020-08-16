function changeText() {
    errorReset();
    // テキストを取得
    let text = document.getElementById('text').value.replace(/\r\n|\r|\n/g, "<br>");

    // 配列に変換(行を要素へ分割)
    let textArray = text.split('<br>');
    
    // 2行以上ならエラー
    if (textArray.length >3) {
        errorShow('2行以内で入力してください');
        return;
    }

    // 1行は12文字以内
    for(let str of textArray) {
        if (str.length > 15) {
            errorShow('1行15文字以内で入力してください');
            return;
        }
    }

    // 文字を設定
    let synthesisText = document.querySelector('.synthesis_text');
    synthesisText.innerHTML = text;
}

function changeColor() {
    errorReset();
    // 色を取得
    let color = document.getElementById('color').value;

    // 色の指定が不適切な場合はエラー
    if (!isColor(color)) {
        errorShow('色の指定が不適切です！')
        return;
    }

    // 色を設定
    let synthesisText = document.querySelector('.synthesis_text');
    synthesisText.style.color = ('#' + color);
}

function changeFontSize() {
    errorReset();
    // サイズを取得
    let size = document.getElementById('size').value;

    // サイズを設定
    let synthesisText = document.querySelector('.synthesis_text');
    synthesisText.style.fontSize = size + 'px';
}

/** 色バリデーション */
function isColor (color) {
    return color.match(/^([A-Fa-f0-9]{8}|([A-Fa-f0-9]{6}|[A-Fa-f0-9]{4})|[A-Fa-f0-9]{3})$/) !== null;
}

/** エラーを非表示にする */
function errorReset() {
    let errorTag = document.getElementById('error');
    errorTag.style.display = 'none';
}

/** エラーを表示にする */
function errorShow(msg) {
    let errorTag = document.getElementById('error');
    errorTag.innerText = msg;
    errorTag.style.display = 'block';
}