import React, { Component } from 'react';

export default ({data, term, update}) => {

	var searchData = (e) => {
		var value = e.target.value.toLowerCase();

		var filter = data.filter(user => {
			return user.name.toLowerCase().includes(value);
		});

		update({
			term   : value,
			data   : filter,
			active : 0
		});
	}

	return (
		<div className="col-xs-6 search-bar">
			<input type="text" value={term} className="form-control" placeholder="Search..." onChange={searchData}/>
		</div>
	);
};

