import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgSSCookieService {

  constructor() { }
  /**
   * create new or update cookie
   */
  save = {
    /**
     * save or update value as json string
     * @param key:string
     * @param dto:any | any[];
     * @param expireDate: Date
     * @param path: string;optional; default='/';
     */
    asDto: function (key: string, dto: any | any[], expireDate: Date, path: string = '/') {
      document.cookie = `${key}=${JSON.stringify(dto)}; expires=${expireDate.toUTCString()}; path=${path}`;

    },
    /**
     * save or update value as string
     * @param key:string
     * @param value 
     * @param expireDate: Date
     * @param path: string;optional; default='/';
     */
    asString: function (key: string, value: string, expireDate: Date, path: string = '/') {
      document.cookie = `${key}=${value}; expires=${expireDate.toUTCString()}; path=${path}`;
    }
  };

  /**
   * get saved cookie trought key
   */
  get = {
    /**
     * get data saved using asDto
     * @param key 
     * @param dtoObject
     * @returns dto object or dto object array 
     */
    asDto: function (key: string, dtoObject: any | any[]) {
      var name = key + '=';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          var value = c.substring(name.length, c.length);
          var jObject = JSON.parse(value);
          Object.assign(dtoObject, jObject);
        }
      }
      return dtoObject;
    },
    /**
     * get saved using asdto or asString both
     * @param key
     * @returns string value
     */
    asString: function (key: string) {
      var name = key + '=';
      var value: string = '';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          value = c.substring(name.length, c.length);
        }
      }
      return value;
    }
  };

  /**
   * delete saved cookie through key
   * @param key 
   * @param path; optional
   */
  delete(key: string, path: string = '/') {
    var date: Date = new Date();
    date.setFullYear(date.getFullYear() - 10);
    document.cookie = `${key}=ngss-cookie; expires=${date.toUTCString()}; path=${path}`;
  }

}
