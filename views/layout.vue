<template>
    <!DOCTYPE html>
    <link rel="stylesheet" href="/style.css">
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <script src="https://unpkg.com/vue/dist/vue.js"></script>
        </head>
        <body>
        <div id="toolbar">
            <ul>
                <li> <button id='modal-button' v-on:click="showModal = true"> Menu </button> </li>
                <li><img src="https://supertutortv.com/wp-content/uploads/2016/10/sttv_site_logo.png" height=40 class="logo"/></li>
                <li> Hi, {{user.profile.firstName}} </li>
            </ul>
        </div>
            {{{app}}}
            {{{script}}}
        </body>
    </html>
</template>
