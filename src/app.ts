import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";
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

const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

let doc: HasFormatter;



form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')

})
