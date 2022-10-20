export interface IProject {

  id: string;
  title: string;
  category: IProjectCategory;
  description: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum IProjectCategory {
  WEB = "WEB",
  VIDEOGAME = "VIDEOGAME",
  OTHER = "OTHER",
}
