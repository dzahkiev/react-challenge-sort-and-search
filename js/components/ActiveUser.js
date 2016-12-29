import React, { Component } from 'react';

export default ({ data, active }) => {
	var item = data[active];
	if (!item) {
		return (
			<div className="col-xs-3 active-user no-data"></div>
		);
	}
	return (
		<div className="col-xs-3 active-user">
			<div className="thumbnail">
				<img src={'/images/'+item.image+'.svg'} />
				<h3 className="name">{item.name}</h3>
				<table className="table table-responsive">
					<tbody>
						<tr>
							<td>Age:</td>
							<td>{item.age}</td>
						</tr>
						<tr>
							<td>Phone:</td>
							<td>{item.phone}</td>
						</tr>
						<tr>
							<td>Favorite animal:</td>
							<td>{item.image}</td>
						</tr>
						<tr>
							<td>Phrase:</td>
							<td>{item.phrase}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

