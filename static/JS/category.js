(function() {
    d3.csv('static/data/category.csv')
        .then(data => {
            console.log(data)
            console.log(data.forEach(entry => entry.category))            
            const trace1 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.bold_red),
                name: "Bold Red",
                type: 'bar'
            }
            const trace2 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.medium_Red),
                name: "Medium Red",
                type: 'bar'
            }
            const trace3 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.light_red),
                name: "Light Red",
                type: 'bar'
            }
            const trace4 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.rose),
                name: "Rose",
                type: 'bar'
            }
            const trace5 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.rich_white),
                name: "Rich White",
                type: 'bar'
            }
            const trace6 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.light_white),
                name: "Light White",
                type: 'bar'
            }
            const trace7 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.sparkling),
                name: "Sparkling",
                type: 'bar'
            }
            const trace8 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.sweet_white),
                name: "Sweet White",
                type: 'bar'
            }
            const trace9 = {
                x: data.map(entry => entry.category),
                y: data.map(entry => entry.dessert),
                name: "Dessert",
                type: 'bar'
            }           
            const layout = {
                title: 'Pairing Ratings by Food Category',
                barmode: 'group',
                xaxis: {
                    title: 'Food Types',
                  },
                  yaxis: {
                    title: 'Pairing Rating',
                  },
                  bgcolor: "rgba(0,0,0,0)"
            }
            Plotly.newPlot("category", [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9], layout, {displayModeBar: false})
        })
        .catch(err => console.log(err))       
})()