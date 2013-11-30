define([
    "dojo/dom",
    "dojox/charting/Chart2D"
], function(dom,Charting){
    // Once all modules in the dependency list have loaded, this
    // function is called to define the module
    var chart1 = {};    
    // This returned object becomes the defined value of this module
    return {
        create: function(id,data){
    		// get the container provided by id
    		var node = dom.byId(id);  			
   			chart1 = new dojox.charting.Chart2D(node);
        	chart1.addPlot("default", {type: "Lines"});
    		chart1.addAxis("x");
   			chart1.addAxis("y", {vertical: true});
     		chart1.addSeries(data.name, data.data);  		
    		chart1.render();

    		// setup resize behaviour
        	resizeChart = function(){
   				chart1.resize(node.width,node.height);
   				chart1.render();        		
        	};
    		dojo.connect(window, "onresize", resizeChart);
       },
       sampledata: function(){
        	var data = {};
        	data.data=[1, 2, 2, 3, 4, 5, 5, 7,2,12,4,0];
        	data.name="Series 1";
        	return data;
        }
    };
});