import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    NgSSCookieService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgSSCookieService_Factory() { return new NgSSCookieService(); }, token: NgSSCookieService, providedIn: "root" });
    NgSSCookieService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgSSCookieService);
    return NgSSCookieService;
}());
export { NgSSCookieService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc3Njb29raWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nc2FtZWVyYS1jb29raWUvIiwic291cmNlcyI6WyJsaWIvbmctc3Njb29raWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFFRTtRQUNBOztXQUVHO1FBQ0gsU0FBSSxHQUFHO1lBQ0w7Ozs7OztlQU1HO1lBQ0gsS0FBSyxFQUFFLFVBQVUsR0FBVyxFQUFFLEdBQWdCLEVBQUUsVUFBZ0IsRUFBRSxJQUFrQjtnQkFBbEIscUJBQUEsRUFBQSxVQUFrQjtnQkFDbEYsUUFBUSxDQUFDLE1BQU0sR0FBTSxHQUFHLFNBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWEsVUFBVSxDQUFDLFdBQVcsRUFBRSxlQUFVLElBQU0sQ0FBQztZQUV2RyxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsUUFBUSxFQUFFLFVBQVUsR0FBVyxFQUFFLEtBQWEsRUFBRSxVQUFnQixFQUFFLElBQWtCO2dCQUFsQixxQkFBQSxFQUFBLFVBQWtCO2dCQUNsRixRQUFRLENBQUMsTUFBTSxHQUFNLEdBQUcsU0FBSSxLQUFLLGtCQUFhLFVBQVUsQ0FBQyxXQUFXLEVBQUUsZUFBVSxJQUFNLENBQUM7WUFDekYsQ0FBQztTQUNGLENBQUM7UUFFRjs7V0FFRztRQUNILFFBQUcsR0FBRztZQUNKOzs7OztlQUtHO1lBQ0gsS0FBSyxFQUFFLFVBQVUsR0FBVyxFQUFFLFNBQXNCO2dCQUNsRCxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNyQixJQUFJLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hELElBQUksRUFBRSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTt3QkFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO29CQUNELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3hCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQy9DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNuQztpQkFDRjtnQkFDRCxPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1lBQ0Q7Ozs7ZUFJRztZQUNILFFBQVEsRUFBRSxVQUFVLEdBQVc7Z0JBQzdCLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ3JCLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLEVBQUUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNkLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7d0JBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNwQjtvQkFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN4QixLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDNUM7aUJBQ0Y7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDO1NBQ0YsQ0FBQztJQTVFYyxDQUFDO0lBOEVqQjs7OztPQUlHO0lBQ0gsa0NBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxJQUFrQjtRQUFsQixxQkFBQSxFQUFBLFVBQWtCO1FBQ3BDLElBQUksSUFBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUMsUUFBUSxDQUFDLE1BQU0sR0FBTSxHQUFHLDhCQUF5QixJQUFJLENBQUMsV0FBVyxFQUFFLGVBQVUsSUFBTSxDQUFDO0lBQ3RGLENBQUM7O0lBekZVLGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBMkY3Qjs0QkFoR0Q7Q0FnR0MsQUEzRkQsSUEyRkM7U0EzRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ1NTQ29va2llU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgLyoqXG4gICAqIGNyZWF0ZSBuZXcgb3IgdXBkYXRlIGNvb2tpZVxuICAgKi9cbiAgc2F2ZSA9IHtcbiAgICAvKipcbiAgICAgKiBzYXZlIG9yIHVwZGF0ZSB2YWx1ZSBhcyBqc29uIHN0cmluZ1xuICAgICAqIEBwYXJhbSBrZXk6c3RyaW5nXG4gICAgICogQHBhcmFtIGR0bzphbnkgfCBhbnlbXTtcbiAgICAgKiBAcGFyYW0gZXhwaXJlRGF0ZTogRGF0ZVxuICAgICAqIEBwYXJhbSBwYXRoOiBzdHJpbmc7b3B0aW9uYWw7IGRlZmF1bHQ9Jy8nO1xuICAgICAqL1xuICAgIGFzRHRvOiBmdW5jdGlvbiAoa2V5OiBzdHJpbmcsIGR0bzogYW55IHwgYW55W10sIGV4cGlyZURhdGU6IERhdGUsIHBhdGg6IHN0cmluZyA9ICcvJykge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7a2V5fT0ke0pTT04uc3RyaW5naWZ5KGR0byl9OyBleHBpcmVzPSR7ZXhwaXJlRGF0ZS50b1VUQ1N0cmluZygpfTsgcGF0aD0ke3BhdGh9YDtcblxuICAgIH0sXG4gICAgLyoqXG4gICAgICogc2F2ZSBvciB1cGRhdGUgdmFsdWUgYXMgc3RyaW5nXG4gICAgICogQHBhcmFtIGtleTpzdHJpbmdcbiAgICAgKiBAcGFyYW0gdmFsdWUgXG4gICAgICogQHBhcmFtIGV4cGlyZURhdGU6IERhdGVcbiAgICAgKiBAcGFyYW0gcGF0aDogc3RyaW5nO29wdGlvbmFsOyBkZWZhdWx0PScvJztcbiAgICAgKi9cbiAgICBhc1N0cmluZzogZnVuY3Rpb24gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVEYXRlOiBEYXRlLCBwYXRoOiBzdHJpbmcgPSAnLycpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke2tleX09JHt2YWx1ZX07IGV4cGlyZXM9JHtleHBpcmVEYXRlLnRvVVRDU3RyaW5nKCl9OyBwYXRoPSR7cGF0aH1gO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogZ2V0IHNhdmVkIGNvb2tpZSB0cm91Z2h0IGtleVxuICAgKi9cbiAgZ2V0ID0ge1xuICAgIC8qKlxuICAgICAqIGdldCBkYXRhIHNhdmVkIHVzaW5nIGFzRHRvXG4gICAgICogQHBhcmFtIGtleSBcbiAgICAgKiBAcGFyYW0gZHRvT2JqZWN0XG4gICAgICogQHJldHVybnMgZHRvIG9iamVjdCBvciBkdG8gb2JqZWN0IGFycmF5IFxuICAgICAqL1xuICAgIGFzRHRvOiBmdW5jdGlvbiAoa2V5OiBzdHJpbmcsIGR0b09iamVjdDogYW55IHwgYW55W10pIHtcbiAgICAgIHZhciBuYW1lID0ga2V5ICsgJz0nO1xuICAgICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgICAgIHZhciBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgaWYgKGMuY2hhckF0KDApID09ICcgJykge1xuICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgICAgIHZhciBqT2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkdG9PYmplY3QsIGpPYmplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZHRvT2JqZWN0O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogZ2V0IHNhdmVkIHVzaW5nIGFzZHRvIG9yIGFzU3RyaW5nIGJvdGhcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMgc3RyaW5nIHZhbHVlXG4gICAgICovXG4gICAgYXNTdHJpbmc6IGZ1bmN0aW9uIChrZXk6IHN0cmluZykge1xuICAgICAgdmFyIG5hbWUgPSBrZXkgKyAnPSc7XG4gICAgICB2YXIgdmFsdWU6IHN0cmluZyA9ICcnO1xuICAgICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgICAgIHZhciBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgaWYgKGMuY2hhckF0KDApID09ICcgJykge1xuICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcbiAgICAgICAgICB2YWx1ZSA9IGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGRlbGV0ZSBzYXZlZCBjb29raWUgdGhyb3VnaCBrZXlcbiAgICogQHBhcmFtIGtleSBcbiAgICogQHBhcmFtIHBhdGg7IG9wdGlvbmFsXG4gICAqL1xuICBkZWxldGUoa2V5OiBzdHJpbmcsIHBhdGg6IHN0cmluZyA9ICcvJykge1xuICAgIHZhciBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSAtIDEwKTtcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtrZXl9PW5nc3MtY29va2llOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfTsgcGF0aD0ke3BhdGh9YDtcbiAgfVxuXG59XG4iXX0=