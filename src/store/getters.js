const getters = {
  token: state => state.user.token,
  nickname: state => state.user.nickname,
  avatar: state => state.user.avatar,
  signature: state => state.user.signature,
  wantBehaviorNum: state => state.behavior.wantRead + state.behavior.wantWatch + state.behavior.wantFollow,
  ingBehaviorNum: state => state.behavior.reading + state.behavior.watching + state.behavior.following,
  doneBehaviorNum: state => state.behavior.read + state.behavior.watched + state.behavior.followed
}

export default getters
