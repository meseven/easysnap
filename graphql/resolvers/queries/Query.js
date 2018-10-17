const Query = {
	user: (parent, args) => {
		return {
			username: 'Mehmet',
			createdAt: '05/05/2020'
		}
	}
};

module.exports = Query;