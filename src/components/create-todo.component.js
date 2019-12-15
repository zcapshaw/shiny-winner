import React, { Component } from 'react';

export default class CreateTodo extends Component {
	
	constructor(props) {
		super(props);

		this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
		this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
		this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			todoDescription: '',
			todoResponsible: '',
			todoPriority: 'Low',
			todoCompleted: false
		}
	}

	onChangeTodoDescription(e) {
		this.setState({
			todoDescription: e.target.value
		});
	}

	onChangeTodoResponsible(e) {
		this.setState({
			todoResponsible: e.target.value
		});
	}

	onChangeTodoPriority(e) {
		this.setState({
			todoPriority: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(`Form submitted:`);
		console.log(`Todo Description: ${this.state.todoDescription}`);
		console.log(`Todo Responsible: ${this.state.todoResponsible}`);
		console.log(`Todo Priority: ${this.state.todoPriority}`);
		console.log(`Todo Completed: ${this.state.todoCompleted}`);

		this.setState({
			todoDescription: '',
			todoResponsible: '',
			todoPriority: 'Low',
			todoCompleted: false
		})
	}

	render() {
		return (
			<div style={{ marginTop: 20 }}>
				<h3>Create New Todo</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Description: </label>
						<input	type="text"
								className="form-control"
								value={this.state.todoDescription}
								onChange={this.onChangeTodoDescription}
						/>
					</div>
					<div className="form-group">
						<label>Responsible: </label>
						<input	type="text"
								className="form-control"
								value={this.state.todoResponsible}
								onChange={this.onChangeTodoResponsible}
						/>
					</div>
					<div className="form-group">
						<div>
							<label>Priority: </label>
						</div>
						<div className="form-check form-check-inline">
							<input	className="form-check-input"
									type="radio"
									name="priorityOptions"
									id="priorityLow"
									value="Low"
									checked={this.state.todoPriority==='Low'}
									onChange={this.onChangeTodoPriority}
							/>
							<label className="form-check-label">Low</label>
						</div>
						<div className="form-check form-check-inline">
							<input	className="form-check-input"
									type="radio"
									name="priorityOptions"
									id="priorityMedium"
									value="Medium"
									checked={this.state.todoPriority==='Medium'}
									onChange={this.onChangeTodoPriority}
							/>
							<label className="form-check-label">Medium</label>
						</div>
						<div className="form-check form-check-inline">
							<input	className="form-check-input"
									type="radio"
									name="priorityOptions"
									id="priorityHigh"
									value="High"
									checked={this.state.todoPriority==='High'}
									onChange={this.onChangeTodoPriority}
							/>
							<label className="form-check-label">High</label>
						</div>
					</div>
					<div className="form-group">
						<input	type="submit"
								value="Create Todo"
								className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
			)
	}
}