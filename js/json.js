// javaScript object Notation
// JSON
const user = { id: 37, name: 'Mokhles', job: 'actor' };
const stringify = JSON.stringify(user);
// console.log(user);
// console.log(stringify);

const shop = {
    name: 'Mollika store',
    address: 'vuter goli',
    profit: 15000,
    products: ['laptop', 'phone', 'coc'],
    owner: {
        name: 'Allu vau',
        profession: 'Actor'
    },
    isExpensive: false
}
const shopString = JSON.stringify(shop);
// console.log(shop);
console.log(shopString);
const converted = JSON.parse(shopString);
console.log(converted);
