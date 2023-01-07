import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProjectsModule } from './modules/projects.module';
import { Project } from './models/entities/project.entity';
import { User } from './models/entities/user.entity';
import { UsersModule } from './modules/user.module';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('DATABASE_HOST'),
				port: parseInt(configService.get('DATABASE_PORT')),
				username: configService.get('DATABASE_USER'),
				password: configService.get('DATABASE_PASSWORD'),
				database: configService.get('DATABASE_DB'),
				entities: [Project, User],
				logging: 'all',
				synchronize: true,
			}),
		}),
		ProjectsModule,
		UsersModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
