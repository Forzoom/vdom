import { init, h } from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import styleModule from 'snabbdom/modules/style';
import eventlistenersModule from 'snabbdom/modules/eventlisteners';
import { testModule } from './test-module.js';
import Elm from './elm.js';
import DOMApi from './dom-api.js';
import htmldomapi from 'snabbdom/htmldomapi';

const container = document.getElementById('container');
const presentation = document.getElementById('presentation');
const pending = document.getElementById('pending');
const domapi = new DOMApi(container, presentation, []);
const patch = init([
	// classModule,
	// propsModule,
	// styleModule,
	// eventlistenersModule,
], domapi);

const vnode = h('div#container', [
	h('div', {
		key: 1,
	}, '1'),
	h('div', {
		key: 2,
	}, '2'),
]);
patch(container, vnode);

const newVnode = h('div#container', [
	h('div', {
		key: 1,
	}, '1'),
]);
patch(vnode, newVnode);

const log = domapi.logStore;

let i = 0;
let handler = setInterval(() => {
	if (!log[i] && handler) {
		clearInterval(handler);
		handler = null;
		return;
	}
	const item = log[i];
	console.log(item.type);
	if (item.type === 'createElement') {

	} else if (item.type === 'createTextNode') {

	} else if (item.type === 'appendChild' || item.type === 'insertBefore' || item.type === 'removeChild') {
		console.log(item.type, item.args);
		htmldomapi[item.type].apply(htmldomapi, item.args);
	}
	i++;
}, 1000);