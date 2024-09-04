import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FormModule } from './form/form.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'portfolio',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FormModule,
  ],
})
export class AppModule { }
