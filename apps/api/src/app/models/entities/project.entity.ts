import { IProject, IProjectCategory } from '../../interfaces/project.interface';
import { ApiProperty } from '@nestjs/swagger';
import { exampleIsoDate, exampleUuid } from '../../../../helper';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsDate, IsEnum, IsString } from 'class-validator';

@Entity()
export class Project implements IProject {
	@PrimaryGeneratedColumn('uuid')
	@ApiProperty({
		description: 'Project Id',
		example: exampleUuid,
	})
	public id: string;

	@Column()
	@IsString()
	@ApiProperty({
		description: 'Project title',
		example: '2D Tile game',
		type: String,
	})
	public title: string;

	@Column({ type: 'enum', enum: IProjectCategory })
	@IsEnum(IProjectCategory)
	@ApiProperty({
		description: 'Project category',
		enum: IProjectCategory,
	})
	public category: IProjectCategory[];

	@Column({ nullable: true })
	@IsString()
	@ApiProperty({
		description: 'Project description',
		example: '',
		type: String,
	})
	public description: string;

	@Column({ nullable: true })
	@IsString()
	@ApiProperty({
		description: 'URL to the GIT repository',
		example: '',
		type: String,
	})
	public link: string;

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

	@CreateDateColumn()
	@IsDate()
	@ApiProperty({
		description: 'Creation date',
		example: exampleIsoDate,
		type: Date,
	})
	public createdAt?: Date;

	@UpdateDateColumn()
	@IsDate()
	@ApiProperty({
		description: 'Last update date',
		example: exampleIsoDate,
		type: Date,
	})
	public updatedAt?: Date;
}
