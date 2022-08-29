import { Injectable } from '@angular/core';
import { AuthInterface } from '../reducers/auth/auth';

@Injectable({
  providedIn: 'root',
})
class LocalStorageService {
  login(data: AuthInterface) {
    localStorage.setItem('full', JSON.stringify(data));
    // console.log({ LocalStorage: data });
  }

  getData() {
    if (localStorage.getItem('full')) {
      return JSON.parse(localStorage.getItem('full') || '');
    }
    return {};
  }

  logout() {
    localStorage.clear();
  }

  onLoginSuccess(id: string, name: string) {
    console.log("saving id to local storage");
    localStorage.setItem('userId', id);
    localStorage.setItem('userName', name);
  }
}
export default LocalStorageService;
