import React, {Component} from 'react';
import PropTypes from 'prop-types'; //prop를 설정하기 위함

// class Title extends Component {
//
// 	render() {
// 		return (
// 			<div className='page-header'>
// 				<h1>{this.props.text}</h1>
// 			</div>
// 		)
//
// 	}
// }

const Title = ({text}) => {
	//인자로 props 객체를 넘어오므로 props.text값을 디스트럭쳐링으로 받아옴.
	return (
		<div className='page-header'>
			<h1>{text}</h1>
		</div>
	)
};

//props validation
Title.propTypes = {
	text : PropTypes.string.isRequired
};

export default Title;