import { Injectable } from '@angular/core';
import { CommunityUser, CommunityUserAndSessionInfo } from 'app/entity/user/CommunityUserRelated';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ProfileDAO {
    private endPoint:String = "";
    private configPath = 'assets/config/config.json';

    constructor(private cookieService: CookieService,private httpClient: HttpClient) {
        httpClient.get(this.configPath).subscribe((data: Config) => this.endPoint = data['endPoint']);
    }

    login(email:String, encodedPwd: String) {
       return this. httpClient.get<CommunityUserAndSessionInfo>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', 
       {
           observe: 'body',
           headers: new HttpHeaders().set('User-Agent', navigator.userAgent),
           responseType: 'json'
        })
      .subscribe(
          (resp: CommunityUserAndSessionInfo) => {
              this.cookieService.set('access_token', resp.userSession.token)
              return resp;
            },
          (error) => {return Observable.throw(error);}
      )
    }

    saveCommunityUser(user: CommunityUser) {
        return this.httpClient.post<CommunityUser>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json',
        user,
        {
            observe: 'body',
            headers: new HttpHeaders()
            .set('Content-type','json')
            .append('Accept', 'json')
            .append('Authorization', this.cookieService.get('access_token'))
            .append('User-Agent', navigator.userAgent),
            responseType: 'json'
         })
       .subscribe(
           (resp: CommunityUser) => {return resp;},
           (error) => {return Observable.throw(error);}
       )
     }

     updateCommunityUser(user: CommunityUser) {
        return this. httpClient.put<CommunityUser>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', user,
        {
            observe: 'body',
            headers: new HttpHeaders()
            .set('Content-type','json')
            .append('Accept', 'json')
            .append('Authorization', this.cookieService.get('access_token'))
            .append('User-Agent', navigator.userAgent),
            responseType: 'json'
         })
       .subscribe(
           (resp: CommunityUser) => {return resp;},
           (error) => {return Observable.throw(error);}
       )
     }
}