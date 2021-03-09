export class JwtData {
  aud: string;
  exp: number;
  iss: string;
  jti: string;
  roles: string | [string];
  sub: string;
  userid: string;
}
