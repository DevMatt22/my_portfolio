export interface IProject {

  id: string;
  title: string;
  category: IProjectCategory;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum IProjectCategory {
  WEB,
  VIDEOGAME,
  OTHER,
}
