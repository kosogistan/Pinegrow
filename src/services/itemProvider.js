'use strict';

var items =[
{'name':'Django Anchained', 'category_id': 1},
{'name':'Forest gump', 'category_id': 1},
];

app.service('itemProvider', function () {
this.getItems = function (){
	return items;
}
});
