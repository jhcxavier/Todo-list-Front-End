const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			todos: []
		},
		actions: {
			deleteTodo: todoIndex => {
				const store = getStore();
				fetch("https://3000-d3c26c02-2d6e-449f-ad75-1bc2d685ba60.ws-us0.gitpod.io/todolist/" + todoIndex, {
					method: "delete"
				}).then(getRefresh => {
					fetch("https://3000-d3c26c02-2d6e-449f-ad75-1bc2d685ba60.ws-us0.gitpod.io/todolist")
						.then(response => response.json())
						.then(data => {
							store.todos = data;
							setStore({ store });
						});
				});
			},
			addTodo: todoInput => {
				const store = getStore();
				fetch("https://3000-d3c26c02-2d6e-449f-ad75-1bc2d685ba60.ws-us0.gitpod.io/todolist", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						todoItem: todoInput
					})
				}).then(getRefresh => {
					fetch("https://3000-d3c26c02-2d6e-449f-ad75-1bc2d685ba60.ws-us0.gitpod.io/todolist")
						.then(response => response.json())
						.then(data => {
							store.todos = data;
							setStore({ store });
						});
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
