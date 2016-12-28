import React, { Component } from 'react';
import UserList   from './components/UserList';
import SearchBar  from './components/SearchBar';
import Toolbar    from './components/Toolbar';
import ActiveUser from './components/ActiveUser';


var data = [
	{
		"id": 0,
		"name": "Chad Snyder",
		"age": 28,
		"phone": "(629) 653-9041",
		"image": "owl",
		"phrase": "Owmeco jen be tezpoksim vojuz..."
	},
	{
		"id": 1,
		"name": "New User",
		"age": 22,
		"phone": "(999) 22--2241",
		"image": "dog",
		"phrase": "Owmeco jen be tezpoksim vojuz..."
	}
	];


export default class App extends Component {
	constructor(props) {
			super(props);
			this.state = {
			phrase: 'hello!',
			count: 0,
		};
	}

	render() {
		console.log(data);
		return (
			<div className="container app">
				<SearchBar />
				<Toolbar />
				<div className="row">
					<ActiveUser />
					<UserList data={data}/>
				</div>
			</div>
		);
	}
}
