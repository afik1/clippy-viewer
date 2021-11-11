<template>
  <div>
    <div class="signup-bar">
      <h1 class="clippy-logo">Clippy</h1>
      <Button @click="showPopup = true">
        <h4 class="btn-label">Sign Up!</h4>
      </Button>
    </div>
    <div class="opening-container">
      <h1 class="opening-title">Using your kindle to it's fullest potential</h1>
      <div class="opening-paragraph">
        Clippy is a web application designed to asist kindle users with viewing
        their book highlights in a more orgenized way and to give them the
        ability to share and save these importent ideas. signing up is not
        mandatory just upload your text file and get going!
      </div>
      <div>
        <div>
          <h4 class="small-text">allready have an account?</h4>
          <hr class="divider" />
        </div>
        <Button @click="showPopup = true">
          <h3 class="btn-label">Get Started!</h3>
        </Button>
        <!-- <FileAdd @parseFinished="fileParsed()">Load Clippings!</FileAdd> -->
      </div>
    </div>
    <!-- <div class="signin-container">
    <div class="error-row">
      <AlertBox class="alert-box"></AlertBox>
    </div>
    
  </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
// import FileAdd from '../components/AddClippingsFile.vue'
// import AlertBox from '../components/AlertBox.vue'

export default defineComponent({
  name: 'SignIn',
  components: { Button },
  methods: {
    fileParsed() {
      this.$router.push({ name: 'Library' })
    },
  },
})
</script>

<style scoped>
.opening-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  text-align: center;
  height: 100%;
  padding: 10rem 5rem 5rem 5rem;
}

.opening-paragraph {
  font-size: 4.4rem;
  padding: 0 9.6rem 0 9.6rem;
  margin-bottom: 6.4rem;
  font-weight: 500;
  line-height: 1.2;
}

.opening-title {
  font-size: 6.2rem;
  margin-bottom: 6.4rem;
}

.small-text {
  margin-bottom: 3.2rem;
  color: #1d3557;
}

.btn-label {
  font-weight: 700;
}

.signup-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 8rem 2rem 8rem;
}

.divider {
  border-top: 3px solid lightgrey;
}
</style>
