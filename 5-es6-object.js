// object porperty shorthand

const name = 'ebrahim'
const userAge = 18


const user = {
    name,
    userAge,
    location:'chennai'
}
console.log(user)

// object Destructuring

const product = {
    label : 'red notebook',
    price : 3,
    stock : 201,
    saleprice : undefined,
    rating : 4.2
}

// const label = product.label
// const stock = product.stock

// const {label :productlabel,stock ,rating = 5}= product
// console.log(productlabel)
// console.log(stock)
// console.log(rating)
const transaction = (type,{label,stock}) => {
    console.log(type,label,stock)

}
transaction('order',product)