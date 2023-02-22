import { ApiProperty } from '@nestjs/swagger';
import { exampleIsoDate, exampleUuid } from '../../../../helper';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate, IsString } from 'class-validator';

@Entity()
export class Project {
	@PrimaryGeneratedColumn('uuid')
	@ApiProperty({
		description: 'Project Id',
		example: exampleUuid,
	})
	public id: string;

	@Column()
	@IsString()
	@ApiProperty({
		description: 'Git Repo id ',
		example: '123456789',
	})
	public gitId: string;

	@Column()
	@IsString()
	@ApiProperty({
		description: 'Project title',
		example: '2D Tile game',
		type: String,
	})
	public title: string;

	@Column({ nullable: true })
	@IsString()
	@ApiProperty({
		description: 'Project description',
		example: ' Example description ',
		type: String,
	})
	public description: string;

	@Column()
	@IsString()
	@ApiProperty({
		description: 'Project main language',
		example: 'TypeScript',
	})
	public language: string;

	@Column({ nullable: true, array: true })
	@IsString()
	@ApiProperty({
		description: 'Project related topics',
		example: '[] ',
	})
	public topics: string;

	@Column()
	@IsString()
	@ApiProperty({
		description: 'URL to the GIT repository',
		example: '',
		type: String,
	})
	public url: string;

	@Column()
	@IsString()
	@ApiProperty({
		description: 'Project current visibility',
		example: 'public ',
	})
	public visibility: string;

	@Column()
	@IsString()
	@ApiProperty({
		description: 'Project development start date',
		example: 'June 2022,',
		type: String,
	})
	public startProjectDate: string;

	@Column({ nullable: true })
	@IsString()
	@ApiProperty({
		description: 'Project development end date',
		example: 'December 2022,',
		type: String,
	})
	public endProjectDate: string;

	@Column()
	@IsDate()
	@ApiProperty({
		description: 'Creation date',
		example: exampleIsoDate,
		type: Date,
	})
	public createdAt?: Date;

	@Column()
	@IsDate()
	@ApiProperty({
		description: 'Last update date',
		example: exampleIsoDate,
		type: Date,
	})
	public updatedAt?: Date;
}
