import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-42'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'Bike',
        note: '',
        amount: 20000,
        createdAt: 19000
    };
    const action = {
        type: 'ADD_EXPENSE',
        newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense])
});

test('should edit expense by id', () => {
    const note = 'Expense 0 test note';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note)
});

test('should not edit expense if incorrect id', () => {
    const note = 'Expense 0 test note';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-34',
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});