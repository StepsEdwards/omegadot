const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Stuff for dashboard calculation
function getCurrentAssetDebits(transactions){
    let debits = [];
    let tempTransactions = transactions;
    tempTransactions.forEach(transaction => {
        let debitEntries = transaction.debitEntries;
        debitEntries.forEach(entry => {
            if(entry.account == "Cash"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Accounts Receivable"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Prepaid Rent"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Prepaid Insurance"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Supplies"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
        });
    });
    
    debits.forEach(debit => {
        console.log(`ACCOUNT: ${debit.account} || AMOUNT: ${debit.amount} || DATE: ${debit.date} || TYPE: ${debit.type}`);
    });

    return debits;
}

function getCurrentAssetCredits(transactions){
    let credits = [];
    let tempTransactions = transactions;
    tempTransactions.forEach(transaction => {
        let creditEntries = transaction.creditEntries;
        creditEntries.forEach(entry => {
            if(entry.account == "Cash"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Accounts Receivable"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Prepaid Rent"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Prepaid Insurance"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Supplies"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
        });
    });
    
    credits.forEach(credit => {
        console.log(`ACCOUNT: ${credit.account} || AMOUNT: ${credit.amount} || DATE: ${credit.date} || TYPE: ${credit.type}`);
    });

    return credits;
}

// Stuff for dashboard calculation
function getTotalAssetDebits(transactions){
    let debits = [];
    let tempTransactions = transactions;
    tempTransactions.forEach(transaction => {
        let debitEntries = transaction.debitEntries;
        debitEntries.forEach(entry => {
            if(entry.account == "Cash"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Accounts Receivable"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Prepaid Rent"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Prepaid Insurance"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Supplies"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Office Equipment"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Accumulated Depreciation"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
        });
    });
    
    debits.forEach(debit => {
        console.log(`ACCOUNT: ${debit.account} || AMOUNT: ${debit.amount} || DATE: ${debit.date} || TYPE: ${debit.type}`);
    });

    return debits;
}

function getTotalAssetCredits(transactions){
    let credits = [];
    let tempTransactions = transactions;
    tempTransactions.forEach(transaction => {
        let creditEntries = transaction.creditEntries;
        creditEntries.forEach(entry => {
            if(entry.account == "Cash"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Accounts Receivable"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Prepaid Rent"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Prepaid Insurance"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Supplies"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Office Equipment"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Accumulated Depreciation"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
        });
    });
    
    credits.forEach(credit => {
        console.log(`ACCOUNT: ${credit.account} || AMOUNT: ${credit.amount} || DATE: ${credit.date} || TYPE: ${credit.type}`);
    });

    return credits;
}

function getInventoryDebits(transactions){
    let debits = [];
    let tempTransactions = transactions;
    tempTransactions.forEach(transaction => {
        let debitEntries = transaction.debitEntries;
        debitEntries.forEach(entry => {
            if(entry.account == "Supplies"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
        });
    });
    
    debits.forEach(debit => {
        console.log(`ACCOUNT: ${debit.account} || AMOUNT: ${debit.amount} || DATE: ${debit.date} || TYPE: ${debit.type}`);
    });

    return debits;
}

function getInventoryCredits(transactions){
    let credits = [];
    let tempTransactions = transactions;
    tempTransactions.forEach(transaction => {
        let creditEntries = transaction.creditEntries;
        creditEntries.forEach(entry => {
            if(entry.account == "Supplies"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
        });
    });
    
    credits.forEach(credit => {
        console.log(`ACCOUNT: ${credit.account} || AMOUNT: ${credit.amount} || DATE: ${credit.date} || TYPE: ${credit.type}`);
    });

    return credits;
}

function getCurrentLiabailitiesDebits(transactions){
    let debits = [];
    let tempTransactions = transactions;
    tempTransactions.forEach(transaction => {
        let debitEntries = transaction.debitEntries;
        debitEntries.forEach(entry => {
            if(entry.account == "Accounts Payable"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
            if(entry.account == "Salaries Payable"){
                entry.date = transaction.date;
                entry.type = "debit";
                debits.push(entry);
            }
        });
    });
    
    debits.forEach(debit => {
        console.log(`ACCOUNT: ${debit.account} || AMOUNT: ${debit.amount} || DATE: ${debit.date} || TYPE: ${debit.type}`);
    });

    return debits;
}

function getCurrentLiabailitiesCredits(transactions){
    let credits = [];
    let tempTransactions = transactions;
    tempTransactions.forEach(transaction => {
        let creditEntries = transaction.creditEntries;
        creditEntries.forEach(entry => {
            if(entry.account == "Accounts Payable"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
            if(entry.account == "Salaries Payable"){
                entry.date = transaction.date;
                entry.type = "credit";
                credits.push(entry);
            }
        });
    });
    
    credits.forEach(credit => {
        console.log(`ACCOUNT: ${credit.account} || AMOUNT: ${credit.amount} || DATE: ${credit.date} || TYPE: ${credit.type}`);
    });

    return credits;
}

function calculateBalance(data){
    let debitTotal = 0;
    let creditTotal = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].type == "debit"){
            debitTotal += data[i].amount;
        } else if(data[i].type == "credit"){
            creditTotal += data[i].amount;
        }
    }

    let balance = Math.abs(debitTotal - creditTotal);
    console.log(`BALANCE: ${balance}`);
    return balance;
}



// Import Account Model
require('../models/Transaction');
const Transaction = mongoose.model('transaction');

// Retrieves All Transaction
router.get('/transactions', (req, res) => {
    Transaction.find()
     .then(transaction => {
         res.json(transaction);
     })
});

// Retrieves All Pending Transactions
router.get('/transactions/pending', (req, res) => {
    Transaction.find({
      status: 'pending'
    }).then(transactions => {
        res.json(transactions);
    });
});

// Retreives All Approved Transactions
router.get('/transactions/approved', (req, res) => {
    Transaction.find({
        status: 'approved'
    }).then(transactions => {
        res.json(transactions);
    })
});

router.get('/transactions/assetsbalance', (req, res) => {
    Transaction.find({
        status: 'approved'
    }).then(transactions => {
        let data = getCurrentAssetDebits(transactions).concat(getCurrentAssetCredits(transactions));
        res.json(calculateBalance(data));
    })
});


router.get('/transactions/totalassetsbalance', (req, res) => {
    Transaction.find({
        status: 'approved'
    }).then(transactions => {
        let data = getTotalAssetDebits(transactions).concat(getTotalAssetCredits(transactions));
        res.json(calculateBalance(data));
    })
});

router.get('/transactions/inventorybalance', (req, res) => {
    Transaction.find({
        status: 'approved'
    }).then(transactions => {
        let data = getInventoryDebits(transactions).concat(getInventoryCredits(transactions));
        res.json(calculateBalance(data));
    })
});

router.get('/transactions/liabilitiesbalance', (req, res) => {
    Transaction.find({
        status: 'approved'
    }).then(transactions => {
        let data = getCurrentLiabailitiesDebits(transactions).concat(getCurrentLiabailitiesCredits(transactions));
        res.json(calculateBalance(data));
    })
});

// Retrieves A Transaction By Id
router.get('/transaction/:id', (req, res) => {
    // Transaction.findById(req.params.id)
    //     .then(transaction => {
    //         res.json(transaction);
    //     });

    Transaction.findById(req.params.id)
        .then(transaction => {
            if(!transaction) {return res.status(404).end();}
            return res.status(200).json(transaction);
        })
        .catch(err => next(err));
});

// Retrieves All REG Transactions
router.get('/transactions/reg', (req, res) => {
    Transaction.find({transactionType: "REG", "status": "approved"})
        .then(transactions => {
            res.json(transactions);
        });
});

// Retrieves All Adjusting Entries for A Specific Account
router.get('/transactions/aje/:account', (req, res) => {
    Transaction.find({transactionType: "AJE", "status": "approved"})
        .then(transactions => {
            res.json(transactions);
        });
});

// Saves New Transaction To Database
router.post('/transaction/add', (req, res) => {
    const newTransaction = new Transaction({
        debitEntries: req.body.debitEntries,
        creditEntries: req.body.creditEntries,
        date: req.body.date,
        description: req.body.description,
        status: req.body.status,
        rejectReason: req.body.rejectReason,
        file: req.body.file,
        fileType: req.body.fileType,
        transactionType: req.body.transactionType
    });

    newTransaction.save((err) => {
        if(err){
            console.log('ERROR...COULD NOT SAVE TRANSACTION');
            res.status(201).json(newTransaction);
        }
    });
});

router.put('/transaction/status/update/:id', (req, res) => {
    Transaction.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Transaction.findOne({_id: req.params.id}).then(() => {
                res.send(Transaction);
            });
        });
});

module.exports = router;
