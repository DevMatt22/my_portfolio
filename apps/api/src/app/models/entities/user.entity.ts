import { IUser } from "../../interfaces/user.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { exampleUuid } from "../../../../helper";
import { IsEmail, IsString, MinLength } from "class-validator";

@Entity()
export class User implements IUser {

  @PrimaryGeneratedColumn("uuid")
  @IsString()
  @ApiProperty({
    description: "User id",
    example: exampleUuid
  })
  public id: string;

  @Column()
  @IsEmail()
  @ApiProperty({
    description: "Users email",
    example: "abcdef@xyz.fr"
  })
  public email: string;

  @Column()
  @IsString()
  @MinLength(15)
  @ApiProperty({
    description: "users password",
    example: "test"
  })
  public password: string;
}
