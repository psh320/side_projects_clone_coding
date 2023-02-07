import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../store/actions/login';

class GoogleAuth extends React.Component {
	
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '735310147887-jbnuoctj6s4kvptsa89t6h15pmak4dop',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}
	
	onAuthChange = isSigned => {
		if (isSigned) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};
	
	onSignInClick = () => {
		this.auth.signIn();
	};
	
	onSignOutClick = () => {
		this.auth.signOut();
	};
	
	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn === true) {
			return (
				<button className="btn btn-primary" onClick={this.onSignOutClick}>
					Sign Out
				</button>
			);
		} else {
			return (
				<button className="btn btn-primary" onClick={this.onSignInClick}>
					Sign In with Google
				</button>
			);
		}
	}
	
	render() {
		return (
			<div>{this.renderAuthButton()}</div>
		);
	}
}

const mapStatetoProps = (state) => {
	return { isSignedIn: state.AuthReducer.isSignedIn }
}

export default connect(mapStatetoProps, {signIn, signOut})(GoogleAuth);