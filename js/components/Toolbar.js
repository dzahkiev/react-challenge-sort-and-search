import React, { Component } from 'react';

export default () => {
	return (
		<div className="row toolbar">
			<span  className="btn btn-default fa fa-sort-alpha-asc"> Sort by Name</span>
			<span className="btn btn-default fa fa-sort-numeric-asc"> Sort by Age</span>
		</div>
	);
};

