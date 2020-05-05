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

export interface InvitationCheckPayload {
    code: string;
}


export interface CreateAccountFromInvitationResponse {
    ok: boolean;
    error?: string;
}

export interface CreateOrganizationResponse {
    error?: string;
    token?: string;
}

export interface InvitationCheckResponse {
    valid: boolean;
}