import { useDispatch, useSelector } from 'react-redux';
import { getActions, getSelectors } from '@core/common/getters';
import { Actions, Selectors } from '@core/common/classes';

export function useActions<T = any>(moduleToken: string): T {
	const dispatch = useDispatch();
	const actions = getActions<T & Actions>(moduleToken);
	actions.setDispatch(dispatch);
	return actions;
}

type BindedSelector<Selectors> = {
	[P in keyof Selectors]: (...args: Array<string>) => any;
};

export function useSelectors<T = any>(moduleToken: string): BindedSelector<T> {
	const selectors = getSelectors<T & Selectors>(moduleToken);
	const binded = Object.getOwnPropertyNames(selectors)
		.filter((key) => key.startsWith('select') && typeof selectors[key] === 'function')
		.reduce((prev, key) => {
			return {
				...prev,
				[key]: (...args) => useSelector(selectors[key](...args)),
			};
		}, {});
	return binded as BindedSelector<T>;
}
