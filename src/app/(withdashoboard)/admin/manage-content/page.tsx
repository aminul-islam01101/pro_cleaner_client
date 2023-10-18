'use client'
import { withRoles } from "@/services/permission.services"


const page = () => {
  return (
    <div>content page</div>
  )
}

export default withRoles(page, ['content_manager'])