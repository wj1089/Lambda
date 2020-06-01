import axios from 'axios'
import routers from '@/routers'

const state={
    context:'http://localhost:5000/',
    movie: [],
    count:0
}
const actions={
    async search({commit},searchWord){
        alert('검색어 : ' + searchWord)
        axios.get(state.context+"movie/list/0/"+searchWord)
            .then(({data})=>{
                alert('검색된 결과 수 :'+data.count)
                commit('MOVIE',data)
                routers.push('/movie')
            })
            .catch(()=>{
                alert('통신실패입니다!')
            })
    }
}
const mutations={
    MOVIE(state, data){
            alert('뮤테이션 접속' + data.count);
            state.movie =[];
            state.count = data.count;
            data.forEach(item =>{state.movie.push({
                                 seq: item.seq,
                                 movieName: item.movieName,
                                 rankDate : item.rankDate
                });
            });
        }
};
const getters={//JSON이니깐 , 를 걸어줘야한다.
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