const express = require('express');
const router = express.Router();

router.get('/accounts/list', (req, res) => {
  const accounts = [
    // ASSETS
    { "id": 1, "name": "Cash", "number": "100", "type": "asset", "subtype": "current", "routeName": "cash", "normalSide": "debit" },
    { "id": 2, "name": "Accounts Receivable", "number": "110", "type": "asset", "subtype": "current", "routeName": "accountsreceivable", "normalSide": "debit" },
    { "id": 3, "name": "Prepaid Rent", "number": "120", "type": "asset", "subtype": "current", "routeName": "prepaidrent", "normalSide": "debit" },
    { "id": 4, "name": "Prepaid Insurance", "number": "130", "type": "asset", "subtype": "current", "routeName": "prepaidinsurance", "normalSide": "debit" },
    { "id": 5, "name": "Supplies", "number": "140", "type": "asset", "subtype": "current", "routeName": "supplies", "normalSide": "debit" },
    { "id": 6, "name": "Office Equipment", "number": "150", "type": "asset", "subtype": "n/a", "routeName": "officeequipment", "normalSide": "debit" },
    { "id": 7, "name": "Accumulated Depreciation", "number": "160", "type": "asset", "subtype": "n/a", "routeName": "accumulateddepreciation", "normalSide": "credit" },
    // EXPENSES
    { "id": 8, "name": "Insurance Expense", "number": "200", "type": "expense", "subtype": "n/a", "routeName": "insuranceexpense", "normalSide": "debit" },
    { "id": 9, "name": "Depreciation Expense", "number": "210", "type": "expense", "subtype": "n/a", "routeName": "depreciationexpense", "normalSide": "debit" },
    { "id": 10, "name": "Rent Expense", "number": "220", "type": "expense", "subtype": "n/a", "routeName": "rentexpense", "normalSide": "debit" },
    { "id": 11, "name": "Supplies Expense", "number": "230", "type": "expense", "subtype": "n/a", "routeName": "suppliesexpense", "normalSide": "debit" },
    { "id": 12, "name": "Salaries Expense", "number": "240", "type": "expense", "subtype": "n/a", "routeName": "salariesexpense", "normalSide": "debit" },
    { "id": 13, "name": "Telephone Expense", "number": "250", "type": "expense", "subtype": "n/a", "routeName": "telephoneexpense", "normalSide": "debit" },
    { "id": 14, "name": "Utilities Expense", "number": "260", "type": "expense", "subtype": "n/a", "routeName": "utilitiesexpense", "normalSide": "debit" },
    { "id": 15, "name": "Advertising Expense", "number": "270", "type": "expense", "subtype": "n/a", "routeName": "advertisingexpense", "normalSide": "debit" },
    // LIABILITIES
    { "id": 16, "name": "Accounts Payable", "number": "300", "type": "liability", "subtype": "current", "routeName": "accountspayable", "normalSide": "credit" },
    { "id": 17, "name": "Salaries Payable", "number": "310", "type": "liability", "subtype": "current", "routeName": "salariespayable", "normalSide": "credit" },
    { "id": 18, "name": "Unearned Revenue", "number": "320", "type": "liability", "subtype": "n/a", "routeName": "unearnedrevenue", "normalSide": "credit" },
    // OWNER'S EQUITY
    { "id": 19, "name": "Contributed Capital", "number": "400", "type": "owner's equity", "subtype": "n/a", "routeName": "contributedcapital", "normalSide": "credit" },
    { "id": 20, "name": "Notes Payable", "number": "410", "type": "owner's equity", "subtype": "n/a", "routeName": "notespayable", "normalSide": "credit" },
    // REVENUES
    { "id": 21, "name": "Service Revenue", "number": "500", "type": "revenue", "subtype": "n/a", "routeName": "servicerevenue", "normalSide": "credit"}
  ]

  res.json(accounts);
});

module.exports = router;
