import axios from 'axios'
import routers from '@/routers'

const state={
    context:'http://localhost:5000/',
    movie: [],
    count:0
}
const actions={
    async search({commit},searchWord){
        alert('검색어: ' + searchWord)
        axios.get(state.context+"movie/"+searchWord)
            .then(({data})=>{
                alert('검색된 결과수123 :'+data.count)
                commit('SEARCH',data)
                routers.push('/movie')
            })
            .catch(()=>{
                alert('통신실패입니다!')
            })
    }
}
const mutations={
        SEARCH(state, data){
            alert('뮤테이션 접속' + data.count);
            state.movie =[];
            state.count = data.count;
            data.list.forEach(item =>{
                state.movie.push({
                    seq: item.seq,
                    movieName: item.movieName
                });
            });
        }
};
const getters={
    movie: state => state.movie,
    count :state => state.count
}
export default {
    name : "movie",
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}