# NgSSCookie
NgSSCookie used to manage cookies in application which is developed using angular framework.
- [NPM package](https://www.npmjs.com/package/ngsameera-cookie)
- [GitHub Repository](https://github.com/sameerasuresh/ngsameera-cookie)
## Content 
 - [Installation](#installation)
 - [Documentation](#documentation)
	 - [Import and inject to file](#1-import-and-inject-to-file)
	 - [Save cookie](#2-save-cookie)
	 - [Read cookie](#3-read-cookie)
	 - [Update existing cookie](#4-update-existing-cookie)
	 - [Delete cookie](#5-delete-cookie)
 - [Creator](#creator)
## Installation

 - Add package using npm
	 ```
	 npm i ngsameera-cookie --save
	 ```
	 or
	 ```
	 npm i ngsameera-cookie@latest --save
	 ```

## Documentation
 ### 1. Import and inject to file
 In this case, used for app.component.ts .
```typescript
	//app.component.ts
	import { Component } from '@angular/core';

	//import NgSSCookieService
	import { NgSSCookieService } from 'ngsameera-cookie';

	@Component({
		selector: 'app-root',
		template: `<p>ngss-cookie works!</p>`,
		styles: []
		})
		export class AppComponent {
	    /**
	   * Inject NgSSCookieService
	   * @param cookie
	   */
		 constructor(private cookie:NgSSCookieService) { }

	}
```
### 2. Save cookie
---
#### 1. Save as string
Use for save only string value in cookie
- ```this.cookie.save.asString(key:string,value:strng,expireDate: Date,path?:string);```
 - ```key``` argument for key
 - ```value``` argument for string value
 - ```expireDate``` argument for expire date.
 - ```path```you can use fourth argument to set path as string value(```'/api'```).
	it is optional and default value is ```/```.
```typescript
//create expire date
var  expireDate:Date = new  Date();
expireDate.setDate(expireDate.getDate()+2);

//save
this.cookie.save.asString('key1','value1',expireDate);
```
#### 2. Save as DTO
1. create dto class file. example.```dto.ts```
```typescript
export  class Dto{
	name:string;
	age:number;
	married:boolean
	setData(name:string,age:number,married:boolean){
		this.name = name;
		this.age = age;
		this.married = married;
	}
}
```
2. Import and implement
	Use for save dto in cookie. cookie actually saved in cookie as JSON string.
	- ```this.cookie.save.asDto(key:string,dto:any | any [],expireDate: Date,path?:string);```
	 - ```key``` argument for key
	 - ```dto``` argument for pass data source to save cookies. It can be 					object or object array.
	 - ```expireDate``` argument for expire date.
	 - you can use fourth argument to set path as string value(```'/api'```).
		it is optional and default value is ```/```.
```typescript
//imort Dto
import { Dto } from './dto';	

//make dto
var  dto:Dto = new Dto();
dto.setData('Suresh',20,false);

//create expire date
var  expireDate:Date = new Date();
expireDate.setDate(expireDate.getDate()+2);

//save dto
this.cookie.save.asDto('key2',dto,expireDate);
```
### 3. Read cookie
------
#### 1. Read as String
Use for read string value or DTO in cookie both. But return only string value.
- ```this.cookie.get.asString(key:string);```
 - ```key1``` argument for key
```typescript
//read
var  value: string = this.cookie.get.asString('key1');
console.info(value);
```
#### 2. Read as DTO
Use for read only DTO cookie.
- ```this.cookie.get.asDto(key:string,object:any | any[]);```
- ```key``` argument for key
- ```dto```store existing cookie in dto. It can be object or object array.
```typescript
//make new Dto
var  savedDto:Dto = new  Dto();

//read
this.cookie.get.asDto('key2',savedDto);
console.info(savedDto);
```
### 4. Update existing cookie
-----
Use save function for update. If existing cookies has path, you should pass path argument(```path?:string```) to update it . Else path is not essential.
```typescript
//create expire date

var  expireDate:Date = new  Date();
expireDate.setDate(expireDate.getDate()+2);

//update
this.cookie.save.asString('key1','updated-value1',expireDate);
```
### 5. Delete Cookie
------
Use for delete existing cookie. 
```this.cookie.delete(key:string,path?:string);```
If existing cookies has path, you should pass path argument(```path?:string```) to update it . Else path is not essential.
```typescript 
//delete
this.cookie.delete('key1');
```
--------
## Creator
#### Suresh Sameera
- [https://www.linkedin.com/in/sameerasuresh](https://www.linkedin.com/in/sameerasuresh)
- [https://github.com/sameerasuresh](https://github.com/sameerasuresh)
    
