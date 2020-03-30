import React from 'react';
import PhoneInput from '../shared/react-phone-input-2';
import startsWith from 'lodash.startswith';

interface ISmsState {
	phone: any;
	error: any;
}

export default class SmsForm extends React.Component<ISmsState> {
	state: ISmsState = {
		phone: '',
		error: ''
	};


	onSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
		if (event) {
			event.preventDefault();
		}
	};

	handleChange = (value: any) => {
		this.setState({ phone: value });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className="common-form">
				<div className="phone-number mb-1">
					<PhoneInput
						inputProps={{
							name: 'phone',
							required: true,
							autoFocus: true
						}}
						defaultCountry={'fr'}
						onlyCountries={[ 'fr', 'us' ]}
						value={this.state.phone}
						placeholder={'670508252'}
						onChange={this.handleChange.bind(this)}
						isValid={(inputNumber: any, onlyCountries: any) => {
							return onlyCountries.some((country: any) => {
								return startsWith(country.dialCode, inputNumber);
							});
						}}
					/>
				</div>
				{/* {this.state.error && <div>{this.state.error}</div>} */}
				<button>Submit</button>
			</form>
		);
	}
}
