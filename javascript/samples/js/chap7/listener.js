function addListener(elem, ev, listener) {
	if(elem.attachEvent){
		elem.attachEvent('on' + ev, listener);
	} else if(elem.addEventListener) {
		elem.addEventListener(ev, listener, false);
	} else {
		throw new Error('イベントリスナに未対応です。');
	}
}

function removeListener(elem, ev, listener) {
	if(elem.detachEvent){
		elem.detachEvent('on' + ev, listener);
	} else if(elem.removeEventListener) {
		elem.removeEventListener(ev, listener, false);
	} else {
		throw new Error('イベントリスナに未対応です。');
	}
}
