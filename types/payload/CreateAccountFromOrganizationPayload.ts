/**
 * @category Payload
 * @description Contains information for creating a new organization with base settings
 */
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