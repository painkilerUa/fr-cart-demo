import axious from 'axios'

export  function fetchProducts () {
  return {
    type: "FETCH_PRODUCTS",
    payload: getAllProducts()
  }
}
function getAllProducts () {
  let url = 'https://stage-api.fastretailing.com/catalog/v6/uq/ca/products?expand=skus,flags&locale=en_CA&product_id='
  return Promise.all([
    axious.get(url + '400738'),
    axious.get(url + '173349'),
    axious.get(url + '401020'),
    axious.get(url + '173349'),
    axious.get(url + '183146')
  ])
}
