<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Modal from './Modal/Modal.vue';
import Tools from './Modal/Tools.vue';

@Component({
  name: 'Test',
  components: {
    Modal,
    Tools
  }
})
export default class Test extends Vue {
  // 确保有 export default
}
</script>
<template>
  <div>
    <Modal />
    <Tools />
  </div>
</template>
<style lang="scss">

</style>