import React, { Component } from 'react';
import UserData from './UserData';

export default ({ data, update }) => {
	var usersTemplate;
	if (data.length > 0) {
		usersTemplate = data.map(function(item, index) {
			return (
				usersTemplate = <UserData item={item} index={index} update={update}/>
			);
		});
	} else {
		return (
			usersTemplate = <div className="col-xs-9"><h5>No data for display</h5></div>
		);
	}

	return (
		<div className="col-xs-9">
			<table className="table table-striped table-hover user-list">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Age</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{usersTemplate}
				</tbody>
			</table>
		</div>
	);
};
