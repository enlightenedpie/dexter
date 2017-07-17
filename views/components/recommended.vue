<template>
    <div class="recommended">Recommended Videos
        <a>
            <ul v-for="(item, index) in user.courses">
                <li v-for="(subitem, subindex) in item.recommended">
                    <a v-if="index === currentcourse">{{subitem.name}}</a>
                </li>
            </ul>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['user', 'currentcourse']
    }
</script>