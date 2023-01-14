import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from '../services/project.service';
import { ProjectController } from '../controllers/project.controller';
import { Project } from '../models/entities/project.entity';
import { LoggerModule } from './logger/logger.module';

@Module({
	imports: [TypeOrmModule.forFeature([Project]), LoggerModule],
	providers: [ProjectService],
	controllers: [ProjectController],
})
export class ProjectsModule {}
