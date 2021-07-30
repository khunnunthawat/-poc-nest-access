import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/db.config';
import { ArticleModule } from './module/article/article.module';
import { ArticleService } from './module/article/article.service';
import { ArticleController } from './module/article/article.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ArticleModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class AppModule {}
