import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserSerializer } from '../Models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private endpoint = environment.crbm.CRBMAPI_URL;
  private serializer = new UserSerializer();

  // TODO Remove this method
  static _get(username?: string, includeRelatedObjects = false): User {
    let user: User;
    switch (username) {
      default:
      case 'jonrkarr':
        user = new User();
        user.userId = 1;
        user.userName = username;
        user.firstName = 'Jonathan';
        user.middleName = 'R';
        user.lastName = 'Karr';
        user.organization = 'Icahn School of Medicine at Mount Sinai';
        user.website = 'https://www.karrlab.org';
        user.email = 'jonrkarr@gmail.com';
        user.emailVerified = true;
        user.emailPublic = true;
        user.gravatarEmail = 'jonrkarr@gmail.com';
        user.gitHubId = 'jonrkarr';
        user.googleScholarId = 'Yb5nVLAAAAAJ';
        user.orcId = '0000-0002-2605-5080';
        user.description =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla risus ac aliquam commodo. Ut pellentesque, ' +
          'ligula sit amet condimentum lacinia, sapien tortor malesuada justo, et finibus nulla tellus vel velit. Aliquam erat volutpat. ' +
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras a scelerisque urna. ' +
          'Sed sodales ex vel sapien condimentum, at rhoncus nisi mollis. Sed blandit lobortis sagittis. Ut pretium quam odio, ' +
          'nec dictum erat aliquet quis.';
        break;
      case 'y.skaf':
        user = new User();
        user.userId = 2;
        user.userName = 'y.skaf';
        user.firstName = 'Yara';
        user.lastName = 'Skaf';
        user.organization = 'University of Connecticut Health Center';
        user.email = 'skaf@uchc.edu';
        user.emailVerified = true;
        user.emailPublic = true;
        user.gravatarEmail = 'skaf@uchc.edu';
        user.description = 'Description';
        break;
      case 'bilalshaikh42':
        user = new User();
        user.userId = 3;
        user.userName = 'bill2507733';
        user.firstName = 'Bilal';
        user.lastName = 'Shaikh';
        user.organization = 'Icahn School of Medicine at Mount Sinai';
        user.website = 'https://bilalshaikh.com';
        user.email = 'bilal.shaikh@columbia.edu';
        user.emailVerified = true;
        user.emailPublic = true;
        user.gitHubId = 'bilalshaikh42';
        user.description = 'Description';
        break;
      case 's.edelstein':
        user = new User();
        user.userId = 4;
        user.userName = 's.edelstein';
        user.firstName = 'S';
        user.lastName = 'Edelstein';
        break;
      case 'a.goldbeter':
        user = new User();
        user.userId = 5;
        user.userName = 'a.goldbeter';
        user.firstName = 'A';
        user.lastName = 'Goldbeter';
        break;
      case 'j.tyson':
        user = new User();
        user.userId = 6;
        user.userName = 'j.tyson';
        user.firstName = 'J';
        user.lastName = 'Tyson';
        break;
    }
    return user;
  }

  get$(username?: string): Observable<User> {
    let user: Observable<User>;
    user = this.http
      .get<User>(this.endpoint + '/users/' + username)
      .pipe(map(data => this.serializer.fromJson(data)));
    return user;
  }

  get(username?: string): User {
    return UserService._get(username, true);
  }

  list(): User[] {
    return [
      this.get('jonrkarr'),
      this.get('y.skaf'),
      this.get('b.shaikh'),
      this.get('s.edelstein'),
      this.get('a.goldbeter'),
      this.get('j.tyson'),
    ];
  }

  set(user: User, userName: string, id: string): void {
    user.userId = id;
    this.http
      .put<User>(
        this.endpoint + '/users/' + userName,
        this.serializer.toJson(user)
      )
      .pipe(map(data => this.serializer.fromJson(data)))
      .subscribe(res => console.log(res));
  }
}
