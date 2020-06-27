var updatebtn = document.getElementsByClassName('update-cart')

for (i = 0; i < updatebtn.length; i++) {
  updatebtn[i].addEventListener('click', function () {
    var productID = this.dataset.product
    var action = this.dataset.action
    console.log('productId: ', productID, ' Action: ', action)
    console.log('USER: ', user)
    if (user === AnonymousUser) {
      conslole.log("Not Logged in")
    } else {
      updateUserOrder(productID, action)
    }
  })
}

function updateUserOrder(productID, action) {
  console.log('User is authenticated, sending data..!')

  var url = './update_item/'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'productId: ', productID, 'action': action })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('data: ', data)
      })
  })
}