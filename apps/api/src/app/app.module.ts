import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProjectsModule } from './modules/projects.module';
import { Project } from './models/entities/project.entity';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				return {
					type: 'postgres',
					host: configService.get('DATABASE_HOST'),
					port: configService.get('DATABASE_PORT'),
					username: configService.get('DATABASE_USER'),
					password: configService.get('DATABASE_PASSWORD'),
					database: configService.get('DATABASE_DB'),
					entities: [Project],
					logging: 'all',
					synchronize: true,
				};
			},
		}),
		ProjectsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
