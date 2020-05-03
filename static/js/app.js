fetch("http://l0rd-z-19.github.io/jsonStorage/samples.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(json){
        samples = json["samples"];
        //left side bar chart
        var top = samples[0].otu_ids.slice(0,10);
        var labels = [];
        for(i = 0; i < 10; i++){
            labels.push("OTU {i}".replace("{i}",top[i]));
        }
        var barDrp = {
            x: samples[0].sample_values,
            transforms: [{
                type: 'sort',
                target: 'x',
                order: 'ascending'}],
            y: labels,
            text: samples[0].otu_labels,
            type: "bar",
            orientation:"h"
        };
        var data = [barDrp];
        Plotly.newPlot("left_bar", data);
        
        //Bubble chart
        var bub = {
            x: samples[0].otu_ids,
            y: samples[0].sample_values,
            text: samples[0].otu_labels,
            mode:'markers',
            marker:{size:samples[0].sample_values, color:samples[0].otu_ids}
        };
        var bubData = [bub];
        Plotly.newPlot("bubbles", bubData);



























}); 

