import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [],
    },
    getters: {
        GET_ARTICLES(state) {
            return state.articles;
        },
    },
    mutations: {
        SET_ARTICLES(state, payload) {
            state.articles = payload;
        },
    },
    actions: {
        async GET_ARTICLES({ commit }) {
            let {data} = await axios.get("http://demo-api.vsdev.space/api/articles");
            commit("SET_ARTICLES", data);
        },
    },
});