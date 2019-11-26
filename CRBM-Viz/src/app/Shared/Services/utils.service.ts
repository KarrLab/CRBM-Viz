import { PersonInterface } from '../Models/person.interface';
import { Person } from '../Models/person';
import { User } from '../Models/user';

export class UtilsService {

  static genAccessToken(length: number = 16): string {
      const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      for (let i: number = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
  }

  static formatTimeForHumans(secs: number): string {
    let numerator:number;
    let units:string;

    if (secs >= 60 * 60 * 24 * 365) {
      numerator = 60 * 60 * 24 * 365;
      units = 'y';
    } else if (secs >= 60 * 60 * 24) {
      numerator = 60 * 60 * 24;
      units = 'd';
    } else if (secs >= 60 * 60) {
      numerator = 60 * 60;
      units = 'h';
    } else if (secs >= 60) {
      numerator = 60;
      units = 'm';
    } else if (secs >= 1) {
      numerator = 1;
      units = 's';
    } else if (secs === 0) {
      numerator = 1;
      units = null;
    } else if (secs >= 1e-3) {
      numerator = 1e-3;
      units = 'ms';
    } else if (secs >= 1e-6) {
      numerator = 1e-6;
      units = 'us';
    } else if (secs >= 1e-9) {
      numerator = 1e-9;
      units = 'ns';
    } else if (secs >= 1e-12) {
      numerator = 1e-12;
      units = 'ps';
    } else if (secs >= 1e-15) {
      numerator = 1e-15;
      units = 'fs';
    } else if (secs >= 1e-18) {
      numerator = 1e-18;
      units = 'as';
    } else if (secs >= 1e-21) {
      numerator = 1e-21;
      units = 'zs';
    } else {
      numerator = 1e-24;
      units = 'ys';
    }
    let returnVal: string = Math.round(secs / numerator).toString();
    if (units) {
      returnVal += ' ' + units;
    }
    return returnVal;
  }

  static getPersonFullName(person: PersonInterface): string {
    const name: string[] = [];
    if (person.firstName) {
        name.push(person.firstName);
    }
    if (person.middleName) {
        name.push(person.middleName);
    }
    if (person.lastName) {
        name.push(person.lastName);
    }
    return name.join(' ');
  }

  static joinAuthorNames(authors: string[], separator: string = ', ', finalSeparator: string = ' & '): string {
    let returnVal: string = authors.slice(0, -1).join(separator);
    if (authors.length > 1) {
      returnVal += finalSeparator;
    }
    if (authors.length > 0) {
      returnVal += authors.slice(-1)[0];
    }
    return returnVal;
  }
}
