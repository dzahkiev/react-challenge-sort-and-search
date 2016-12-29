import React, { Component } from 'react';

export default ({data, update, sort}) => {
	var sortData = (field) => {
		var order_by = (sort.field == field && sort.order_by == 'desc') ? -1 : 1;
		data.sort(function (a, b) {
			if (a[field] > b[field]) {
				return order_by;
			}
			if (a[field] < b[field]) {
				return -order_by;
			}
			return 0;
		});

		update({
			data     : data,
			active   : 0,
			sort : {
				field   : field,
				order_by: (sort.order_by == 'desc') ? 'asc' : 'desc'
			}
		});
	}
	return (
		<div className="col-xs-3 btn-toolbar toolbar">
			<button className="btn btn-default" onClick={() => sortData('name')} >
				<icon className={`fa fa-sort-alpha-${sort.field=='name' ? sort.order_by : 'asc'}`}></icon> Sort by Name
			</button>
			<button className="btn btn-default" onClick={() => sortData('age')} >
				<icon className={`fa fa-sort-numeric-${sort.field=='age' ? sort.order_by : 'asc'}`}></icon> Sort by Age
			</button>
		</div>
	);
};

