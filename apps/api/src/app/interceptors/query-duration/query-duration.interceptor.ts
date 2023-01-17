import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { LoggerService } from '../../services/logger/logger.service';

@Injectable()
export class QueryDurationInterceptor implements NestInterceptor {
	constructor(private loggerService: LoggerService) {
		this.loggerService.setContext('QueryDuration');
	}
	intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
		const queryStartTime = Date.now();
		return next.handle().pipe(tap(() => this.loggerService.log(`duration in ms : ${Date.now() - queryStartTime}`)));
	}
}
