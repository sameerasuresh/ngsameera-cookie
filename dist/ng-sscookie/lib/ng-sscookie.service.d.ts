export declare class NgSSCookieService {
    constructor();
    /**
     * create new or update cookie
     */
    save: {
        /**
         * save or update value as json string
         * @param key:string
         * @param dto:any | any[];
         * @param expireDate: Date
         * @param path: string;optional; default='/';
         */
        asDto: (key: string, dto: any, expireDate: Date, path?: string) => void;
        /**
         * save or update value as string
         * @param key:string
         * @param value
         * @param expireDate: Date
         * @param path: string;optional; default='/';
         */
        asString: (key: string, value: string, expireDate: Date, path?: string) => void;
    };
    /**
     * get saved cookie trought key
     */
    get: {
        /**
         * get data saved using asDto
         * @param key
         * @param dtoObject
         * @returns dto object or dto object array
         */
        asDto: (key: string, dtoObject: any) => any;
        /**
         * get saved using asdto or asString both
         * @param key
         * @returns string value
         */
        asString: (key: string) => string;
    };
    /**
     * delete saved cookie through key
     * @param key
     * @param path; optional
     */
    delete(key: string, path?: string): void;
}
