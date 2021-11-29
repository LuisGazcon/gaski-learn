export class MainSelectors {
	public selectFirstLocation =
		() =>
		(state: any): Location =>
			state.main.firstLocation;
}
