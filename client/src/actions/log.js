export const accountCreated = (json, user) => ({ type: 'ACCOUNT_CREATED', json, user });
export const accountClosed = (json, user) => ({ type: 'ACCOUNT_CLOSED', json, user });
export const userCreated = (json, user) => ({ type: 'USER_CREATED', json, user });
export const loadLog = json => ({ type: 'LOAD_LOG', json });
export const transactionOccured = (json, user) => ({ type: 'TRANSACTION_OCCURED', json, user });
export const transactionApproved = (json, user) => ({ type: 'TRANSACTION_APPROVED', json, user });
