import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ADS_QUANTITY: {},
    },
    getters: {
        GET_ADS_QUANTITY(state) {
            return state.ADS_QUANTITY;
        },
    },
    mutations: {
        SET_ADS_QUANTITY(state, payload) {
            state.ADS_QUANTITY = payload;
        },
    },
    actions: {
        async GET_ADS_QUANTITY({ commit }) {
            let {data} = await axios.get("https://demo-api.vsdev.space/api/brom/left_widget");
            commit("SET_ADS_QUANTITY", data);
        },
    },
});