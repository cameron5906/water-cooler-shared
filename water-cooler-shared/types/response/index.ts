export namespace Response {
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
}