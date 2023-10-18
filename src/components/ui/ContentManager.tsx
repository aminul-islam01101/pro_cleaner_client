'use client'

import { permissions } from '@/constants/permissions'
import { withRoles } from '@/services/permission.services'
import React from 'react'
const ContentManager = () => {
  return (
    <div>ContentManager</div>
  )
}

export default withRoles(ContentManager, permissions.cm)