import { Controller, Get, Post, Put, Delete, Body, Param, } from '@nestjs/common'
import { FormService } from './form.service'
import { Form } from './form.entity'

@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) { }

    @Get()
    findAll(): Promise<Form[]> {
        return this.formService.findAll()
    }
    @Get()
    getRoot(): string {
        return 'Bienvenu sur mon application NestJs'
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Form> {
        return this.formService.findOne(id)
    }

    @Post()
    create(@Body() createFormDto: Form): Promise<Form> {
        return this.formService.create(createFormDto)
    }
 @Post()
    async handleForm(@Body() createFormDto: { name: string, email: string, message: string }) {
        console.log(createFormDto);
        // Logic to handle the data (e.g., save to database, send email, etc.)
        return { success: true, message: 'Contact form submitted successfully' };
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateFormDto: Partial<Form>
    ): Promise<Form> {
        return this.formService.update(id, updateFormDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.formService.remove(id)
    };
}
