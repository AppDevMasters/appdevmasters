document.addEventListener('DOMContentLoaded', e => {
	microModal = MicroModal.init({
		openClass: 'modal--active',
		disableScroll: true,
		disableFocus: true,
	});

	if (!getCookie('visit'))
		setTimeout(() => {
			openPopup('cookie-policy-popup');
		}, 1000);

}, { once: true });


// Get starteg modal

document.getElementById('get-started-btn').addEventListener('click', event => {
	let closeModal = true;
	try {
		sendRequset('get-started-form');
		setTimeout(() => {
			showModal('success-request');
		}, 700);
	}
	catch (error) {
		closeModal = false;
		alert(error.message);
		console.error(error);
	}

	if (closeModal) MicroModal.close('get-started');
})

document.getElementById('login-btn').addEventListener('click', event => {
	let closeModal = true;
	try {
		sendRequset('login-form');
		setTimeout(() => {
			showModal('success-request-2');
		}, 700);
	}
	catch (error) {
		closeModal = false;
		alert(error.message);
		console.error(error);
	}

	if (closeModal) MicroModal.close('login');;
})

// Hide placeholder when input|textarea is focused
let lastInput, lastInputPlaceholder;
document.addEventListener('focus', event => {
	if (lastInput) {
		lastInput.placeholder = lastInputPlaceholder;
		lastInput = lastInputPlaceholder = undefined;
	}

	if (!isInputable(event.target)) return;

	lastInput = event.target;
	lastInputPlaceholder = lastInput.placeholder;
	lastInput.placeholder = '';
	
}, { capture: true });

// Accept cookie privacy

document.addEventListener('click', e => {
	const closestEl = e.target.closest('[data-accept-cookie-policy]');
	if (!closestEl) return;
	setCookie('visit', '1');
})

// Popup

document.addEventListener('click', e => {
	const closeEl = e.target.closest('[data-popup-close]');
	if (!closeEl) return;

	const popupEl = closeEl.closest('[data-popup]');
	if (!popupEl) return;

	if (!popupEl.id) return;
	closePopup(popupEl.id);
})

function openPopup(id) {
	document.getElementById(id).classList.add('popup--active');
}

function closePopup(id) {
	document.getElementById(id).classList.remove('popup--active');
}

// Work with cookie
// See for more details: https://learn.javascript.ru/cookie

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
	options = { path: '/', ...options };

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true)
			updatedCookie += "=" + optionValue;
	}

	document.cookie = updatedCookie;
}

function deleteCookie(name) {
	setCookie(name, "", {
		'max-age': -1
	})
}

// Util

function isInputable(el) {
	return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA';
}

// Work with fetch

function sendRequset(formId) {
	const fd = new FormData(document.getElementById(formId));
	const contact = fd.get('contact');
	if (!contact) {
		throw new Error('Contact is required');
	}
	const text = fd.get('text');
	if (!text) {
		throw new Error('Text is required');
	}
	clearAllInputsInPage();
	
	const url = `https://client.taskit.pro/login/request?contact=${contact}&text=${text}`;
	return fetch(encodeURI(url), {
		method: 'GET'
	})
}

function showModal(id) {
	MicroModal.show(id, {
		openClass: 'modal--active',
		disableScroll: true,
		disableFocus: true,
	});
}

function clearAllInputsInPage() {
	[...document.querySelectorAll('textarea, input')].forEach(el => {
		el.value = '';
	});
}

