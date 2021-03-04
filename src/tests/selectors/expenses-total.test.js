import selectExpnesesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
    const res = selectExpnesesTotal([])
    expect(res).toBe(0)
})

test('Should correctly add up a single expense', () => {
    const res = selectExpnesesTotal([expenses[0]])
    expect(res).toBe(195)
})

test('Should correctly add up a single expense', () => {
    const res = selectExpnesesTotal(expenses)
    expect(res).toBe(114195)
})