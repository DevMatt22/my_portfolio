import { Injectable } from '@nestjs/common';
import { IProject } from '../interfaces/project.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../models/entities/project.entity';
import { Repository } from 'typeorm';
import { IProjectDto } from '../interfaces/projectDto.interface';

@Injectable()
export class ProjectService {
	constructor(
		@InjectRepository(Project)
		private projectsRepository: Repository<Project>
	) {}

	public async getAll(): Promise<IProject[]> {
		return this.projectsRepository.find();
	}

	public async getById(id: string): Promise<IProject> {
		return this.projectsRepository.findOneBy({ id });
	}

	public async delete(id: string): Promise<void> {
		await this.projectsRepository.delete(id);
	}

	public async create(project: IProjectDto): Promise<IProject> {
		return this.projectsRepository.save(project);
	}

	public async update(id: string, body: IProjectDto): Promise<IProject> {
		const projectToUpdate = await this.projectsRepository.findOneBy({ id });

		if (body.title) {
			projectToUpdate.title = body.title;
		}
		if (body.description) {
			projectToUpdate.description = body.description;
		}
		if (Array.isArray(body.category)) {
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
