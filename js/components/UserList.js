import React, { Component } from 'react';
import UserData from './UserData';

export default ({ data, update }) => {
	console.log('user-list');

	var usersTemplate;
	if (data.length > 0) {
		usersTemplate = data.map(function(item, index) {
			return (
				usersTemplate = <UserData item={item}/>
			);
		});
	} else {
		return (
			usersTemplate = <p>No data for display</p>
		);
	}

	return (
		<div className="col-xs-9">
			<table className="table table-striped user-list">
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
