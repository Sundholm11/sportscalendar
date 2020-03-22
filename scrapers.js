const puppeteer = require('puppeteer')

const scrapeSports = async (url) => {
    console.log("Starting scrape")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    /*
    const [week] = await page.$x('/html/body/div[4]/div[3]/div/div/ul[2]')
    const weekChildren = await week.getProperty('childNodes')
    const wkProps = await weekChildren.getProperties()
    const weekLength = wkProps.size
    */

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
                day = [...day, oneClass]
            }

            // console.log("One day: ", day)

            week = [...week, day]
        }

        // console.log("One week: ", week)

        all = [...all, week]
    }

    console.log("All: ", all)

    browser.close()

    console.log("Scrape done, returning data")
    return all
}

module.exports = scrapeSports

// scrapeSports('https://www.campussport.fi/fi/liikuntatarjonta/liikunta-aikataulu/')