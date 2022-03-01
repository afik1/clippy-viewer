<template>
  <div class="file-reader">
    <input type="file" id="file" ref="file" class="file" @change="onSelect" />
    <label for="file"><slot></slot></label>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextFileReader',
  methods: {
    onSelect() {
      let file = this.$refs.file.files[0]

      if (file) {
        var reader = new FileReader()
        reader.readAsText(file, 'UTF-8')
        reader.onload = function (evt) {
          let fileText = evt.target.result
          this.$emit('file-read', fileText)
        }.bind(this)
        reader.onerror = function () {
          this.$store.dispatch(
            'showErrorMessage',
            'Sorry error while parsing file :))'
          )
        }
      }
    },
  },
})
</script>

<style scoped>
.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.file-reader {
  cursor: pointer;
}
</style>
