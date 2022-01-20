export interface KeycloakTokenResponse {
  access_token:string,
  experis_in: number,
  refresh_expires_in: number,
  refresh_token:string,
  token_type:string,
  "not-before-policy":number,
  "session_state":string,
  "scope":string
}
