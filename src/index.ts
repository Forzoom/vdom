import { init, h } from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import styleModule from 'snabbdom/modules/style';
import eventlistenersModule from 'snabbdom/modules/eventlisteners';
import { testModule } from './test-module.js';
import Elm from './elm.js';
import DOMApi from './dom-api';
import htmldomapi from 'snabbdom/htmldomapi';

const container = document.getElementById('container');
const presentation = document.getElementById('presentation');
const pending = document.getElementById('pending');
const domapi = new DOMApi(container, presentation);
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
		key: 3,
	}, '3'),
	h('div', {
		key: 4,
	}, '4'),
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
		item.elm.classList.add('hidden');
	} else if (item.type === 'createTextNode') {

	} else if (item.type === 'appendChild' || item.type === 'insertBefore' || item.type === 'setTextContent') {
		htmldomapi[item.type].apply(htmldomapi, item.args);
		for (let i = 1; i < item.args.length; i++) {
			const arg = item.args[i];
			if (arg && htmldomapi.isElement(arg) && arg.classList.contains('hidden')) {
				window.setTimeout(() => {
					arg.classList.remove('hidden');
				}, 10);
			}
		}
	} else if (item.type === 'removeChild') {
		// htmldomapi[item.type].apply(htmldomapi, item.args);
		for (let i = 1; i < item.args.length; i++) {
			const arg = item.args[i];
			console.log('target1');
			if (arg && htmldomapi.isElement(arg)) {
				arg.classList.add('hidden');
				arg.addEventListener('transitionend', () => {
					console.log('target2', item.args);
					htmldomapi[item.type].apply(htmldomapi, item.args);
				});
			}
		}
	}
	i++;
}, 500);