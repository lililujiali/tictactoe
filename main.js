const data = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]

]
let current = 1

const checkwin = function () {
  if (
    (data[0][0] === data[0][1] && data[0][1] === data[0][2] && data[0][2] !== 0) ||
    (data[1][0] === data[1][1] && data[1][1] === data[1][2] && data[1][2] !== 0) ||
    (data[2][0] === data[2][1] && data[2][1] === data[2][2] && data[2][2] !== 0) ||
    (data[0][0] === data[1][0] && data[1][0] === data[2][0] && data[2][0] !== 0) ||
    (data[0][1] === data[1][1] && data[1][1] === data[2][1] && data[2][1] !== 0) ||
    (data[0][2] === data[1][2] && data[1][2] === data[2][2] && data[2][2] !== 0) ||
    (data[0][0] === data[1][1] && data[1][1] === data[2][2] && data[2][2] !== 0) ||
    (data[0][2] === data[1][1] && data[1][1] === data[2][0] && data[2][0] !== 0)

  ) {
    return true
  } else {
    return false
  }
}

const render = function () {
  const divBox = document.querySelector('.box')
  divBox.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const divItem = document.createElement('div')
      divBox.appendChild(divItem)
      divItem.className = 'item'
      if (data[i][j] === 1) {
        divItem.innerHTML = '⭕️'
      } else if (data[i][j] === 2) {
        divItem.innerHTML = '❌'
      }
      divItem.onclick = function () {
        if (data[i][j] === 0) {
          data[i][j] = current
          if (current === 1) {
            current = 2
          } else {
            current = 1
          }
          render()
          if (checkwin() === true) {
            console.log('游戏结束')
            if (data[i][j] === 1) {
              console.log('⭕️赢了')
            } else {
              console.log('❌赢了')
            }
          }
        }
      }
    }
  }
}

render()
