export interface IProjectDto {
	gitId: string;
	title: string;
	description?: string;
	language: string;
	topics: string;
	url: string;
	visibility: string;
	startProjectDate: string;
	endProjectDate?: string;
	createdAt?: Date;
	updatedAt?: Date;
}
