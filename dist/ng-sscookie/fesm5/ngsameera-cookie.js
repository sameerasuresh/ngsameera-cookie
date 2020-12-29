import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';

var NgSSCookieService = /** @class */ (function () {
    function NgSSCookieService() {
        /**
         * create new or update cookie
         */
        this.save = {
            /**
             * save or update value as json string
             * @param key:string
             * @param dto:any | any[];
             * @param expireDate: Date
             * @param path: string;optional; default='/';
             */
            asDto: function (key, dto, expireDate, path) {
                if (path === void 0) { path = '/'; }
                document.cookie = key + "=" + JSON.stringify(dto) + "; expires=" + expireDate.toUTCString() + "; path=" + path;
            },
            /**
             * save or update value as string
             * @param key:string
             * @param value
             * @param expireDate: Date
             * @param path: string;optional; default='/';
             */
            asString: function (key, value, expireDate, path) {
                if (path === void 0) { path = '/'; }
                document.cookie = key + "=" + value + "; expires=" + expireDate.toUTCString() + "; path=" + path;
            }
        };
        /**
         * get saved cookie trought key
         */
        this.get = {
            /**
             * get data saved using asDto
             * @param key
             * @param dtoObject
             * @returns dto object or dto object array
             */
            asDto: function (key, dtoObject) {
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
            asString: function (key) {
                var name = key + '=';
                var value = '';
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
    }
    /**
     * delete saved cookie through key
     * @param key
     * @param path; optional
     */
    NgSSCookieService.prototype.delete = function (key, path) {
        if (path === void 0) { path = '/'; }
        var date = new Date();
        date.setFullYear(date.getFullYear() - 10);
        document.cookie = key + "=ngss-cookie; expires=" + date.toUTCString() + "; path=" + path;
    };
    NgSSCookieService.ɵprov = ɵɵdefineInjectable({ factory: function NgSSCookieService_Factory() { return new NgSSCookieService(); }, token: NgSSCookieService, providedIn: "root" });
    NgSSCookieService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgSSCookieService);
    return NgSSCookieService;
}());

/*
 * Public API Surface of ng-sscookie
 */
//export * from './lib/ng-sscookie.component';
//export * from './lib/ng-sscookie.module';

/**
 * Generated bundle index. Do not edit.
 */

export { NgSSCookieService };
//# sourceMappingURL=ngsameera-cookie.js.map
