import UserType from 'src/data/types/UserType'

const me = {
  type: UserType,
  resolve({ request }) {
    return request.user && {
      id: request.user.id,
      email: request.user.email,
    }
  },
}

export default me
