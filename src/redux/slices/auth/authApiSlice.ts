import { baseApi } from '@/redux/api/baseApi';
import { FormValues } from '@/types/formTypes';


const AUTH_URL = '/auth';
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation({
      query: (loginData: FormValues) => ({
        url: `${AUTH_URL}/signin`,
        method: 'POST',
        data: loginData,
      }),
      invalidatesTags: ['user'],
    }),
  }),
  overrideExisting: false,
});

export const { useSigninMutation } = authApi;
