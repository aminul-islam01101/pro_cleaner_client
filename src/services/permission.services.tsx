'use client'

import { redirect } from "next/navigation";
import { getUserInfo } from "./auth.services";


function hasRequiredPermissions(requiredPermissions: string[]): boolean {

  const { adminPermissions } = getUserInfo() as any;
  console.log(getUserInfo())

  return requiredPermissions.some((permission) =>
  adminPermissions?.includes(permission)
  )
}

export function withRoles(Component: any, requiredPermissions: string[]) {
  return function WithRolesWrapper(props: any) {

    const hasPermission = hasRequiredPermissions(requiredPermissions)
    if (hasPermission) {
      return <Component {...props} />;
    } else {
      return redirect("/unauthorized");
    
    }
  }
}