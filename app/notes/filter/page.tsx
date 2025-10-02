// SSR

import { redirect } from 'next/navigation'

const Redirect = async () => {
  redirect('/notes/filter/all')
}

export default Redirect
