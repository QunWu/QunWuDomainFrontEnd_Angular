import { Injectable } from '@angular/core';
import { CommunityUser } from 'app/entity/user/CommunityUserRelated';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';

@Injectable()
export class ProfileDAO {
    private endPoint:String = "";
    private configPath = 'assets/config/config.json';

    constructor(private httpClient: HttpClient) {
        httpClient.get(this.configPath).subscribe((data: Config) => this.endPoint = data['endPoint']);
    }

    login(email:String, encodedPwd: String): CommunityUser {
        return this.httpClient.get(this.endPoint+'auth').subscribe
    }
}