const store = require('./app/store')
const { cakeActions } = require('./features/cake/cakeSlice')
const { icecreamActions } = require('./features/icecream/icecreamSlice')

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(3))
unsubscribe()
