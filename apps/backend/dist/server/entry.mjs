import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DQxt_TG8.mjs';
import { manifest } from './manifest_BNVSn_2h.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contacts.astro.mjs');
const _page2 = () => import('./pages/login.astro.mjs');
const _page3 = () => import('./pages/signup.astro.mjs');
const _page4 = () => import('./pages/verify/_token_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/contacts.astro", _page1],
    ["src/pages/login.astro", _page2],
    ["src/pages/signup.astro", _page3],
    ["src/pages/verify/[token].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///home/gabitodev/Documents/contacto-fullstack-lunes/apps/frontend/dist/client/",
    "server": "file:///home/gabitodev/Documents/contacto-fullstack-lunes/apps/frontend/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
