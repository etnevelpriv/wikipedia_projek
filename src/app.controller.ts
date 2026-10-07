import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import {readData} from "./scripts/readData.ts";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }
}