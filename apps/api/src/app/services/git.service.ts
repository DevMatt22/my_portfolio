import { Injectable } from '@nestjs/common';

import { LoggerService } from './logger/logger.service';
import { Octokit } from '@octokit/rest';
import { ProjectService } from './project.service';

@Injectable()
export class GitService {
	constructor(private readonly loggerService: LoggerService, private readonly projectService: ProjectService) {
		this.loggerService.setContext('GitService');
	}

	octokit = new Octokit({
		auth: process.env.GITHUB_ACCESS_TOKEN,
	});

	public async getAll(): Promise<object[]> {
		const { data } = await this.octokit.rest.repos.listForOrg({
			org: process.env.ORGA_NAME as string,
			direction: 'desc',
		});

		return data;
	}

	//TODO IMPLEMENTER UNE METHODE SEARCH DANS LE PROJECT SERVICE
	public async createProject(): Promise<void> {
		//const repositories = await this.getAll();
	}
}
