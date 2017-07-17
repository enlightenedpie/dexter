<template lang="html">
  <div id="Orders" class="tabcontent">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <h1> Your Profile </h1>
            <div class="tab">
              <button v-on:click="makeActive('profile')">Profile</button>
              <button v-on:click="makeActive('orders')">Orders</button>
              <button v-on:click="makeActive('courses')">Courses</button>
              <button v-on:click="makeActive('settings')">Settings</button>
            </div>
            <ul>

              <div v-if="active === 'profile'">
                <h3>Profile</h3>
                <img :src="user.profile.image" height="80">
                <p>{{user.profile.firstName}} {{user.profile.lastName}}</p>
              </div>

              <div v-if="active === 'orders'">
                <h3>Orders</h3>
                <ul>
                  <li v-for="(item, index) in user.orders">
                    {{index}}
                    <ul>
                      <li>- {{item}}</li>
                    </ul>
                    </li>
                </ul>
              </div>

              <div v-if="active === 'courses'">
                <h3>Courses</h3>
                <ul>
                  <li v-for="(item, index) in user.courses">
                  <button class="course-buttons" v-on:click="changecourse(index)"> {{index}} </button>
                  </li>
                </ul>
              </div>

              <div v-if="active === 'settings'">
                <h3>Settings</h3>
                <a>Recommend Content</a>
                <div class="onoffswitch">
                    <input type="checkbox" name="suggestcontent" id="recommendContent"
                         v-model="user.settings.recommendContent">
                </div>
                <br>
                <br>
                <a>Reset password</a>
                <div class="passwordreset">
                  <input type="text" name="resetpassword">
                    <br>
                    <input type="text" name="resetcheck">
                </div>
                <br>
                <br>
                <a>Offline Content</a>
                <a><div class="onoffswitch">
                  <input type="checkbox" name="suggestcontent" class="onoffswitch-checkbox" id="offlineContent"
                            v-model="user.settings.offlineContent">
                  <span class="onoffswitch-inner"></span>
                  <span class="onoffswitch-switch"></span>
                </div></a>
              </div>
            </ul>
          </div>
          <button class="modal-default-button" @click="$emit('close')"> Confirm </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        active: 'profile'
      }
    },
    methods: {
      makeActive: function(item){
                this.active = item;
            }
    },
    props: ['currentcourse','user','changecourse'],
    components: ['modal']
}
</script>
