import React, {Component} from 'react';
import './App.css';

import Title from './component/Title'
import AddLi from './component/AddLi'
import TodoLi from './component/TodoLi'


// const text = 'To do List';
// const todos = ['해야할일1', '해야할일2', '해야할일3'];



class App extends Component {

	constructor(){
		super();
		//만약 super를 실행하지 않으면 this의 context가 App이 되므로 Component가 갖고있는 this.state같은것을 가져오지 못하기때문.
		//constructor에 변화가 생기면 브라우저는 실시간 refresh아닌 무조건 새로고침을 시도한다.
		this.state = {
			text : 'To do List',
			todos : ['해야할일1', '해야할일2', '해야할일3']
		}
	}
	render() {
		return (
			<div className='container'>
				<Title text={this.state.text} />{/* build가 되면 new Title()처럼 된다.*/}
				<AddLi />
				<hr />
				<ul className='todoList-group'>
					{this.state.todos.map((todo, idx) => {
						return <TodoLi todo={todo} key={idx} />
						{/* build가 되면 new TodoLi({todos:todos})와같이 props들을 객체의 프로퍼티로 던져주게된다. 함수형 컴포넌트에서 render메소드 없이
						 jsx에서 인자로 {props1, props2} 와같이 쓸수있는 이유임.*/}
					})}


				</ul>
			</div>
		);
	}
}

export default App;
