var endFlag = false

let lineTrace1 = {
    x: [],
    y: [],
    mode: 'lines+markers',
    name: 'sin',
    line: { color: 'red' }
};

let lineTrace2 = {
    x: [],
    y: [],
    mode: 'lines+markers',
    name: 'cos',
    line: { color: 'blue' }
};

let lineData = [lineTrace1, lineTrace2];
let name = {title:'Zašumený sínus a kosínus'};
Plotly.plot('graph', lineData, name, {responsive: true});

var source = new EventSource("http://old.iolab.sk/evaluation/sse/sse.php");
source.onmessage = function(event) {
    if(!endFlag){
        const data = JSON.parse(event.data)
        Plotly.extendTraces('graph', {y:[[data['y1']], [data['y2']]], x:[[data['x']], [data['x']]]}, [0,1])
    }
}; 

function sinVisibility(){
    var update = {
        visible: document.getElementById("sin").checked
    };
    Plotly.restyle('graph', update, 0);
}

function cosVisibility(){
    var update = {
        visible: document.getElementById("cos").checked
    };
    Plotly.restyle('graph', update, 1);
}

function end(){
    endFlag = true
}