import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { PizzaModule } from './pizza/pizza.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [ClienteModule, EnderecoModule, PizzaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
