const store = {
    storeName: 'The BookStore',
    earnings: 0,
    inventoryList: [], 
}
const books = {
    title: '',
    quantity: 0,
    value: 0
} 

function addBook(title, quantity, value) {
  books.title = title;
  books.quantity = quantity;
  books.value = value;
 
for ( i = 0; i < store.inventoryList.length; i++){
    if ( store.inventoryList[i].title === title){
        console.log(`${books.title} is already in the inventory`)
        return books.title;
    }
}
    console.log(`Book ${books.title} added`)
    return store.inventoryList.push(books);   
}

addBook('some book', 100, 100);
addBook('new book', 100, 150);
addBook('the book', 100, 175);

function restockBook(title, quantity) {
    for (const books of store.inventoryList) {
        if (books.title === title) books.quantity += quantity
        return books;
    }

    // books.title = title;
    // books.quantity = quantity;

// for(i = 0; i < store.inventoryList.length; i++) {
//     if( store.inventoryList[i].title === title) {
//         store.inventoryList[i].title === title;
//         store.inventoryList[i].quantity += quantity;
//         console.log(` ${title} added to inventory list. Restock Successful`)
//         return title;
//         }      
//     }
//     console.log(`Not in the inventory list. Need to Restock`)
//     return store.inventoryList[i].quantity; 
}

restockBook("some book", 100);
restockBook("new book", 100);
restockBook("the book", 100);
restockBook("the new book", 150);

// function sellBook(title, quantity) {
//  theTitle = store.inventorylist.title;
//  currentQuantity = store.inventoryList.quantity
// for (i = 0; i < store.inventoryList; i++) { 
//   for (j = 0; j < currentQuantity; j++) {   
//     if (thetitle === 0 ) {
//         console.log(`$[theTitle]` + 'out of stock');
//     } else if (i % currentQuantity[j] < 0 ) {
//         console.log('only' + `$[currentQuantity]`+ 'stocks left');
//     } else 
//     console.log('Successful transaction');
//   }
//   return store.inventoryList.push(books);
// }
// console.log(theTitle);
// console.log(books); 
// }

function sellBook(title, quantity) {
for (const books of store.inventoryList) {
    if (books.title !== title) {
        return '${title} out of stock'
    }
    if (books.quantity <= quantity) {
        return `The store only has ${books.quantity} stocks left`
    }
    if (books.title === title) {
        books.quantity -= quantity
        store.earnings += books.value * quantity
        return 'Successful transaction'
    }
    return store.inventoryList.push(books);
  }
// for (i = 0; i < store.inventoryList.length; i++) {
//     if ( store.inventoryList[i].title === title && store.inventoryList[i].quantity < quantity) {
//         console.log(`The store only has ${store.inventoryList[i].quantity} stocks left`)
//         return store.inventoryList[i].quantity;
//     }
//     if ( store.inventoryList[i].title === title && store.inventoryList[i].quantity >= quantity) {
//         store.inventoryList[i].quantity -= quantity;
//         store.earnings += store.inventoryList[i].value * quantity;
//         console.log('Successful transaction');
//         return store.earnings;
//     } 
// }
//     console.log(`${title} is out of stock`);
//     return title;
// }
}

sellBook("some book", 100);
sellBook("the book", 150);
sellBook("new book", 125); 
sellBook("the new book", 150);

function totalEarnings() {
    console.log(`Total Earnings for this day: ${store.earnings} from ${store.storeName}`)
}

totalEarnings();


function listInventory(){
    for(i = 0; i < store.inventoryList.length; i++){
        console.log(`Title:${store.inventoryList[i].title} Quantity:${store.inventoryList[i].quantity} Value:${store.inventoryList[i].value}`)
    }
}

// for (const books of store.inventoryList) {
//     if (books.title === store.inventoryList.title) {
//         return `Title: ${books.title}`
//     }
//     if (books.quantity === store.inventoryList.quantity) {
//         return `Quantity: ${books.quantity}`
//     }
//     if (books.value === store.inventoryList.value) {
//         return `Title: ${books.value}`
//     }
//     return books;
// }
// console.log(listInventory())
// }

listInventory();

// module.exports = {addBook, sellBook, totalEarnings, listInventory}