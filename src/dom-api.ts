import htmldomapi, { DOMAPI } from 'snabbdom/htmldomapi'

export default class DOMApi implements DOMAPI {
	/** 记录操作日志 */
	public logStore: LogItem[] = [];
	public eid: number = 0;
	public replayElm: {
		[eid: number]: Node,
	} = {};

	constructor(rootElm, replayRootElm) {
		this.eid = 0;
		this.replayElm = {};
		const eid = this.eid++;
		rootElm.dataset.eid = eid;
		this.replayElm[eid] = replayRootElm;
	}
	getReplayElm(elm) {
		if (!elm) {
			return;
		}
		if (htmldomapi.isElement(elm)) {
			return this.replayElm[elm.dataset.eid];
		} else if (htmldomapi.isText(elm) || htmldomapi.isComment(elm)) {
			return this.replayElm[elm.eid];
		}
	}

	createElement(tagName) {
		const node = htmldomapi.createElement(tagName);
		const cloneNode = node.cloneNode(false);
		const eid = this.eid++;
		node.dataset.eid = eid;
		this.replayElm[eid] = cloneNode;

		this.logStore.push({
			type: 'createElement',
			args: [tagName],
			elm: cloneNode,
		});
		return node;
	}
	createElementNS(namespaceURI, qualifiedName): Element {
		return htmldomapi.createElementNS(namespaceURI, qualifiedName);
	}
	createTextNode(text) {
		const node = htmldomapi.createTextNode(text);
		const cloneNode = node.cloneNode(false);
		const eid = this.eid++;
		node.eid = eid;
		this.replayElm[eid] = cloneNode;

		// 使用函数并没有很方便
		this.logStore.push({
			type: 'createTextNode',
			args: [text],
			elm: cloneNode,
		});
		return node;
	}
	createComment(text) {
		const node = htmldomapi.createComment(text);
		const cloneNode = node.cloneNode(false);
		const eid = this.eid++;
		node.eid = eid;
		this.replayElm[eid] = cloneNode;

		this.logStore.push({
			type: 'createComment',
			args: [text],
			elm: cloneNode,
		});
		return node;
	}
	insertBefore(parentNode, newNode, referenceNode) {
		this.logStore.push({
			type: 'insertBefore',
			args: [this.getReplayElm(parentNode), this.getReplayElm(newNode), this.getReplayElm(referenceNode)],
		});
		return htmldomapi.insertBefore(parentNode, newNode, referenceNode);
	}
	removeChild(node, child) {
		this.logStore.push({
			type: 'removeChild',
			args: [this.getReplayElm(node), this.getReplayElm(child)],
		});
		return htmldomapi.removeChild(node, child);
	}
	appendChild(node, child) {
		this.logStore.push({
			type: 'appendChild',
			args: [this.getReplayElm(node), this.getReplayElm(child)],
		});
		return htmldomapi.appendChild(node, child);
	}
	parentNode(node) {
		return htmldomapi.parentNode(node);
	}
	nextSibling(node) {
		return htmldomapi.nextSibling(node);
	}
	tagName(elm) {
		return elm.tagName;
	}
	setTextContent(node, text) {
		this.logStore.push({
			type: 'setTextContent',
			args: [this.getReplayElm(node), text],
		});
		return htmldomapi.setTextContent(node, text);
	}
	getTextContent(node) {
		return htmldomapi.getTextContent(node);
	}
	isElement(node): node is Element {
		return htmldomapi.isElement(node);
	}
	isText(node): node is Text {
		return htmldomapi.isText(node);
	}
	isComment(node): node is Comment {
		return htmldomapi.isComment(node);
	}
}
