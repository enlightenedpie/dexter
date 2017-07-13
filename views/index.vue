<script>
    const Vue = require('vue');
    //MODAL TAG TEMPLATE
    Vue.component('modal', {
        template: `<transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="modal-body">
                  <h1> Your Profile </h1>
                  <div class="tab">
                    <button class="tablinks" onclick="openTab(event, 'Profile')">Profile</button>
                    <button class="tablinks" onclick="openTab(event, 'Orders')">Orders</button>
                    <button class="tablinks" onclick="openTab(event, 'Courses')">Courses</button>
                    <button class="tablinks" onclick="openTab(event, 'Settings')">Settings</button>
                  </div>
                  <div id="Profile" class="tabcontent">
                    <h3>Profile</h3>
                    <img src={{data.profile.image}} height="80">
                    <p>{{userData.profile.firstName}} {{userData.profile.lastName}}</p>
                  </div>
                  <div id="Orders" class="tabcontent">
                    <h3>Orders</h3>
                    <ul>
                    </ul>
                  </div>
                  <div id="Courses" class="tabcontent">
                    <h3>Courses</h3>
                    <ul>
                    </ul>
                  </div>
                  <div id="Settings" class="tabcontent">
                    <h3>Settings</h3>
                    <a>Recommend Content</a>
                    <div class="onoffswitch">
                        <input type="checkbox" name="suggestcontent" id="recommendContent"
                            {{userData.settings.recommendContent}}>
                        <label for="myonoffswitch">
                        </label>
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
                          {{userData.settings.offlineContent}}>
                      <label class="onoffswitch-label" for="myonoffswitch">
                          <span class="onoffswitch-inner"></span>
                          <span class="onoffswitch-switch"></span>
                      </label>
                    </div></a>
                  </div>
                  <button class="modal-default-button" @click="$emit('close')"> Confirm </button>
                </div>
              </div>
            </div>
          </div>
        </transition> `,
        methods: {
            switchCourse(course) {
                curCourse.currentCourse = course;
            }
        }
    });
    export default {
        data: function() {
            return {
        }
        }
    }
</script>

<template>
    <div>
    <div id="toolbar">

        <ul>
            <li>

                <!-- MODAL BUTTON -->
                <button id='modal-button' @click="showModal = true"> Menu </button>
                <modal v-if="showModal" @close="showModal = false"> </modal>
                <!-- MODAL END -->

            <li> Supertutortv </li>
            <li> Hi, {{userData.profile.firstName}} </li>
        </ul>

    </div>
    <!-- MAIN DIV -->
    <div class="maindiv">

        <h1> {{currentCourse}} </h1>


        <iframe width="854" height="480" src="https://www.youtube.com/embed/DeAw6aXHzcY?ecver=1" frameborder="0" allowfullscreen></iframe>

    </div>

    <!-- RECENTLY WATCHED -->
    <div id="recently-watched">
        <h4> Recently Watched </h4>

    </div>


    <!-- RECOMMENDED -->
    <div id="recommended">
        <h4> Recommended </h4>

    </div>
</div>
</template>