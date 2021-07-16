const bpsb = {
    bankname: 'BadongPagong Savings Bank',
    bpsbClients: [],
    // currentClients: [],
    bpsbAdmin: {
        username: 'BPSBAdmin',
        email: 'ilaundermoney@bpsb.com',
        password: 'BPSBfraudServices.',
        accountNo: '001234567890',
        aLastDeposit: '10000',
        aLastWithdrawal: '0',
        transactionId: '1',
        session: '0' 
    },
}

const user = {
    username: '',
    password: '',
    accountno: '',
    balance: '', 
}

function create_user(username, password, accountno, balance) {
    user.username = username;
    user.Password = password;
    user.accountno = accountno;
    user.balance = balance;  
    
    let newUser = new user(user, password, accountno, balance);
    if (!bpsb.bpsbClients.name === user.username) {
        // let string = JSON.stringify(newUser);
        // localStorage.setItem(bpsb.bpsbClients.length, string);
        // let newstring = localStorage.getItem(bpsb.bpsbClients.length);
        // return newstring;
        pushData(bpsb.bpsbClients.length, newUser);
        } 
    else {
        console.log('User already exists');
    }
}

function deposit(username, amount) {
    for (i = 0; i < bpsb.bpsbClients.length; i++) {
        if (bpsb.bpsbClients[i].user === username){
            let currentBalance = bpsb.bpsbClients[i].balance + amount;
            // return currentBalance;
            pushData(bpsb.bpsbClients.length, currentBalance);
        }
    console.log(currentBalance + 'has been added to your account.');    
    }
}

function withdraw(username, amount) {
    for (i = 0; i < bpsb.bpsbClients.length; i++) {
        if (bpsb.bpsbClients[i].user === username){
            let currentBalance = bpsb.bpsbClients[i].balance - amount;
            // return currentBalance;
            pushData(bpsb.bpsbClients.length, currentBalance);
            return currentBalance
        }
    console.log(currentBalance + 'has been deducted to your account.');    
    }
}

function send(sender, recipient, amount) {
    for (i = 0; i < bpsb.bpsbClients.length; i++) {
        for (j = 0; j < bpsb.bpsbClients.length; j++) { 
        if (bpsb.bpsbClients[i].user === sender && bpsb.bpsbClients[j].user === recipient) {
            bpsb.bpsbClients[i].balance -= amount;
            bpsb.bpsbClients[j].balance += amount;
        }
        else {
            return 'Unable to find: ${sender}'
        }}

        
}

function get_balance(user) {

}

function list_users() {
    for (i = 0; i < bpsb.bpsbClients.length; i++) {
        pullData(bpsb.bpsbClients[i].user, )


}
}

// error handling
// wrong_arguments 
// user_already_exists ('Den' == 'den')
// user_does_not_exists ('Den' == 'den')
// not_enough_money
// sender_does_not_exists
// receiver_does_not_exist

function pullData(key, value) {
if (typeof value === 'object')
    value = JSON.stringify(value);
    
localStorage.setItem(key, value); 
}
    
function pushData(key, value) {
if (typeof value === 'string')
    value = JSON.parse(value);
    
localStorage.getItem(key, value); 
}}