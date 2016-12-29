import React, { Component } from 'react';
import UserList   from './components/UserList';
import SearchBar  from './components/SearchBar';
import Toolbar    from './components/Toolbar';
import ActiveUser from './components/ActiveUser';
import load       from './utils/load';



export default class App extends Component {
	constructor(props) {
			super(props);
			this.state = {
				data    : [],
				active  : 0,
				term    : '',
				sort    : {}
			};
		this.loadData();
	}

	loadData() {
		load(this.props.data).then(users => {
			this.initialData = JSON.parse(users);
			this.setState({
				data: this.initialData
			});
		});
	}

	userUpdate (active) {
		this.setState(active);
	}

	render() {
		return (
			<div className="container app">
				<div className="row">
					<ActiveUser data={this.state.data} active={this.state.active} />
					<SearchBar data={this.initialData} term={this.state.term} update={this.userUpdate.bind(this)}/>
					<Toolbar data={this.initialData} sort={this.state.sort} update={this.userUpdate.bind(this)}/>
					<UserList data={this.state.data} update={this.userUpdate.bind(this)}/>
				</div>
			</div>
		);
	}
}
