<template>
  <v-container fluid pt-1>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
      	<div class="crossword-cell" v-for="i in 24">{{ '&nbsp' }}</div>
      	<v-btn @click="createNewCrossword"></v-btn>
    </v-slide-y-transition>
  </v-container>
</template>      
<script>
  export default {
    components: {},
    data () {
      return {
      }
    },
    methods: {
      createNewCrossword () {
        this.$router.push('/editor')
      }
    }
  }
</script>
<style scoped>
.crossword-row {
  	display: flex;
  	flex-direction: row;
}
.crossword-cell {
	display: inline-block;
  	width: 3.7%;
  	max-width: 3.7%;
  	border: 1px black solid;
  	text-align: center;
  	margin: 1px;
  }
</style>