let data = []
let mobile = false

window.onload = () => {
    fetch('./data.xml').then((response) => {
        response.text().then((xml) => {
            let parser = new DOMParser()
            let xmlDOM = parser.parseFromString(xml, 'application/xml')
            let result = xmlDOM.querySelectorAll('zaznam')

            result.forEach(item => {
                data.push({
                    year: item.children[0].innerHTML,
                    a: item.children[1].children[0].innerHTML,
                    b: item.children[1].children[1].innerHTML,
                    c: item.children[1].children[2].innerHTML,
                    d: item.children[1].children[3].innerHTML,
                    e: item.children[1].children[4].innerHTML,
                    fx: item.children[1].children[5].innerHTML,
                    fn: item.children[1].children[6].innerHTML
                })

            })
            console.log(data[0].a)

            // Grouped bar chart
            let trace1 = {
                x: mobile ? ([data[0].a, data[1].a, data[2].a, data[3].a, data[4].a, data[5].a]) :
                    ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                    ([data[0].a, data[1].a, data[2].a, data[3].a, data[4].a, data[5].a]),
                name: 'A',
                type: 'bar',
                orientation: mobile ? ('h') : ('v')
            };

            let trace2 = {
                x: [data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year],
                y: [data[0].b, data[0].b, data[0].c, data[0].d, data[0].e, data[0].fx, data[0].fn],
                name: 'B',
                type: 'bar',
                orientation: mobile ? 'h' : 'v'
            };

/*
            let graphData = [trace1, trace2, trace3, trace4, trace5, trace6];
*/
            let graphData = [trace1, trace2];
            let layout = {barmode: 'group'};
            Plotly.newPlot('groupedBar', graphData, layout);

            // Pie charts
            let pie1Data = [{
                values: [data[0].a, data[0].b, data[0].c, data[0].d, data[0].e, data[0].fx, data[0].fn],
                labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
                type: 'pie'
            }];

            let layoutPie1 = {
                height: 400,
                width: 500
            };
            Plotly.newPlot('pie1', pie1Data, layoutPie1);
            document.querySelector('#pie1Header').innerHTML = data[0].year
        })

    })
}