export namespace Payload {
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
}