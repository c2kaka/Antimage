import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  update(): object {
    return JSON.parse(JSON.stringify({ data: 'update successfully!' }));
  }
}
