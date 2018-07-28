import React, {Component} from 'react';

class AddLi extends Component {
	render() {
		return (
			<div className='inputGroup input-group-lg'>
				<input type='text' className='form-control' placeholder='할일을 입력해주세요.' />
				<span className='input-group-button'>
		            <button type='button' className='btn btn-primary'>등록</button>
	            </span>
			</div>
		)
	}
}

export default AddLi;