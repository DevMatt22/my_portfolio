import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { ProjectService } from "../services/project.service";
import { Project } from "../entities/project.entity";
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

  @Post()
  @ApiBody({ type: Project })
  @ApiOperation({ summary: "Create project", description: "Create a new product" })
  @ApiOkResponse({ type: Project })
  public async create(@Body() body: Project): Promise<Project> {

    return await this.projectService.create(body);


  }
}
