export default {
    state: () =>({
        name: 'Anders'
    }),
    getters: {
        get_name: state => state.name 
    },
    mutations: {
        set_name(state,payload){
            state.name=payload
        }
    },
    actions: {
        save_name({commit},data){
            commit('set_name',data)
        }
    }
}