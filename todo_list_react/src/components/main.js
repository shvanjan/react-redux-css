import React, {useState} from "react";
/* components */
import "../main2.css";




let item_id = 0;

const FILTERS = {
	ALL: "All",
	ACTIVE: "Active",
	COMPLETED: "Completed"
}

export default function MainContainer() {
	let [list_items, setList] = React.useState([
		{checked: true,title: "light coral"},
		{checked: true, title: "garam pani"},
		// {checked: true, title: "milk"},
		// {checked: true, title: "brush"},
		// {checked: false, title: "ghutti"}

	]);

	let [currentFilter, setFilter] = React.useState(FILTERS.ALL);
	// setList([]);
	return (
			<div className="todo-app">
				<ToDoList list_items={list_items} filter={currentFilter}/>
				<ToDoInput addToList = {
					(item) => {
						setList(list_items.concat(item))
					}
				}/>
				<ToDoFilter currentActive = {currentFilter} onChange = {
					(filtername) => {
						console.log("changed to " + filtername);
						setFilter(filtername);
						setList(list_items)
					}
				}/>
			</div>
		)
}

function ToDoList({list_items, addToList, filter}) {
	return (
		<ul className = "todo-list">
			{list_items.map((list_item) => {
				let toInclude = true;

				switch(filter) {
					case FILTERS.ACTIVE:
						toInclude = !list_item.checked;
						break;
					case FILTERS.COMPLETED:
						toInclude = list_item.checked;
						break;


				}
				return (toInclude?<ListItem key = {item_id++} {...list_item}/>: null);
			})}

		</ul>
		);
}


function ListItem({checked, title}) {
	let [done, setDone] = React.useState(checked);
	return (
			<li className = {`to-do-list__item__${done? 'checked': 'unchecked'}`}
				onClick = {() => {
					setDone(!done);
				}}
			>
				{title}
			</li>
		)
}

function ToDoInput({addToList}) {
	let input;
	return (
			<div className="add_todo_div">
			
				<input className="input_add" type="text" placeholder="new todo" ref={(node) => {
					input = node;
				}} onKeyUp={(event) => {
					if(event.keyCode === 13) {
						if(!input.value) {
							return;
						}
						// alert("hey");
						addToList({
							title: input.value,
							checked: false,
							id: item_id++
						})
						input.value = "";
						// window.scrollTo(0,document.body.scrollHeight);
						// var scrollingElement = (document.scrollingElement || document.body);
						// scrollingElement.scrollTop = scrollingElement.scrollHeight;
						

					}
				}}/>
				<button className="add_button" onClick={() => {
					if(!input.value) {
						input.focus();
						return;
					}
					addToList({
							title: input.value,
							checked: false,
							id: item_id++
						})
						input.value = "";
						window.scrollTo(0,document.body.scrollHeight);


				}
				}> add </button>

			</div>
		)
}

function ToDoFilter({onChange, currentActive}) {
	return (
		<fieldset className="filters">	
			<legend className = "filter_legend">Show:</legend>
			<FilterLabel {...{onChange, currentActive}}>{FILTERS.ALL}</FilterLabel>
			<FilterLabel {...{onChange, currentActive}}>{FILTERS.ACTIVE}</FilterLabel>
			<FilterLabel {...{onChange, currentActive}}>{FILTERS.COMPLETED}</FilterLabel>
		</fieldset>
		);
}

function FilterLabel({children, currentActive, onChange}) {
	let active = currentActive === children;
	return (
			<label className="filter_label">
				<input type="radio" value={children} checked = {active} name="filter" onChange={
					e => onChange(children)
				} className = "filter_radio" />
				<span className = {`filter_label_${children}`}>{children}</span>
			</label>
		)
}


/* utilities */

// function addItem() {

// }