export default {
    state: {
        testVar: 'teeest'
    },
    getters: {
        getTestVar: state => state.testVar
    },
    mutations: {
        setTestVar(state, testVar) {
            state.testVar = testVar;
        }
    }

}