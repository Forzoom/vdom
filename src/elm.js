export default class Elm {
	constructor(tagName, logStore) {
		this.id = '';
		this.tagName = tagName;
		this.className = '';
		this.children = [];
		this.logStore = logStore;
	}
	setAttribute(key, value) {
		this.logStore.push();
		this[key] = value;
		if (key === 'id') {
			this.id = value;
		} else if (key === 'class') {
			this.className = value;
		}
	}
	appendChild(elm) {
		this.children.push(elm);
	}
	insertBefore(newNode, referenceNode) {
		if (referenceNode) {
			const pos = this.children.indexOf(referenceNode);
			if (pos < 0) {
				this.appendChild(newNode);
			} else {
				this.children.splice(pos, 0, newNode);
			}
		} else {
			this.appendChild(newNode);
		}
	}
}