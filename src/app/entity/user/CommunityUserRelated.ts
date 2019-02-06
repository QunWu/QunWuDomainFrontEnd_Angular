export class CommunityUser {
    id: number;
    email: string;
    user_type: string;
    user_src: string;
    status: string;
    create_date: Date;
}

export class CommunityUserLoginInfo {
    email: String;
    encoded_pwd: String;
}

export class CommunityUserSession{
    session_id: number;
    email: String;
    device_id: String;
    token: String;
    creation_date: Date;
    expire_seconds: number;
    status: String;
}

export class CommunityUserLoginHistory {
    his_id: number;
    email: String; 
    creation_date: Date;
    action_type : String;
}