import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import {
	ApiBody,
	ApiNoContentResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiParam,
	ApiTags,
} from '@nestjs/swagger';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/entities/project.entity';
import { ProjectDto } from '../models/projectDto.model';

@Controller('projects')
@ApiTags('projects')
export class ProjectController {
	constructor(private readonly projectService: ProjectService) {}

	@Get()
	@ApiOperation({ summary: 'Get Projects', description: 'Get all projects' })
	@ApiOkResponse({ type: Project })
	@ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Projects not found' })
	public async getAll(): Promise<Project[]> {
		return await this.projectService.getAll();
	}

	@Get('/:projectId')
	@ApiParam({ name: 'projectId', description: 'Project Id', type: String })
	@ApiOperation({ summary: 'Get Project by Id', description: 'Get the project information' })
	@ApiOkResponse({ type: Project })
	@ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Project not found' })
	public async getById(@Param('projectId') projectId: string): Promise<Project> {
		return await this.projectService.getById(projectId);
	}

	@Patch('/:id')
	@ApiParam({ name: 'id', description: ' Project id', type: String })
	@ApiBody({ type: ProjectDto })
	@ApiOperation({ summary: 'UpdateProject', description: 'Update a project with id' })
	@ApiOkResponse({ type: Project })
	@ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Product not found' })
	public async update(@Param('id') projectId: string, @Body() body: ProjectDto): Promise<Project> {
		return await this.projectService.update(projectId, body);
	}

	@Post()
	@ApiBody({ type: ProjectDto })
	@ApiOperation({ summary: 'Create project', description: 'Create a new project' })
	@ApiOkResponse({ type: Project })
	public async create(@Body() body: ProjectDto): Promise<Project> {
		return await this.projectService.create(body);
	}

	@Delete('/:id')
	@ApiParam({ name: 'id', description: ' Project Id ', type: String })
	@ApiOperation({ summary: 'Delete a project', description: 'Delete a project by its id' })
	@ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: 'Project not found' })
	@ApiNoContentResponse({ description: 'project deleted' })
	@HttpCode(HttpStatus.NO_CONTENT)
	public async delete(@Param('id') projectId: string): Promise<void> {
		await this.projectService.delete(projectId);
	}
}
