import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js'
const site = 'https://vue3-course-api.hexschool.io/v2'
const app = createApp({
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            const url = `${site}/admin/signin`;
            axios.post(url, this.user)
                .then((res) => {
                    const { token, expired } = res.data;
                    //存取token
                    document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
                    window.location = './products.html';
                })
                .catch((err) => {
                    console.log(err);
                    alert(err.data.message);
                })
        }
    },
});
app.mount('#app')
