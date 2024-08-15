import { Store } from '../core/heropy'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://avatars.githubusercontent.com/u/79395147?s=96&v=4',
  name: 'Lina / Hyun Lee',
  email: 'hyunini0408@gmail.com',
  blog: 'https://heropy.blog',
  github: 'https://github.com/hyuni0316',
  repository: 'https://github.com/ParkYoungWoong/vanillajs-movie-app'
})