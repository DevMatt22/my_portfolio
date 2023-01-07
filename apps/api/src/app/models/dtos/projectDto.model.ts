import { IProjectDto } from '../../interfaces/projectDto.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { IProjectCategory } from '../../interfaces/project.interface';

export class ProjectDto implements IProjectDto {
	@IsString()
	@ApiProperty({
		description: 'Project title',
		example: 'My Portfolio',
	})
	public title: string;

	@IsEnum(IProjectCategory)
	@ApiProperty({
		description: 'Project title',
		enum: IProjectCategory,
	})
	public category: IProjectCategory[];

	@IsString()
	@ApiProperty({
		description: 'Project description',
		example: 'This is my portfolio project',
	})
	public description: string;

	@IsString()
	@ApiProperty({
		description: 'Project url',
		example: 'http://localhost:3000/api',
	})
	public link: string;

	@IsString()
	@ApiProperty({
		description: 'Project development start date',
		example: 'June 2022,',
		type: String,
	})
	public startProjectDate: string;

	@IsString()
	@ApiProperty({
		description: 'Project development end date',
		example: 'December 2022,',
		type: String,
	})
	public endProjectDate: string;
}
