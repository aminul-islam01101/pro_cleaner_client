import { decodedToken } from '@/components/ui/jwt';
import { authKey } from '@/constants/storageKey';
import { getFromLS, setToLS } from '@/utils/localStorage';

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLS(authKey, accessToken);
};
export const getUserInfo = () => {
  const authToken = getFromLS(authKey);
  if (authToken) {
    return decodedToken(authToken);
  }

  return '';
};
