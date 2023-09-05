class Total {
	constructor() {
		this.totalMealDeals = 0
	}

	incrementTotal() {
		this.totalMealDeals++;
	}

	getTotal() {
		return this.totalMealDeals
	}
}

export default Total