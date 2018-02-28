const actions = {
  LOAD_USERS ({state, commit}) {
    let users = [
      {
        'id': '1',
        'username': 'suprememoocow',
        'displayName': 'Andrew Newdigate',
        'url': '/suprememoocow',
        'avatarUrlSmall': 'https://avatars.githubusercontent.com/u/594566?',
        'avatarUrlMedium': 'https://avatars.githubusercontent.com/u/594566?'
      },
      {
        'id': '2',
        'username': 'statham',
        'displayName': 'Jason Stathan',
        'url': '/suprememoocow',
        'avatarUrlSmall': 'https://avatars.githubusercontent.com/u/594566?',
        'avatarUrlMedium': 'https://avatars.githubusercontent.com/u/594566?'
      },
      {
        'id': '3',
        'username': 'andrewng',
        'displayName': 'Andrew NG',
        'url': '/suprememoocow',
        'avatarUrlSmall': 'https://avatars.githubusercontent.com/u/594566?',
        'avatarUrlMedium': 'https://avatars.githubusercontent.com/u/594566?'
      }
    ]
    commit('SET_USERS', users)
  }
}

export default actions
