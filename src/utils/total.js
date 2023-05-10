const totalPrice = (array) => {
    let total = 0
    let prices = array.map(product => product.price)
    prices.forEach(price => total += price)
    return total
}

export {totalPrice}