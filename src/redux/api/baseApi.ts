import { createApi } from '@reduxjs/toolkit/query/react';

import { gerBaseUrl } from '@/helpers/configs/envConfigs';
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: gerBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: ['user'],
});
