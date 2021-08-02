import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/db.config';
import { ArticleModule } from './module/article/article.module';
import { ArticleService } from './module/article/article.service';
import { ArticleController } from './module/article/article.controller';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './app.roles';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AccessControlModule.forRoles(roles),
    ArticleModule,
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class AppModule {}
