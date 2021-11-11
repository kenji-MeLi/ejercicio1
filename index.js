

const calculatePrice = (prodduct, price) => {
  
        if(price <= 2000) {
             shipping = 300
        } else if(price > 2000 && price <= 4000) {
             shipping = 500
        } else {
             shipping = 700
        }
    
    
    const total = shipping + price

    return `El producto ${prodduct} cuesta $${price}. Su costo de envío es de $${shipping}. 
            Por lo tanto, el precio final es de $${total}`
}

console.log(calculatePrice('Macbook', 2500))
