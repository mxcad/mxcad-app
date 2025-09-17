<script setup>
import { onMounted } from "vue"
import { VCard, VBtn } from "vuetify/components"
const onClick = () => Mx.MxFun.sendStringToExecute('Mx_drawLine')
import { MxCADView } from "mxcad-app"

onMounted(() => {
  const mxcadview = new MxCADView()
  mxcadview.create("#mxcad_app")
})
</script>

<template>
    <VCard  class="d-flex w-100 h-100" height="1000">
      1211313123123
        <v-btn @click="() => onClick()">
      画线
    </v-btn>
        <div id="mxcad_app"></div>
    </VCard>
     <VCard  class="d-flex w-100" height="1000">
      asdasdasdasd
     </VCard>
</template>

<style scoped>
#app {
  height: 2000px;
}
#mxcad_app {
  width: 1000px;
  height: 1000px;
}
</style>
