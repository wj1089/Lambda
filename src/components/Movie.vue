<template>
    <div>
        <h3>검색결과 : {{count}}</h3>

        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">순위</th>
                    <th class="text-left">영화제목</th>
                    <th class="text-left">날짜</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item of movie" :key="item.movieName">
                    <td>{{item.seq}}</td>
<!--                    <td><img :src="item.movieName"></td>-->
                    <td>{{item.movieName}}</td>
                    <td>{{item.rankDate}}</td>

                </tr>
                </tbody>
            </template>
        </v-simple-table>
<!--        <div class="text-center" style="margin: 0 auto">-->
<!--            <div style="margin: 0 auto; width: 500px; height: 100px">-->
<!--                <span v-if="existPrev"  style="width: 50px; height: 50px; border: 1px solid black; margin-right: 5px">이전</span>-->
<!--                <span v-for="i of arr" :key="i" style="width: 50px; height: 50px; border: 1px solid black; margin-right: 10px">{{i}}</span>-->
<!--                <span v-if="existNext" @click="existNext" style="width: 50px; height: 50px; border: 1px solid black; margin-right: 5px">다음</span>-->
<!--            </div>-->
<!--&lt;!&ndash;        <v-pagination v-model="page" :length="5" :total-visible="5"></v-pagination>&ndash;&gt;-->
<!--        </div>-->

        <div class="btn-cover" style="margin: 0 auto">
            <button :disabled="pageNum === 0" @click="existPrev" class="page-btn">
                <span v-if="existPrev"  style="width: 50px; height: 50px; border: 1px solid black; margin-right: 5px">이전</span>
            </button>
            <span v-for="i of arr" :key="i" style="width: 50px; height: 50px; border: 1px solid black; margin-right: 10px">{{i}}</span>
            <button :disabled="pageNum >= pageCount - 1" @click="existNext" class="page-btn">
                <span v-if="existNext" @click="existNext" style="width: 50px; height: 50px; border: 1px solid black; margin-right: 5px">다음</span>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        el: '#app-4',
        data () {
            return {
                page: 1,
                existPrev : false,
                existNext : true,
                arr: [1,2,3,4,5]
            }
        },
        el2: '#app-5',
        data2 () {
            return {
                page: 1,
                existPrev : false,
                existNext : true,
                arr: [6,7,8,9,10]
            }
        },
        methods: {
            nextPage () {
                this.pageNum += 1;
            },
            prevPage () {
                this.pageNum -= 1;
            }
        },
        computed: {
            ...mapState({
                count: state => state.movie.count,
                movie: state => state.movie.movie
            })
        }
    };
</script>

<style>

</style>