document.getElementById('diceBtn').addEventListener('click', function () {

  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('dice1').innerText = getDiceNumber(dice1);
  document.getElementById('dice2').innerText = getDiceNumber(dice2);

  const resultText = dice1 === dice2 ? `You rolled a double! 🎉` : `You rolled ${dice1} and ${dice2}`

  document.getElementById('result').textContent = resultText;

})

function getDiceNumber(diceNumber) {
  const diceFaces = {
    1: "⚀",
    2: "⚁",
    3: "⚂",
    4: "⚃",
    5: "⚄",
    6: "⚅"
  };

  return diceFaces[diceNumber];
}