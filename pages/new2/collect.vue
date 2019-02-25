<template>
<div>
    <div class="columns" v-for="n in columnSize()" v-bind:key="n">
      <div v-if="hasData(n, 0)" :class="columnClass(n, 0)">
        <JMCollect :collect="getData(n, 0)"></JMCollect>
      </div>
      <div v-if="hasData(n, 1)" :class="columnClass(n, 1)">
        <JMCollect :collect="getData(n, 1)"></JMCollect>
      </div>
    </div>
</div>
</template>

<script>
import JMRightAd from "@/components/new2/JMRightAd";
import JMCollect from "@/components/new2/JMCollect";
export default {
  components: {JMRightAd, JMCollect},
  layout: "new1",
  methods: {
    columnSize(){
      let size = this.collects.content.length;
      return parseInt(size / 2) + (size % 2 > 0 ? 1 : 0);
    },
    columnClass(n, index){
      let isOdd = n % 2 == 1;
      if(isOdd){
        return index == 0 ? "column is-two-thirds" : "column";
      }
      return index == 0 ? "column" : "column is-two-thirds";
    },
    getData(n, sort){
      let content = this.collects.content;
      let index = (n-1)*2 + sort;
      return content[index];
    },
    hasData(n, sort){
      let content = this.collects.content;
      let index = (n-1)*2 + sort;
      return index < content.length;
    }
  },
  async asyncData({ $axios }) {
    const collects = await $axios.$get("/collect/newest");
    return {collects: collects.data};
  }
};
</script>