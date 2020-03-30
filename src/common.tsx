import { BehaviorSubject } from 'rxjs';
import { Growl } from 'primereact/growl';

interface OnChangeEventTextFieldDestructuring {
	target: {
		value: string;
	};
}

export interface OnChangeTextFieldInterface {
	({ target: { value } }: OnChangeEventTextFieldDestructuring): void;
}

export const growlBehaviorSubject: BehaviorSubject<Growl | null> = new BehaviorSubject<Growl | null>(null);

// export const setStatePromise = <T>(
// 	comp: React.PureComponent<any, T>,
// 	state:
// 		| Partial<T>
// 		| T
// 		| ((prevState: Readonly<T>, props: Readonly<any>) => T | Pick<T, keyof T> | null)
// 		| Pick<T, keyof T>
// 		| null,
// 	callback?: (() => void) | undefined
// ): Promise<{}> => {
// 	return new Promise((resolve) => {
// 		comp.setState(<any>state, resolve);
// 	});
// };
