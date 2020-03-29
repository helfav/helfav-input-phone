import React from 'react';
// import Joi from '@hapi/joi';
import PhoneInput from './shared/react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

interface IComponentState {
	phone: string;
	phoneNumberErrorMessage: string | null;
	isPhoneNumberValid: boolean;
}

export default class App extends React.Component<IComponentState> {
	state: IComponentState = {
		phone: '',
		phoneNumberErrorMessage: null,
		isPhoneNumberValid: true
	};

	// schema = {
	// 	a: Joi.any().allow('a'),
	// 	b: Joi.any().allow('b', 'B')
	// };

	handleChange = (phone: any) => {
		this.setState({ phone });
	};

	onSubmit = () => {};

	render() {
		return (
			<form onSubmit={this.onSubmit} className="common-form">
				<div className="phone-number mb-1">
					<PhoneInput
						defaultCountry={'fr'}
						value={this.state.phone}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
			</form>
		);
	}
}

// Install npm install @types/hapi__joi
// Install npm install @material-ui/core
