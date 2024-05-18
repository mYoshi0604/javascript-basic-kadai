// btn idを持つHTML要素の取得
const clickBtn = document.getElementById('btn');

// イベント処理
clickBtn.addEventListener('click', () => {
  const changeText = document.getElementById('text');

  changeText.innerHTML = 'ボタンをクリックしました';
});