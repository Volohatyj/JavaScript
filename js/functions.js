'use strict'

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

let shops = shoppingMallData.shops;
let shopAreas = [];
let shopVolumes = [];
let payment = [];
let paymentSum = 0;
for (let i=0; i < shops.length; i++) {
    const width = +shops[i]['width'];
    const length = +shops[i]['length'];
    shopAreas[i] = width * length;
    shopVolumes[i] = shopAreas[i] * shoppingMallData.height;
    payment[i] = shopVolumes[i] * shoppingMallData.moneyPer1m3;
    paymentSum += payment[i];
}

console.log(paymentSum);

function isBudgetEnough(data) {
    let shops = data;
    let shopAreas = [];
    let shopVolumes = [];
    let payment = [];
    let paymentSum = 0;
    for (let i=0; i < shops.length; i++) {
        const width = +shops[i]['width'];
        const length = +shops[i]['length'];
        shopAreas[i] = width * length;
        shopVolumes[i] = shopAreas[i] * shoppingMallData.height;
        payment[i] = shopVolumes[i] * shoppingMallData.moneyPer1m3;
        paymentSum += payment[i];
    }    
    if (paymentSum > shoppingMallData.budget) {
        return 'Бюджета недостаточно'
    } else {
        return "Бюджета достаточно"
    }
}

console.log(isBudgetEnough(shoppingMallData.shops))