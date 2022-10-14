import { Injectable } from "@nestjs/common";
import { IProject } from "../interfaces/project.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "../models/project.model";
import { Repository } from "typeorm";


@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>
  ) {
  }

  public async getAll(): Promise<IProject[]> {
    return this.projectsRepository.find();
  }

  public async getById(id: string): Promise<IProject> {

    return this.projectsRepository.findOneBy({ id });
  }

  public async delete(id: string): Promise<void> {
    await this.projectsRepository.delete(id);
  }
}
