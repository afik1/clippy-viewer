<template>
  <div class="main-container">
    <div class="signup-bar">
      <h1 class="clippy-logo">Clippy</h1>
      <Button @click="showPopup = true">
        <h4 class="btn-label">Sign Up!</h4>
      </Button>
    </div>
    <div class="opening-wrapper">
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
              <Button @click="showPopup">
                <h3 class="btn-label">Get Started!</h3>
              </Button>
              <Popup
                class="popup"
                v-show="isModalVisible"
                @close="closePopup"
              ></Popup>
              <FileAdd :resetLibrary="true" @parseFinished="fileParsed()">
                <h3 class="btn-label">Enter your clippings</h3>
              </FileAdd>
            </div>
          </div>
        </div>
        <div class="opening-image"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import FileAdd from '../components/AddClippingsFile.vue'
import Popup from '../components/Popup.vue'
// import AlertBox from '../components/AlertBox.vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'SignIn',
  components: { Button, FileAdd, Popup },
  data() {
    return {
      isModalVisible: false,
    }
  },
  computed: {
    ...mapState('alert', ['alertText']),
  },
  methods: {
    fileParsed() {
      this.$router.push({ name: 'Library' })
    },
    showPopup() {
      this.isModalVisible = true
    },
    closePopup() {
      this.isModalVisible = false
    },
  },
})
</script>

<style scoped>
.opening-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.opening-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: flex-start;
  padding: 0 5rem 5rem 7rem;
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
  margin: 3rem 8rem 0 8rem;
}

.divider {
  border-top: 2px solid cadetblue;
  width: 60%;
  margin: 0 0 1rem 1rem;
}

.opening-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 5rem 0 5rem;
  height: 100%;
}

.opening-image {
  background-color: cadetblue;
}

.opening-btns {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-self: flex-end;
  margin: 5.2rem 0 0 0;
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

.main-container {
  display: flex;
  flex-flow: column;
  height: 100vh;
}

.popup {
  position: absolute;
}
</style>
