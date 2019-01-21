// form要素を参照
const element = document.querySelector('#radioGroup');
// 変更を監視
element.addEventListener('change', handleChange);

function handleChange(event) {
  // 現在の選択状態を取得
  const drinkValue = element.drink.value;
  const fruitValue = element.fruit.value;

  console.log(`drinkの値は ${drinkValue} です`);
  console.log(`fruitValueの値は ${fruitValue} です`);
}
