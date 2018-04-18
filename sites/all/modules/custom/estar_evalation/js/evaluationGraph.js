/**
 * @file
 * A JavaScript file for the Evaluation Page.
 */

(function ($, Drupal, window, document) {
  Drupal.behaviors.estar_evaluation = {
    attach: function (context, settings) {
      // Code to be run on page load, and
      // on ajax load added here
      $('#edit-over-submit-save-button').click(function( event ){
      	event.preventDefault();
      	var _populationArr = [];
      	var _dateOfData = [];

      	$("input[name='population[]']:checked").each(function(i){
          _populationArr[i] = $(this).val();
        });
        $("input[name='dateOfData[]']:checked").each(function(i){
          _dateOfData[i] = $(this).val();
        });
        var _population = $("input[name='hidPopulation']").val();

      	$.ajax({
				  type: "GET",
				  url: "/estar-evaluation/get_graph_data",
				  data: {'date_of_data' : _dateOfData, 'population' : _population, 'params' : _populationArr, },
				  dataType: "json",
				  success: function(data){
				  	$(".charts-space").css("display", "block");
				  	lineGraph(data);
				    barGraph(data);
				  }
				});
				
      	$.ajax({
				  type: "GET",
				  url: "/estar-evaluation/get_graph_data_table",
				  data: {'date_of_data' : _dateOfData, 'population' : _population, 'params' : _populationArr, },
				  dataType: "html",
				  success: function(data){
				  	$("#data_table").html(data);
				  }
				});
				function lineGraph(graphData) {
					google.charts.load('current', {'packages':['corechart']});
	      	google.charts.setOnLoadCallback(drawChart);

	      	function drawChart() {
	      		var data = google.visualization.arrayToDataTable(graphData, false);
	          var options = {
		          curveType: 'function',
		          legend: { position: 'right' },
		          chartArea: {left:'3%'}
		        };

	          var chart = new google.visualization.ComboChart(document.getElementById('chart_div_line'));

	          chart.draw(data, options);
	      	}
				}

				function barGraph(graphData) {
					google.charts.load('current', {'packages':['bar']});
		      google.charts.setOnLoadCallback(drawChart);

		      function drawChart() {
		        var data = google.visualization.arrayToDataTable(graphData, false);
		        var options = {
		          chart: {
		            legend: { position: 'bottom' },
		            chartArea: {left:'5%'}
		          }
		        };

		        var chart = new google.charts.Bar(document.getElementById('chart_div_bar'));

		        chart.draw(data, google.charts.Bar.convertOptions(options));
		      }
				}

	      	
    	});

    }
  };
}(jQuery, Drupal, this, this.document));
