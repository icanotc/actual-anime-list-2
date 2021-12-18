import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-404dfddf.js",
			css: [assets + "/_app/assets/start-d5b4de3e.css"],
			js: [assets + "/_app/start-404dfddf.js",assets + "/_app/chunks/vendor-c3cab601.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"anime.json","size":529,"type":"application/json"},{"file":"animedb/30484-Steins_Gate_0/data.json","size":1623,"type":"application/json"},{"file":"animedb/30484-Steins_Gate_0/image/93519l.jpg","size":75507,"type":"image/jpeg"},{"file":"animedb/30484-Steins_Gate_0/image/93520l.jpg","size":75075,"type":"image/jpeg"},{"file":"animedb/30484-Steins_Gate_0/image/93521l.jpg","size":55786,"type":"image/jpeg"},{"file":"animedb/30484-Steins_Gate_0/image/93541l.jpg","size":59432,"type":"image/jpeg"},{"file":"animedb/30484-Steins_Gate_0/image/98995l.jpg","size":43862,"type":"image/jpeg"},{"file":"animedb/40834-Ousama_Ranking/data.json","size":976,"type":"application/json"},{"file":"animedb/40834-Ousama_Ranking/image/104667l.jpg","size":50772,"type":"image/jpeg"},{"file":"animedb/40834-Ousama_Ranking/image/110088l.jpg","size":159661,"type":"image/jpeg"},{"file":"animedb/40834-Ousama_Ranking/image/117141l.jpg","size":128094,"type":"image/jpeg"},{"file":"animedb/40834-Ousama_Ranking/image/117616l.jpg","size":95517,"type":"image/jpeg"},{"file":"animedb/45576-Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2/data.json","size":1147,"type":"application/json"},{"file":"animedb/45576-Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2/image/110933l.jpg","size":88800,"type":"image/jpeg"},{"file":"animedb/45576-Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2/image/115018l.jpg","size":155904,"type":"image/jpeg"},{"file":"animedb/45576-Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2/image/117222l.jpg","size":137344,"type":"image/jpeg"},{"file":"animedb/45576-Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2/image/117777l.jpg","size":136987,"type":"image/jpeg"},{"file":"animedb/45576-Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2/image/119392l.jpg","size":190299,"type":"image/jpeg"},{"file":"favicon.png","size":1571,"type":"image/png"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/statistics\.json$/,
						params: empty,
						load: () => import("../../src/routes/statistics.json.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/animes\.json$/,
						params: empty,
						load: () => import("../../src/routes/animes.json.ts")
					},
		{
						type: 'page',
						pattern: /^\/statistics\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/statistics.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/statistics.svelte": () => import("../../src/routes/statistics.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-e19c778d.js","css":["assets/pages/__layout.svelte-d7354c69.css"],"js":["pages/__layout.svelte-e19c778d.js","chunks/vendor-c3cab601.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-0230b36a.js","css":[],"js":["error.svelte-0230b36a.js","chunks/vendor-c3cab601.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-30230d2c.js","css":[],"js":["pages/index.svelte-30230d2c.js","chunks/vendor-c3cab601.js"],"styles":[]},"src/routes/statistics.svelte":{"entry":"pages/statistics.svelte-6e514603.js","css":[],"js":["pages/statistics.svelte-6e514603.js","chunks/vendor-c3cab601.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}