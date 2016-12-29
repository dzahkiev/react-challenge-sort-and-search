import React, { Component } from 'react';

export default ({ item, index, update }) => {
	return (
		<tr className="user-data" data-id="{item.id}" onClick={() => update({active : index})} >
			<td><img src={'/images/'+item.image+'.svg'} className="image" /></td>
			<td>{item.name}</td>
			<td>{item.age}</td>
			<td>{item.phone}</td>
		</tr>
	);
};

