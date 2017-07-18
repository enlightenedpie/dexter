<template lang="html">
  <div>
    <div id="toolbar">
      <ul>
          <li> <button class='modal-button'> <img id="menu-icon" src="https://image.flaticon.com/icons/png/512/56/56763.png"> Menu </button> </li>
          <li><img src="https://supertutortv.com/wp-content/uploads/2016/10/sttv_site_logo.png" height=40 class="logo"/></li>
          <li> <button class='modal-button' v-on:click="modalswitch(true)"> <img src="https://cdn0.iconfinder.com/data/icons/account-avatar/128/user_2-512.png" height="14"> {{ user.profile.firstName }} </button> </li>
      </ul>
    </div>
    <div v-if="showmodal" id="Orders" class="tabcontent">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <div class="tab">
                <button v-on:click="makeActiveCourse('profile')">Profile</button>
                <button v-on:click="makeActiveCourse('orders')">Orders</button>
                <button v-on:click="makeActiveCourse('courses')">Courses</button>
                <button v-on:click="makeActiveCourse('settings')">Settings</button>
              </div>
              <ul>

                <div v-if="activecourse === 'profile'">
                  <h3>Profile</h3>
                  <img :src="user.profile.image" height="80">
                  <p>{{user.profile.firstName}} {{user.profile.lastName}}</p>
                </div>

                <div v-if="activecourse === 'orders'">
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

                <div v-if="activecourse === 'courses'">
                  <h3>Courses</h3>
                  <ul>
                    <li v-for="(item, index) in user.courses">
                    <button class="course-buttons" v-on:click="switchcourse(index)"> {{index}} </button>
                    </li>
                  </ul>
                </div>

                <div v-if="activecourse === 'settings'">
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
            <button class="modal-default-button" v-on:click="modalswitch(false)"> Confirm </button>
          </div>
        </div>
      </div>
    </div>
        <div id="video-holder">
            <iframe width="100%" height="650" v-bind:src="vidsrc" frameborder="0" allowfullscreen></iframe>
        </div>
        <div id="NavBar" class="navbar">
            <h3>{{currentcourse}}</h3>
        <div id="navbar-items">
          <ul class="nav-items">
            <li class="active" v-for="(item, index) in user.courses[currentcourse].subjects" v-on:click="makeActiveTab(item)">
              <a> {{item}} </a>
            </li>
          </ul>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activecourse: 'profile',
        activetab: ''
            }
    },
    methods: {
      makeActiveCourse: function(item){
                this.activecourse = item;
            },
        makeActiveTab: function(item){
            this.activetab = item;
        }
    },
    props: ['currentcourse','user','switchcourse', 'showmodal', 'modalswitch', 'vidsrc'],
    components: ['modal']
}
</script>
