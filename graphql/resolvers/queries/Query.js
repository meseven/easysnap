const Query = {
	user: (parent, args) => {
		return {
			name: 'Mehmet',
			surname: 'Seven'
		}
	}
};

module.exports = Query;