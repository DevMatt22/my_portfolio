import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { ProjectService } from "../services/project.service";
import { Project } from "../models/project.model";
import { IProject } from "../interfaces/project.interface";


@Controller("projects")
@ApiTags("projects")
export class ProjectController {

  constructor(
    private readonly projectService: ProjectService) {
  }

  @Get()
  @ApiOperation({ summary: "Get Projects", description: "Get all projects" })
  @ApiOkResponse({ type: Project })
  @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: "Projects not found" })
  public async getAll(): Promise<IProject[]> {

    return await this.projectService.getAll();
  }

  @Get("/:projectId")
  @ApiParam({ name: "projectId", description: "Project Id", type: String })
  @ApiOperation({ summary: "Get Project by Id", description: "Get the project information" })
  @ApiOkResponse({ type: Project })
  @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: "Project not found" })
  public async getById(@Param("projectId") projectId: string): Promise<IProject> {

    return await this.projectService.getById(projectId);
  }
}
