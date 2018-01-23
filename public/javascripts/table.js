google.load('visualization', '1', {'packages':['table', 'bar']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    $.get('/api/chart', function(response) {
        console.log(response);
        var chartData = [];
        for(var idx = 0; idx < response.length; ++idx) {
            var item = response[idx];
            chartData.push([item.starting, item.arrival, item.price]);        
        }

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'starting');
        data.addColumn('string', 'arrival');
        data.addColumn('number', 'price');
        data.addRows(chartData);

        var options = {
            title: 'Travels and price'
        };

        //create and draw the chart from DIV
        var chart = new google.visualization.Table(document.getElementById('table_div'));
        chart.draw(data, options);
    }, 'json');
}

