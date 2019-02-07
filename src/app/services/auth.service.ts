import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunityUser } from 'app/entity/user/CommunityUserRelated';

@Injectable()
export class AuthService {
  constructor(private profileDAO: ProfileDAO ) { }

  login(email:String, encodedPwd: String): CommunityUser {
      return profileDAO.login(email, encodedPwd);
  }
}