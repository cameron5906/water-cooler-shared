declare module "water-cooler-shared" {
    export namespace Payload {
        interface CreateAccountFromInvitationPayload {
            invitationCode: string;
            name: string;
            email: string;
            password: string;
        }

        interface CreateOrganizationPayload {
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
    }

    export namespace Response {
        interface CreateAccountFromInvitationResponse {
            ok: boolean;
            error?: string;
        }
    
        interface CreateOrganizationResponse {
            error?: string;
            token?: string;
        }
    
        interface InvitationCheckResponse {
            valid: boolean;
        }
    }
}