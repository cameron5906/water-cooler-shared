//Payloads

export interface AuthenticatePayload {
    domain: string;
    email: string;
    password: string;
}

export interface CreateAccountFromInvitationPayload {
    invitationCode: string;
    name: string;
    email: string;
    password: string;
}

export interface CreateOrganizationPayload {
    name: string;
    domain: string;
    purpose: "work" | "friends" | "other";
    invitees: string[];
    channels: { category: string; name: string; }[];
    user: {
        name: string;
        email: string;
        password: string;
    }
}

export interface UserSettingsPayload {
    name?: string;
    avatar?: any;
    oldPassword?: string;
    password?: string;
}

export interface InvitePayload {
    input: string;
    channel: string;
}

//Responses

export interface AuthenticateResponse {
    error?: string;
    token?: string;
}

export interface CreateAccountFromInvitationResponse {
    ok: boolean;
    error?: string;
}

export interface CreateOrganizationResponse {
    error?: string;
    token?: string;
}

export interface InvitationInfoResponse {
    valid: boolean;
    organization?: string;
    invitedBy?: string;
    email?: string;
}

export interface OperationResponse {
    ok: boolean;
    data?: any;
    errorMessage?: string;
    errors?: { [error: string]: string };
}