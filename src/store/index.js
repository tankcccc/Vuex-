import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		amount:10,
		list:[
		{name:'jake',score:1},
		{name:'tom',score:90}
	]
	},
	getters:{
		failedNumber:function(state){
			let n =0
			state.list.forEach(item=>{
				if(item.score<60) n++
			})
			return n 
		}
	},
	mutations:{
		add:function(state,obj){
			state.list.push(obj)
		},
		addAmount:function(state){
			state.amount++
		}
	},
	actions:{
		addActAmount:function(context){
			setTimeout(function(){
				context.commit('addAmount')
			},2000)
		}
	}
})
