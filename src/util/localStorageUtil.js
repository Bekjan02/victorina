const localStorageUtil = {
	getValue(key) {
		let result = JSON.parse(localStorage.getItem(key))
		return result ? result : false
	},
	getKey(key) {
		let result = JSON.parse(localStorage.key(key))
		return result ? result : false
	},
	setValue(key, payload) {
		localStorage.setItem(key, JSON.stringify(payload))
	},
}

export default localStorageUtil
