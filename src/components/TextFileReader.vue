<template>
  <div>
    <div class="styled-btn">
      <input type="file" id="file" ref="file" class="file" @change="onSelect" />
      <label for="file"><slot></slot></label>
    </div>
  </div>
</template>

<script lang="js">

export default {
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
}
</script>

<style>
.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}
</style>
