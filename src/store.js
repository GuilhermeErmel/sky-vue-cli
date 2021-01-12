import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    products: [
        {
            code: '0001',
            name: 'Camisa',
            value: 49.90,
            amount: 3
        },
        {
            code: '0002',
            name: 'Calça',
            value: 99.99,
            amount: 1
        }
    ],
    loading: false,
}

const actions = {
    hasUnusedCode(product) {
        return state.products.findIndex(item => item.code === product.code) === -1;
    },

    addProduct({ commit }, product) {
        commit('setLoading', true);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (! actions.hasUnusedCode(product)) {
                    return reject("O Código do produto deve ser único.");
                }

                commit('addProduct', product)
                resolve(product)
            }, 500)
        }).finally(() => commit('setLoading', false))
    },

    decrementProduct({ commit }, product) {
        commit('decrementProduct', product)
    },

    editProduct({ commit }, product) {
        commit('editProduct', product)
    },

    removeProduct({ commit }, product) {
        commit('removeProduct', product)
    }
}


const getters = {

    products(state) {
        return state.products;
    }

    /*
    uncheckeds(state) {
        return state.todos.filter(todo => todo.checked === false)
    },

    checkeds(state) {
        return state.todos.filter(todo => todo.checked)
    }
    */
}

const mutations = {
    addProduct(state, payload) {
        state.products.push(payload)
    },

    setLoading(state, payload) {
        state.loading = payload
    },

    decrementProduct(state, payload) {
        const index = state.products.findIndex(item => item.code === payload.code);
        if (index > -1) {
            state.products[index].amount--;
        }
    },

    editProduct(state, payload) {
        // TODO

        // state.products = state.products.filter(item => item.code !== payload.code)
    },

    removeProduct(state, payload) {
        state.products = state.products.filter(item => item.code !== payload.code)
    },

    /*
    toggleList(state, todosIds) {
        const todos = state.todos.map(item => {
            return todosIds.includes(item.code) ? { ...item, checked: !item.checked } : item
        })
        state.todos = todos
    },

    removeList(state, todosIds) {
        const todos = state.todos.filter(item => !todosIds.includes(item.code))
        state.todos = todos
    }*/
}

const store = new Vuex.Store({ state, actions, mutations, getters })

export default store
