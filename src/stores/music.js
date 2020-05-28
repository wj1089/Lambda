import axios from 'axios'
import routers from '@/routers'
const state ={
    contenxt: 'http://localhost:5000/',


}
const  actions={
    async search({commit},searchWord){
        axios.get(state.context+ "music/" +searchWord)
            .then(({data})=>{
                alert('검색된 결과수 : '+data)
                commit('SEARCH',data)
                routers.push('/music')
            })
            .catch(()=>{
                alert('통신실패!')
            })
    }
}
const  mutations={
        SEARCH(){
            alert('뮤테이션 접속')
        }
}
const  getters={

}

export  default {
    name : 'music',
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}



