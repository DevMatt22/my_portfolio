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
	})
	public title: string;

	@Column({ type: 'enum', enum: IProjectCategory })
	@IsEnum(IProjectCategory)
	@ApiProperty({
		description: 'Project category',
		enum: IProjectCategory,
	})
	public category: IProjectCategory[];

	@Column()
	@IsString()
	@ApiProperty({
		description: 'Project description',
		example: '',
	})
	public description: string;

	@Column()
	@IsString()
	@ApiProperty({
		description: 'URL to the GIT repository',
		example: '',
	})
	public link: string;

	@CreateDateColumn()
	@IsDate()
	@ApiProperty({
		description: 'Creation date',
		example: exampleIsoDate,
	})
	public createdAt: Date;

	@UpdateDateColumn()
	@IsDate()
	@ApiProperty({
		description: 'Last update date',
		example: exampleIsoDate,
	})
	public updatedAt: Date;
}
