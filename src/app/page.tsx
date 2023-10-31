"use client";

import Login from './component/Login';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import UserDataProvider from './component/UserDataProvider';

export default function Home() {
  const queryClient = new QueryClient ();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <Login />
      </UserDataProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
      
    </>
  )
}
