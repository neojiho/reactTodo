import React, { Component } from 'react';


import Title from '../component/Title'
import AddLi from '../component/AddLi'
import TodoLi from '../component/TodoLi'

class Todo extends Component {
constructor(){
		super();
		//만약 super를 실행하지 않으면 this의 context가 App이 되므로 Component가 갖고있는 this.state같은것을 가져오지 못하기때문.
		//constructor에 변화가 생기면 브라우저는 실시간 refresh아닌 무조건 새로고침을 시도한다.
		this.state = {
			text : '',
			todos : []
		};

		this.handleAddedData = this.handleAddedData.bind(this);
		//이벤트가 this를 통하여 하위 component가 바라볼 수 있도록 this를 바인드시켜줌
	}

	componentWillMount(){
		console.log("componentWillMount");
	}

	componentDidMount(){
		console.log("componentDidMount"); //component의 뼈대가그려진 시점.

		const text = 'To do List';
		const todos = ['해야할일1', '해야할일2', '해야할일3'];

		this.setState(prevState => {
			console.log(prevState);
			return {text, todos}; //key value가 동일할경우
		})

	}

	componentWillReceiveProps(){
		console.log("componentWillReceiveProps");
	}

	componentWillUpdate(){
		console.log('componentWillUpdate');
	}

	componentDidUpdate(){
		console.log('componentDidUpdate');
	}

	componentWillUnmount(){
		console.log('componentWillUnmount');
	}

	handleAddedData(text){
		console.log("인풋박스로부터 전달된값", text);
		this.setState(({todos}) =>{ //prevState에 todos라는 property가 있기때문에 디스트럭처링으로 표기
			// const todos = prevState.todos;
			todos.push(text);
			return {todos} //todos : todos와 같이 키밸류가 동일한경우 이렇게쓴다.
		})
	}

	render() {
		return (
			<div className='container'>
				<Title text={this.state.text} />{/* build가 되면 new Title()처럼 된다.*/}
				<AddLi handleAddedData={this.handleAddedData}/>
				<hr />
				<ul className='todoList-group'>
					{this.state.todos.map((todo, idx) => {
						return <TodoLi todo={todo} key={idx} />;
					{ /* build가 되면 new TodoLi({todos:todos})와같이 props들을 객체의 프로퍼티로 던져주게된다. 함수형 컴포넌트에서 render메소드 없이
					 jsx에서 인자로 {props1, props2} 와같이 쓸수있는 이유임.*/
					 /* 만약 각각의 component가 아닌 template만 반복해야하는경우 virtual dom은 각각의 unique한 id가 있어야해서 아래와같이
			 key={"todo"+ this.props.idx} 설정함 */}
					})}
				</ul>
			</div>
		);
	}
}

export default Todo;