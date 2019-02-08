export class CommunityUser {
    id: number;
    email: string;
    user_type: string;
    user_src: string;
    status: string;
    create_date: Date;
}

export class CommunityUserLoginInfo {
    email: string;
    encoded_pwd: string;
}

export class CommunityUserSession{
    session_id: number;
    email: string;
    device_id: string;
    token: string;
    creation_date: Date;
    expire_seconds: number;
    status: string;
}

export class CommunityUserLoginHistory {
    his_id: number;
    email: string; 
    creation_date: Date;
    action_type : string;
}

export class CommunityUserAndSessionInfo {
    userInfo: CommunityUser;
    userSession: CommunityUserSession;
}