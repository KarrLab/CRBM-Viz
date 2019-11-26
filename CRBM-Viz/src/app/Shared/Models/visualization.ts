import { AccessLevel } from '../Enums/access-level';
import { License } from './license';
import { Person } from './person';
import { User } from './user';
import { UtilsService } from '../Services/utils.service';

export class Visualization {
  id?: number;
  name?: string;
  description?: string;
  tags?: string[] = [];
  spec?: object | string;
  authors?: (User | Person)[] = [];
  owner?: User;
  access?: AccessLevel;
  accessToken?: string;
  license?: License;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    tags?: string[],
    spec?: object | string,
    owner?: User,
    access?: AccessLevel,
    license?: License)
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.spec = spec;
    this.owner = owner;
    this.access = access;
    this.accessToken = UtilsService.genAccessToken();
    this.license = license;
  }

  getIcon() {
    return {type: 'fas', icon: 'chart-area'};
  }

  getRoute() {
    return ['/visualizations', this.id];
  }

  getAuthors(): (User | Person)[] {
    if (this.authors && this.authors.length) {
      return this.authors;
    } else {
      return [this.owner];
    }
  }
}
