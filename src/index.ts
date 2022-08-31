import { AuthClient } from './feature/authentication/application/auth-client';
import { User } from './feature/authentication/domain/user';

// feature: authentication
const authClient = new AuthClient();
const user = new User('', '', '', 'alex@gmail.com', '123456');
authClient.auth('firebase', user).then(console.log);
