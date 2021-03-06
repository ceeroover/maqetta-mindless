require([
	'dojo/_base/array',
	'dojo/ready',
	'dojo/query',
	'dojo/store/Memory',
	'gridx/Grid',
	'gridx/core/model/cache/Sync',
	'gridx/tests/support/modules'
], function(array, ready, query, Memory, Grid, Cache, modules){

	var comps = ['Header', 'Row', 'HeaderCell', 'Cell'];
	var events = [
		'Click', 'DblClick', 
		'MouseDown', 'MouseUp', 
		'MouseOver', 'MouseOut', 
		'MouseMove', 'ContextMenu',
		'KeyDown', 'KeyPress', 'KeyUp'
	];

	function createStore(){
		var items = array.map(events, function(evt){
			var item = {id: evt};
			array.forEach(comps, function(comp){
				item[comp] = 0;
			});
			return item;
		});
		return new Memory({
			data: items
		});
	}
	store1 = createStore();
	layout1 = array.map(comps, function(comp){
		return {id: comp, name: comp, width: '100px;', field: comp};
	});
	layout1.unshift({id: 'id', width: '100px;', field: 'id', style: 'background-color: #'});

	clear = function(){
		grid.setStore(createStore());
	};

	ready(function(){
		array.forEach(comps, function(comp){
			array.forEach(events, function(evt){
				var evtName = 'on' + comp + evt;
				grid.connect(grid, evtName, function(e){
					var cell = grid.cell(evt, comp);
					cell.setRawData(parseInt(cell.data(), 10) + 1);
				});
			});
		});
	});
});
