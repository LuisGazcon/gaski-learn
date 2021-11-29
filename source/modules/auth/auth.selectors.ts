export class AuthSelectors {
	public selectAuth = () => (state: any) => state.auth;
	public selectUser = () => (state: any) => state.auth.user;
}
