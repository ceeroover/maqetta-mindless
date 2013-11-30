/*
 * This file is provided for custom JavaScript logic that your HTML files might need.
 * Maqetta includes this JavaScript file by default within HTML pages authored in Maqetta.
 */
 require([	"dojo/ready",
 				"widgets/myChart"
 	], function(ready,myChart){
     ready(function(){
         // logic that requires that Dojo is fully initialized should go here
    	var dat = myChart.sampledata();
   		myChart.create("ChartContainer",dat);
     });
});

