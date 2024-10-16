import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module'; // Import the MenuModule
import { Menu } from './menu/entity/menu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'nestcrud',
      entities: [Menu],
      synchronize: true,
    }),
    MenuModule, // Add MenuModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
