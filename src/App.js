import {faker} from "@faker-js/faker";
import React from 'react';
import {generateCredit, generateTitle} from "./data-generator";

function App() {
    const makeCSV = (object) => {
        const integerMapper = value => Number.isInteger(value) ? value : `"${value}"`;
        const headers = Object.keys(object[0]).join(',');
        const data = object.map(i => `${Object.values(i).map(integerMapper).join(',')}`).join('\n');

        return encodeURI(`data:text/csv;charset=utf-8,${headers}\n${data}`);
    }

    const downloadData = (data, fileName = 'data') => {
        const link = document.createElement("a");
        link.setAttribute("href", makeCSV(data));
        link.setAttribute("download", `${fileName}.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    const generateData = () => {
        const range = faker.helpers.rangeToNumber({min: 101, max: 500});
        const titles = [];
        const credits = [];

        for (let i = 0; i < range; i++) {
            const title = generateTitle();
            titles.push(title)
            credits.push(generateCredit(title.id));
        }

        downloadData(titles, 'titles')
        downloadData(credits, 'credits')
    }

    return <button onClick={generateData}>Press Me</button>;
}

export default App;
