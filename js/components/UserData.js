import React, { Component } from 'react';

export default ({ item, update }) => {
	return (
		<tr className="user-data" data-id="{item.id}">
			<td><img src={'/images/'+item.image+'.svg'} /></td>
			<td>{item.name}</td>
			<td>{item.age}</td>
			<td>{item.phone}</td>
		</tr>
	);
};

