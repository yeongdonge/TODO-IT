<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAllTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations({
            clearAllTodo: 'clearAllTodo',
        }),
        // clearAllTodo() {
        //     this.$store.commit('clearAllTodo');
        // }
    }
}
</script>

<style scpoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn {
    color: #e20303;
    display: block;
}


</style>