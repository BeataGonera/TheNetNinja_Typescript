import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// import { IsPerson } from "./interfaces/isPerson.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "webwork", 20)
// docTwo = new Payment("Beata", "webwork", 20)
// let documents: HasFormatter[] = [];
// documents.push(docOne)
// const me: IsPerson = {
//     name: "Beata",
//     age: 33,
//     spend(amount: number):number{
//         console.log(amount)
//         return amount
//     },
//     speak(text: string): void{
//         console.log(text)
//     }
// }
// const greetPerson = (person: IsPerson) => {
//     console.log(`Hello ${person.name}`)
// }
// greetPerson(me);
// const invoiceOne = new Invoice("beata", "Jasiek", 30);
// const invoiceTwo = new Invoice("MArio", "working", 40);
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne, invoiceTwo)
// invoices.forEach(inv => {
//     console.log(inv.amount, inv.client, inv.format())
// })
// invoiceOne.amount = 40
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
let doc;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
