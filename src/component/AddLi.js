import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddLi extends Component {

	constructor(){
		super();
		this.onClickAddButton = this.onClickAddButton.bind(this);
		//onClickAddButton의 context가 Component의 this를 바라볼수 있도록 바인드 시켜준다.그로인해 this.inputBox.value값을 받아올수 있도록함
	}

	onClickAddButton(){
		this.props.handleAddedData(this.inputBox.value);
		//부모 Todo에 함수를 정의한후 자식인 AddLi가 그 함수를 호출해서 다른 자식인 TodoLi에게 값을 전달하기 위함.
	}

	render() {
		return (
			<div className='inputGroup input-group-lg'>
				<input type='text'
				       className='form-control'
				       placeholder='할일을 입력해주세요.'
				       ref={
				       	    input => {this.inputBox = input}
				       	    //ref는 콜백함수를 호출하는대 첫번째 인자가 해당하는 DOM이다. 그러므로 input은 이 DOM이되고 이걸 this.inputBox에 넣어놓아 다른대서
					       // 접근이 가능하도록 한다.
				       }
				/>
				<span className='input-group-button'>
		            <button type='button'
		                    className='btn btn-primary'
		                    onClick={this.onClickAddButton}
		            >등록</button>
	            </span>
			</div>
		)
	}
}

AddLi.propTypes = {
	handleAddedData : PropTypes.func.isRequired
};

export default AddLi;