<template>
    <div class="home-page">
        <div v-if="!isLogin">
            <router-link class="sign-in" to="/sign_in">Sign In</router-link>
            <router-link to="/sign_up" class="sign-up">Sign Up</router-link>
        </div>
        <div v-else>
            <div>qqqq</div>
            <flow-item v-for="flow in flows" :key="flow.period" :info="flow"></flow-item>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import FlowItem from '@/components/flowItem'
export default {
    name: 'Home',
    data() {
        return {
            flows: [{
                    title: 'today',
                    lastest: {
                        name: 'aaaa',
                        amount: '9.00'
                    },
                    expense: '1900',
                    earn: '900'
                },
                {
                    title: 'Last week',
                    lastest: {
                        name: 'week',
                        amount: '9.00'
                    },
                    expense: '1900',
                    earn: '900'
                }
            ]
        }
    },
    created() {},
    computed: mapState({
        isLogin: state => state.account && state.account.userInfo.name
    }),
    components: {
        FlowItem
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
    text-align: center;
}

.sign-in,
.sign-up {
    display: inline-block;
    width: 30vw;
    height: 30vw;
    margin: 1rem;
    border-radius: 0.5rem;
    line-height: 30vw;
    background: lightcoral;
    color: #fff;
    text-decoration: none;
}
</style>
