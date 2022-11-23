let data = []
let mobile = false
let mobileLast = mobile

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

            const smallDevice = window.matchMedia("(min-width: 576px)");

            smallDevice.addListener(handleDeviceChange);

            function handleDeviceChange(e) {
                if (e.matches){
                    mobileLast = mobile;
                    mobile = false;
                    console.log('In if');
                    console.log(mobile)
                    console.log(mobileLast);
                }
                else {
                    mobileLast = mobile;
                    mobile = true;
                }
                if (mobile != mobileLast){
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
                        x: mobile ? ([data[0].b, data[1].b, data[2].b, data[3].b, data[4].b, data[5].b]) :
                            ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                        y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                            ([data[0].b, data[1].b, data[2].b, data[3].b, data[4].b, data[5].b]),
                        name: 'B',
                        type: 'bar',
                        orientation: mobile ? ('h') : ('v')
                    };

                    let trace3 = {
                        x: mobile ? ([data[0].c, data[1].c, data[2].c, data[3].c, data[4].c, data[5].c]) :
                            ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                        y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                            ([data[0].c, data[1].c, data[2].c, data[3].c, data[4].c, data[5].c]),
                        name: 'C',
                        type: 'bar',
                        orientation: mobile ? ('h') : ('v')
                    };

                    let trace4 = {
                        x: mobile ? ([data[0].d, data[1].d, data[2].d, data[3].d, data[4].d, data[5].d]) :
                            ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                        y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                            ([data[0].d, data[1].d, data[2].d, data[3].d, data[4].d, data[5].d]),
                        name: 'D',
                        type: 'bar',
                        orientation: mobile ? ('h') : ('v')
                    };

                    let trace5 = {
                        x: mobile ? ([data[0].e, data[1].e, data[2].e, data[3].e, data[4].e, data[5].e]) :
                            ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                        y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                            ([data[0].e, data[1].e, data[2].e, data[3].e, data[4].e, data[5].e]),
                        name: 'E',
                        type: 'bar',
                        orientation: mobile ? ('h') : ('v')
                    };

                    let trace6 = {
                        x: mobile ? ([data[0].fx, data[1].fx, data[2].fx, data[3].fx, data[4].fx, data[5].fx]) :
                            ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                        y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                            ([data[0].fx, data[1].fx, data[2].fx, data[3].fx, data[4].fx, data[5].fx]),
                        name: 'FX',
                        type: 'bar',
                        orientation: mobile ? ('h') : ('v')
                    };

                    let trace7 = {
                        x: mobile ? ([data[0].fn, data[1].fn, data[2].fn, data[3].fn, data[4].fn, data[5].fn]) :
                            ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                        y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                            ([data[0].fn, data[1].fn, data[2].fn, data[3].fn, data[4].fn, data[5].fn]),
                        name: 'FN',
                        type: 'bar',
                        orientation: mobile ? ('h') : ('v')
                    };

                    let graphData = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

                    let layout = {
                        barmode: 'group',
                        margin: {l: 100}
                
                    };
                    Plotly.newPlot('groupedBar', graphData, layout, {responsive: true});
                }
            }

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
                x: mobile ? ([data[0].b, data[1].b, data[2].b, data[3].b, data[4].b, data[5].b]) :
                    ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                    ([data[0].b, data[1].b, data[2].b, data[3].b, data[4].b, data[5].b]),
                name: 'B',
                type: 'bar',
                orientation: mobile ? ('h') : ('v')
            };

            let trace3 = {
                x: mobile ? ([data[0].c, data[1].c, data[2].c, data[3].c, data[4].c, data[5].c]) :
                    ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                    ([data[0].c, data[1].c, data[2].c, data[3].c, data[4].c, data[5].c]),
                name: 'C',
                type: 'bar',
                orientation: mobile ? ('h') : ('v')
            };

            let trace4 = {
                x: mobile ? ([data[0].d, data[1].d, data[2].d, data[3].d, data[4].d, data[5].d]) :
                    ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                    ([data[0].d, data[1].d, data[2].d, data[3].d, data[4].d, data[5].d]),
                name: 'D',
                type: 'bar',
                orientation: mobile ? ('h') : ('v')
            };

            let trace5 = {
                x: mobile ? ([data[0].e, data[1].e, data[2].e, data[3].e, data[4].e, data[5].e]) :
                    ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                    ([data[0].e, data[1].e, data[2].e, data[3].e, data[4].e, data[5].e]),
                name: 'E',
                type: 'bar',
                orientation: mobile ? ('h') : ('v')
            };

            let trace6 = {
                x: mobile ? ([data[0].fx, data[1].fx, data[2].fx, data[3].fx, data[4].fx, data[5].fx]) :
                    ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                    ([data[0].fx, data[1].fx, data[2].fx, data[3].fx, data[4].fx, data[5].fx]),
                name: 'FX',
                type: 'bar',
                orientation: mobile ? ('h') : ('v')
            };

            let trace7 = {
                x: mobile ? ([data[0].fn, data[1].fn, data[2].fn, data[3].fn, data[4].fn, data[5].fn]) :
                    ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]),
                y: mobile ? ([data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, data[5].year]) :
                    ([data[0].fn, data[1].fn, data[2].fn, data[3].fn, data[4].fn, data[5].fn]),
                name: 'FN',
                type: 'bar',
                orientation: mobile ? ('h') : ('v')
            };

            let graphData = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

            let layout = {barmode: 'group'};
            Plotly.newPlot('groupedBar', graphData, layout, {responsive: true});

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

            let pie2Data = [{
                values: [data[1].a, data[1].b, data[1].c, data[1].d, data[1].e, data[1].fx, data[1].fn],
                labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
                type: 'pie'
            }];
            Plotly.newPlot('pie2', pie2Data, layoutPie1);
            document.querySelector('#pie2Header').innerHTML = data[1].year

            let pie3Data = [{
                values: [data[2].a, data[2].b, data[2].c, data[2].d, data[2].e, data[2].fx, data[2].fn],
                labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
                type: 'pie'
            }];
            Plotly.newPlot('pie3', pie3Data, layoutPie1);
            document.querySelector('#pie3Header').innerHTML = data[2].year

            let pie4Data = [{
                values: [data[3].a, data[3].b, data[3].c, data[3].d, data[3].e, data[3].fx, data[3].fn],
                labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
                type: 'pie'
            }];
            Plotly.newPlot('pie4', pie4Data, layoutPie1);
            document.querySelector('#pie4Header').innerHTML = data[3].year

            let pie5Data = [{
                values: [data[4].a, data[4].b, data[4].c, data[4].d, data[4].e, data[4].fx, data[4].fn],
                labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
                type: 'pie'
            }];
            Plotly.newPlot('pie5', pie5Data, layoutPie1);
            document.querySelector('#pie5Header').innerHTML = data[4].year

            let pie6Data = [{
                values: [data[5].a, data[5].b, data[5].c, data[5].d, data[5].e, data[5].fx, data[5].fn],
                labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
                type: 'pie'
            }];
            Plotly.newPlot('pie6', pie6Data, layoutPie1);
            document.querySelector('#pie6Header').innerHTML = data[5].year

            let lineTrace1 = {
                x: [data[5].year, data[4].year, data[3].year, data[2].year, data[1].year, data[0].year],
                y: [data[5].a, data[4].a, data[3].a, data[2].a, data[1].a, data[0].a],
                mode: 'lines+markers',
                name: 'A'
            };
            
            let lineTrace2 = {
                x: [data[5].year, data[4].year, data[3].year, data[2].year, data[1].year, data[0].year],
                y: [data[5].fx, data[4].fx, data[3].fx, data[2].fx, data[1].fx, data[0].fx],
                mode: 'lines+markers',
                name: 'FX'
            };
            
            let lineData = [lineTrace1, lineTrace2];
            let name = {title:'Porovnanie A a FX z predmetu'};
            Plotly.newPlot('line', lineData, name, {responsive: true});
        })

    })
}