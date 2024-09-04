import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Form } from './form.entity'

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(Form)
        private formRepository: Repository<Form>
    ) { }

    findAll(): Promise<Form[]> {
        return this.formRepository.find()
    }

    findOne(id: number): Promise<Form> {
        return this.formRepository.findOneBy({ id })
    }

    create(book: Form): Promise<Form> {
        return this.formRepository.save(book)
    }

    async update(id: number, updateFormDto: Partial<Form>): Promise<Form> {
        await this.formRepository.update(id, updateFormDto)
        return this.formRepository.findOneBy({ id })
    }

    async remove(id: number): Promise<void> {
        await this.formRepository.delete(id)
    }
}

