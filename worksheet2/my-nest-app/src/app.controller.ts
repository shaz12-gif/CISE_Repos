import { Controller, Get, Param } from '@nestjs/common';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!123';
  }

  @Get('api/articles')
  getAllArticles(): any[] {
    return ARTICLES;
  }

  @Get('api/articles/:id')
  getArticleById(@Param('id') id: string): any {
    console.log(id);
    return ARTICLES.find(article => article._id === id);
  }
}