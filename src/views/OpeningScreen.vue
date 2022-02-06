<template>
  <div>
    <div class="signup-bar">
      <h1 class="clippy-logo">Clippy</h1>
      <Button @click="showPopup = true">
        <h4 class="btn-label">Sign Up!</h4>
      </Button>
    </div>
    <div class="opening-container">
      <div class="opening-info">
        <h1 class="opening-title">
          Using your kindle to it's fullest potential
        </h1>
        <div class="opening-paragraph">
          View your clippings in an orgenized library and enjoy the same
          highlights again and again<br />on mobile and pc
        </div>
        <div class="opening-btns">
          <h4 class="small-text">allready have an account?</h4>
          <div class="divider"></div>
          <div class="btn-row">
            <Button @click="showPopup()">
              <h3 class="btn-label">Get Started!</h3>
            </Button>
            <FileAdd :resetLibrary="true" @parseFinished="fileParsed()"
              ><h3 class="btn-label">Load Clippings!</h3></FileAdd
            >
          </div>
        </div>
      </div>
      <div class="opening-images"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import FileAdd from '../components/AddClippingsFile.vue'
import { mapActions, mapState } from 'vuex'

// import AlertBox from '../components/AlertBox.vue'

export default defineComponent({
  name: 'SignIn',
  components: { Button, FileAdd },
  computed: {
    ...mapState('alert', ['alertText']),
  },
  methods: {
    ...mapActions('alert', ['showErrorMessage']),
    fileParsed() {
      this.$router.push({ name: 'Library' })
    },
    showPopup() {
      console.log('popup')
    },
  },
})
</script>

<style scoped>
.opening-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: flex-start;
  height: 100%;
  padding: 10rem 5rem 5rem 7rem;
}

.opening-paragraph {
  font-size: 2.8rem;
  margin-bottom: 6.4rem;
  font-weight: 400;
  line-height: 1.2;
  padding: 0 6rem 0 2rem;
}

.opening-title {
  font-size: 6.2rem;
  margin-bottom: 4.8rem;
  line-height: 8rem;
}

.small-text {
  margin: 0 0 1rem 2rem;
  font-weight: 500;
  color: #1d3557;
}

.btn-label {
  font-weight: 400;
  font-size: 1.8rem;
}

.signup-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 8rem 2rem 8rem;
}

.divider {
  border-top: 2px solid cadetblue;
  width: 60%;
  margin: 0 0 1rem 1rem;
}

.opening-info {
  padding: 0 5rem 0 5rem;
}

.opening-images {
  background-color: cadetblue;
}

.opening-btns {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 3.2rem 0 0 0;
}

.btn-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0 0 1rem;
  width: 105%;
}
</style>
