require('./bootstrap');

import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import AppLayout from "./Layouts/App.vue";

// commons
import CustomButton from "./Commons/CustomButton.vue";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return (
            createApp({ render: () => h(App, props) })
                .use(plugin)
                .mixin({ methods: { route } })
                .component("Link", Link)
                .component("AppLayout", AppLayout)
                .component("CustomButton", CustomButton)
                .mount(el)
        );
    },
});
