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
				const classList = await childNode.getProperty('classList')
				const dataColor = await classList.getProperty('2')
                const dataColorText = await dataColor.jsonValue()
                const dataLength = await classList.getProperty('1')
                const dataLengthText = await dataLength.jsonValue()
                if (dataColorText !== undefined) oneClass = [...oneClass, dataColorText]
                if (dataLengthText !== undefined && dataLengthText !== 'empty') oneClass = [...oneClass, dataLengthText]
                day = [...day, oneClass]
			}

			week = [...week, day]
		}

		all = [...all, week]
	}

	browser.close()

	console.log("Scrape done, returning data")
	return all
}

const scrapeGyms = async (url) => {
    const gyms = { educarium: [], formis: [], roddis: [] } // asa, ruiskatu closed

    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        })
	    const page = await browser.newPage()

        for (const gym of Object.keys(gyms)) {
            await page.goto(`${url}${gym}/`)
            const result = await page.evaluate(() => {
                const week = []
                const weekdays = document.querySelectorAll('.column-weekday')

                for (const weekday of weekdays) {
                    const day = []
                    const hours = weekday.querySelectorAll('.hour')
                    for (const hour of hours) {
                        day.push(hour.className)
                    }
                    week.push(day)
                }
                return week
            })
            gyms[gym] = result
        }

        return gyms
    } catch(error) {
        throw Error(error)
    }
}

module.exports = {
	scrapeSports,
	scrapeGyms
}