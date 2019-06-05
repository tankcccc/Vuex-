<template>
  <div class="hello">
   <!--<p>vuex中的数据{{arr}}</p>
   <p>vuex的数据{{this.$store.state.amount}}</p>-->.
   <p>vuex中的数据{{amount}}</p>
   <p>vuex中的数据{{list}}</p>
   <p>不及格的人数:{{failedNumber}}</p>
   <button @click="addAmount">addAmount</button>
   <!--<button @click='add'>add</button>-->
   <p>
   	姓名：<input ref='name' id="" name="" value="" />
   </p>
   <p>
   	分数：<input ref='score' id="" name="" value="" />
   </p>
   <button @click="addScore"></button>
  </div>
</template>

<script>
	
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {

  data () {
    return {
//    arr:this.$store.state.arr
    }
  },
	computed:{
		 ...mapState(['amount','list']),
		 ...mapGetters(['failedNumber'])
	},
	methods:{
		...mapMutations(['add','addAmount']),
		addScore:function(){
			let name =this.$refs.name.value
			let score=this.$refs.score.value
			this.add({name,score})
		},
//		addActAmount:function(){
//			this.$store.dispatch('addActAmount')
//		}
		...mapActions(['addActAmount'])
		
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
