import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunityUser } from 'app/entity/user/CommunityUserRelated';
import { ProfileDAO } from 'app/dao/profile-dao.service';

@Injectable()
export class AuthService {
  constructor(private profileDAO: ProfileDAO ) { }

  login(email:String, encodedPwd: String) {
      return this.profileDAO.login(email, encodedPwd);
  }
}