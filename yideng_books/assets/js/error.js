(function () {
	const second = document.getElementById('second');
	let s = 5;
	timeoutFn();

	function timeoutFn() {
		s--;
		console.log(s);
		if (s > 0) {
			second.innerHTML = s;
			setTimeout(timeoutFn, 1000);
			return
		}
		location.pathname = '/';
	}
}());
