import { Injectable } from '@nestjs/common';

import { LoggerService } from './logger/logger.service';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GitService {
	constructor(private readonly loggerService: LoggerService) {
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

	public async createProject():Promise<void> {
		
	}
}
