import { IProjectCategory } from './project.interface';

export interface IProjectDto {
	title: string;
	category: IProjectCategory[];
	description: string;
	link: string;
}
