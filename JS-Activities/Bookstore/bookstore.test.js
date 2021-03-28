const bookstore = require("./bookstore.js")

test("addBook", () => {
    // let store = 
    //     storeName: "",
    //     earnings: 0,
    //     inventoryList: []; 
    
    // let books = [{"quantity": 0, "title": "","value": 0 }]
    // } 
    expected = [{"quantity": 10, "title": "The Book","value": 10 }]
    // expect(bookstore.addBook(title, quantity, value)).toBe(expected);
    expect(bookstore.addBook(title, quantity, value)).toStrictEqual(expected);
    expect(bookstore.inventoryList.length).toBe(1)
});