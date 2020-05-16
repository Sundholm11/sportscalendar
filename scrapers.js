const puppeteer = require('puppeteer')

const scrapeSports = async (url) => {
	console.log("Starting scrape")

	const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
	const page = await browser.newPage()
	await page.goto(url)

	let all = []

	for (let j = 2; j < 6; j++) {

		let week = []

		for (let i = 1; i < 8; i++) {
			const [dayList] = await page.$x(`/html/body/div[4]/div[3]/div/div/ul[${j}]/li[${i}]`)
			const dayChildren = await dayList.getProperty('childNodes')
			const childrenProperties = await dayChildren.getProperties()

			let day = []

			for (const [, childNode] of childrenProperties) {
				let oneClass = []
				const oneClassChildren = await childNode.getProperty('childNodes')
				const textRows = await oneClassChildren.getProperties()
				for (const [, row] of textRows) {
					const innerText = await row.getProperty('innerText')
					const text = await innerText.jsonValue()
					oneClass = [...oneClass, text]
				}
				const dataSet = await childNode.getProperty('dataset')
				const dataColor = await dataSet.getProperty('color')
				const dataText = await dataColor.jsonValue()
				if (dataText !== undefined) oneClass = [...oneClass, dataText]
				day = [...day, oneClass]
			}

			week = [...week, day]
		}

		all = [...all, week]
	}

	// console.log("All: ", all)

	browser.close()

	console.log("Scrape done, returning data")
	return all
}

const scrapeGyms = async (url) => {
	console.log("Starting gym scrape")
	
	const gyms = ['asa', 'educarium', 'formis', 'roddis', 'ruiskatu']
	
	let statuses = []

	const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
	const page = await browser.newPage()
	
	for (let j = 0; j < gyms.length; j++) {
		await page.goto(`${url}${gyms[j]}/`)

		// console.log(`Going to: ${url}${gyms[j]}/`)

		const allWeekdays = await page.$$('div.column.column-weekday')

		let week = []
		
		for (let i = 0; i < allWeekdays.length; i++) {
			const divDays = await allWeekdays[i].getProperty('childNodes')
			const dayHours = await divDays.getProperties()

			let day = []

			for (const [, hour] of dayHours) {
				const hours = await hour.getProperty('className')
				const value = await hours.jsonValue()
				day = [...day, value]
			}

			week = [...week, day]
		}

		statuses = [...statuses, week]
	}

	// console.log(statuses)

	browser.close()

	console.log("Scrape done, returning data")
	return statuses
}

module.exports = {
	scrapeSports,
	scrapeGyms
}

// scrapeSports('https://www.campussport.fi/fi/liikuntatarjonta/liikunta-aikataulu/')
// scrapeGyms('https://campussport.fi/heatmap/')