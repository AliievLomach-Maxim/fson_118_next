import { getServerMe } from '@/lib/serverApi'

const Profile = async () => {
  const user = await getServerMe()
  console.log('user', user)
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
