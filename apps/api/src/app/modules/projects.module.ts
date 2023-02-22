import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from '../services/project.service';
import { ProjectController } from '../controllers/project.controller';
import { Project } from '../models/entities/project.entity';
import { LoggerModule } from './logger/logger.module';
import { GitController } from '../controllers/git.controller';
import { GitService } from '../services/git.service';

@Module({
	imports: [TypeOrmModule.forFeature([Project]), LoggerModule],
	providers: [ProjectService, GitService],
	controllers: [ProjectController, GitController],
})
export class ProjectsModule {}
