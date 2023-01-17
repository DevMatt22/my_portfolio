import { Injectable } from '@nestjs/common';
import { IProject } from '../interfaces/project.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../models/entities/project.entity';
import { Repository } from 'typeorm';
import { IProjectDto } from '../interfaces/projectDto.interface';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class ProjectService {
	constructor(
		@InjectRepository(Project)
		private projectsRepository: Repository<Project>,
		private readonly loggerService: LoggerService
	) {
		this.loggerService.setContext('ProjectService');
	}

	public async getAll(): Promise<IProject[]> {
		return this.projectsRepository.find();
	}

	public async getById(id: string): Promise<IProject> {
		return this.projectsRepository.findOneByOrFail({ id });
	}

	public async delete(id: string): Promise<void> {
		await this.projectsRepository.delete(id);
	}

	public async create(project: IProjectDto): Promise<IProject> {
		return this.projectsRepository.save(project);
	}

	public async update(id: string, body: IProjectDto): Promise<IProject> {
		const projectToUpdate = await this.projectsRepository.findOneByOrFail({ id });

		if (body.title) {
			projectToUpdate.title = body.title;
		}
		if (body.description) {
			projectToUpdate.description = body.description;
		}
		if (body.category) {
			projectToUpdate.category = body.category;
		}
		if (body.link) {
			projectToUpdate.link = body.link;
		}
		if (body.startProjectDate) {
			projectToUpdate.startProjectDate = body.startProjectDate;
		}
		if (body.endProjectDate) {
			projectToUpdate.endProjectDate = body.endProjectDate;
		}

		return this.projectsRepository.save(projectToUpdate);
	}
}
