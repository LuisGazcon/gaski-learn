export class TeamSelectors {
	public selectTeams = () => (state: any) => state.team.teams;
	public selectTeam = (teamId: string) => (state: any) => {
		const team = state.team.teams.filter((team) => {
			return team.id === teamId;
		})[0];
		console.log(team ? 'team found' : 'team not found');
		return team;
	};

	public selectTeamTasks = (teamId: string) => (state: any) => state.team.tasks[teamId];
}
