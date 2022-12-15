import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();

	const globalPrefix = 'api';

	const config = new DocumentBuilder().setTitle('Portfolio Swagger').setVersion('1.0').build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup(`${globalPrefix}/swagger`, app, document);

	const port = process.env.PORT || 3333;
	await app.listen(port);
	Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix} 🚀`);
}

bootstrap();
