import React from 'react';
import { connect } from 'react-redux';
import { fetchFish } from '../../actions';

class Fish extends React.Component {
	componentDidMount() {
		this.props.fetchFish()
	}
	render() {
		return (
			<div> Fish Index! </div>
		);
	}
}

const mapStatetoProps = (state) => {
	return {fish: state.fish};
}

export default connect(mapStatetoProps,{fetchFish})(Fish);