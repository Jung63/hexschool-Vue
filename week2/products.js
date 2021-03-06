import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

const site = 'https://vue3-course-api.hexschool.io/v2';
const api_path = 'jung';
const app = createApp({
    data() {
        return {
            products: [],
            tempProduct: {},
        }
    },
    methods: {
        checkLogin() {
            // 取出 Token
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
            //每次發送token都發送至header裡(在axios網站可取得程式碼)
            axios.defaults.headers.common.Authorization = token;
            const url = `${site}/api/user/check`;
            axios.post(url)
                .then(() => {
                    this.getProduct();
                })
        },
        getProduct() {
            const url = `${site}/api/${api_path}/admin/products`;
            axios.get(url)
                .then((res) => {
                    this.products = res.data.products;
                })
        },
        openProduct(item) {
            this.tempProduct = item;
        }
    },
    mounted() {
        this.checkLogin();
    }
});
app.mount('#app')
