import axios from 'axios'

const state ={
    context : 'http://localhost:5000/',

}
const actions ={
    async search({commit},x) {
        axios.post(state.context + `soccer` ,x,{
            authorization: 'JWT fefege..',
            Accept : 'application/json',
            'Content-Type': 'application/json'
        })
            .then(({data})=>{
                alert('검색된 결과수')
                commit('SEARCH',data)
            })
            .catch(()=>{
                alert('통신실패!')
            })
    }
}

const mutations ={
    SEARCH() {
        alert('뮤테이션접속')
    }
}
const getters = {

}



export  default {
    name:'soccer',
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}