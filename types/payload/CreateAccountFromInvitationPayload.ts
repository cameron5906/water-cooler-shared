/**
 * @category Payload
 * @description Contains information for creating an account from an invitation
 */
export interface CreateAccountFromInvitationPayload {
    invitationCode: string;
    name: string;
    email: string;
    password: string;
}