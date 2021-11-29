import { Actions } from '@core/common/classes';
import { Inject } from '@core/decorators/inject';
import type { AuthService } from '../auth/auth.service';
import { MainActionTypes } from './main.actions-enum';

export class MainActions extends Actions {
	public setFirstLocation(location: Location): void {
		this.dispatch({
			type: MainActionTypes.SET_FIRST_LOCATION,
			payload: { location },
		});
	}
}
