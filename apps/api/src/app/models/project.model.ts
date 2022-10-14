import { IProjectCategory, IProject } from "../interfaces/project.interface";
import { ApiProperty } from "@nestjs/swagger";
import { exampleIsoDate, exampleUuid } from "../../../helper";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project extends BaseEntity implements IProject {

  @PrimaryGeneratedColumn("uuid")
  @ApiProperty({
    description: "Project Id",
    example: exampleUuid
  })
  public id: string;

  @Column()
  @ApiProperty({
    description: "Project title",
    example: " 2D Tile game"
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
    description: "Last update date",
    example: exampleIsoDate
  })
  public updatedAt: Date;

  @Column()
  @ApiProperty({
    description: "Creation date",
    example: exampleIsoDate
  })
  public createdAt: Date;
}
