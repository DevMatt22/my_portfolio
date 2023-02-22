import { IProjectDto } from '../../interfaces/projectDto.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';
import { exampleIsoDate } from '../../../../helper';

export class ProjectDto implements IProjectDto {
	@IsString()
	@ApiProperty({
		description: 'Git Repo id ',
		example: '123456789',
		type: String,
	})
	public gitId: string;

	@IsString()
	@ApiProperty({
		description: 'Project title',
		example: 'My Portfolio',
	})
	public title: string;

	@IsString()
	@ApiProperty({
		description: 'Project description',
		example: 'This is my portfolio project',
	})
	public description?: string;

	@IsString()
	@ApiProperty({
		description: 'Project main language',
		example: 'TypeScript',
	})
	public language: string;

	@IsString()
	@ApiProperty({
		description: 'Project related topics',
		example: '[] ',
	})
	public topics: string;

	@IsString()
	@ApiProperty({
		description: 'Project url',
		example: 'http://localhost:3000/api',
	})
	public url: string;

	@IsString()
	@ApiProperty({
		description: 'Project current visibility',
		example: 'public ',
	})
	public visibility: string;

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
	public endProjectDate?: string;

	@IsDate()
	@ApiProperty({
		description: 'Creation date',
		example: exampleIsoDate,
		type: Date,
	})
	public createdAt?: Date;

	@IsDate()
	@ApiProperty({
		description: 'Last update date',
		example: exampleIsoDate,
		type: Date,
	})
	public updatedAt?: Date;
}
