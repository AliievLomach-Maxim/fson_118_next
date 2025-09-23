import React from 'react'

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      ProfileLayout
      {children}
    </div>
  )
}

export default ProfileLayout
