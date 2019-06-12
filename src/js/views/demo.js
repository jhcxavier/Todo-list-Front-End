import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="input-group mb-3">
								<input
									name="todolistname"
									type="text"
									className="form-control"
									placeholder="Recipient's username"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
								/>
								<div className="input-group-append">
									<button
										className="btn btn-outline-secondary"
										onClick={() =>
											actions.addTodo(document.querySelector("[name=todolistname]").value)
										}
										type="button"
										id="button-addon2">
										Button
									</button>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.todos.map((item, index) => {
								return (
									<li key={index} className="list-group-item d-flex justify-content-between">
										<p>{item.todoItem}</p>
										<p>{item.id}</p>
										<button>
											<i className="fas fa-times" onClick={() => actions.deleteTodo(item.id)} />
										</button>
										{/*	<button className="btn btn-success" onClick={() => actions.deleteTodo(item.id)}>
											Delete
										</button>
*/}{" "}
									</li>
								);
							});
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
