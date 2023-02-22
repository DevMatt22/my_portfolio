import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GitService } from '../services/git.service';
import { QueryDurationInterceptor } from '../interceptors/query-duration/query-duration.interceptor';

@Controller('git')
@ApiTags('git')
export class GitController {
	constructor(private readonly gitService: GitService) {}

	@Get()
	@UseInterceptors(QueryDurationInterceptor)
	@ApiOperation({ summary: 'Get Github repo', description: 'Get all github repositories' })
	public async getAll() {
		return await this.gitService.createProject();
	}
}
