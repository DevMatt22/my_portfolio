import { IProject, IProjectCategory } from "../interfaces/project.interface";
import { ApiProperty } from "@nestjs/swagger";
import { exampleIsoDate, exampleUuid } from "../../../helper";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Project implements IProject {

  @PrimaryGeneratedColumn("uuid")
  @ApiProperty({
    description: "Project Id",
    example: exampleUuid
  })
  public id: string;

  @Column()
  @ApiProperty({
    description: "Project title",
    example: "2D Tile game"
  })
  public title: string;

  @Column({ type: "enum", enum: IProjectCategory })
  @ApiProperty({
    description: "Project category",
    enum: IProjectCategory
  })
  public category: IProjectCategory;

  @Column()
  @ApiProperty({
    description: "Project description",
    example: ""
  })
  public description: string;

  @Column()
  @ApiProperty({
    description: "URL to the GIT repository",
    example: ""
  })
  public link: string;

  @CreateDateColumn()
  @ApiProperty({
    description: "Creation date",
    example: exampleIsoDate
  })
  public createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({
    description: "Last update date",
    example: exampleIsoDate
  })
  public updatedAt: Date;


}
