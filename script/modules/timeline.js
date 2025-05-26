// See on Codepen: https://codepen.io/Sanedi/pen/OJvvVXG

document.addEventListener('DOMContentLoaded', updateTimeline);

document.addEventListener('scroll', updateTimeline);

document.addEventListener('resize', updateTimeline);

document.addEventListener('click', e => {
	const closestTab = e.target.closest('[data-timeline-tab]');
	if (!closestTab) return;
	e.preventDefault();

	const id = getItemIdFromTab(closestTab);
	const item = document.getElementById(id)

	scrollToItem(item);
});

function updateTimeline() {
	const items = getTimelineItems();
	const tabs = getTimelineTabs();
	const scrolledItem = getScrolledItem(items);
	doTimelineHistory();

	const setTab = (el, flag) => {
		setTabActiveClass(el, flag);
		setActiveClassesInto(el, flag)
	}

	const setItem = (el, flag) => {
		setItemActiveClass(el, flag);
		setActiveClassesInto(el, flag)
	}

	if (!scrolledItem) {
		tabs.forEach(tab => setTab(tab, false));
		items.forEach(item => setItem(item, false));
		return;
	};

	const id = scrolledItem.getAttribute('id');
	let activeTab = undefined;
	let activeItem = undefined

	tabs.forEach(tab => {
		if (getItemIdFromTab(tab) === id) activeTab = tab	
		else setTab(tab, false);
	})
	items.forEach(item => {
		if (item.id === id)  activeItem = item;
		else setItem(item, false);
	})

	scrollToTab(activeTab);
	setItem(activeItem, true);
	setTab(activeTab, true);
}

function doTimelineHistory() {
	const attr = 'data-timeline-history';
	const els = document.querySelectorAll('[' + attr + ']');
	const offsetY = window.scrollY;
	els.forEach((el, i) => {
		const itemEl = el.closest('[data-timeline-item]');
		const elOffsetY = geItemOffsetTop(itemEl) ;
		const _class = el.getAttribute(attr);
		if (elOffsetY < offsetY) el.classList.add(_class);
		else el.classList.remove(_class);
	});
}

function geItemOffsetTop(el) {
	let offsetTop = el.getBoundingClientRect().top + window.pageYOffset;
	return el.dataset.timelineItem
			? offsetTop -= el.dataset.timelineItem
			: offsetTop;
}

function scrollToTab(el) {
	if (el.hasAttribute('data-timeline-tab-active')) 
		return;
	smoothScroll(el);
}

function scrollToItem(el) {
	const error = 2;
	scrollTo({
		top: geItemOffsetTop(el) + error,
		behavior: 'smooth'
	})
}

function getScrolledItem(items) {
	let scrolledItem = undefined;
	for (let i = 0; i < items.length; i++) {
		const el = items[i];
		let offsetTop = geItemOffsetTop(el);
		if (window.scrollY <= offsetTop)
			break;
		scrolledItem = el;
	}
	return scrolledItem;
}

function setActiveClassesInto(targetEl, flag) {
	const els = Array.from(targetEl.querySelectorAll('[data-timeline-active]'));
	if (els.length === 0) return;
	els.forEach(el => {
		const _class = el.getAttribute('data-timeline-active');
		if (!_class) return;
		
		if (flag) el.classList.add(_class);
		else el.classList.remove(_class);
	});
}

function getTimelineTabs() {
	return Array.from(document.querySelectorAll('[data-timeline-tab]'));
}

function getTimelineItems() {
	return Array.from(document.querySelectorAll('[data-timeline-item]'));
}

function getItemIdFromTab(el) {
	return el.getAttribute('href').replace('#', '');
}

function setTabActiveClass(el, flag) {
	if (flag) {
		el.classList.add('timeline__tab--active')
		el.setAttribute('data-timeline-tab-active', '');
	}
	else {
		el.classList.remove('timeline__tab--active')
		el.removeAttribute('data-timeline-tab-active');
	};
}

function setItemActiveClass(el, flag) {
	if (flag) el.classList.add('timeline__item--active');
	else el.classList.remove('timeline__item--active');
}

function smoothScroll(el) {
	const parentEl = el.parentNode;
	const targetPosition = el.offsetLeft;
	const startPosition = parentEl.scrollLeft;
	const distance = targetPosition - startPosition;
	const duration = 400;
	let start = null;
	
	window.requestAnimationFrame(step);
  
	function step(timestamp) {
	  if (!start) start = timestamp;
	  const progress = timestamp - start;
	  parentEl.scrollTo(linear(progress, startPosition, distance, duration), 0);
	  if (progress < duration) window.requestAnimationFrame(step);
	}
}

function linear(t, b, c, d) {
	return c*t/d + b;
};	