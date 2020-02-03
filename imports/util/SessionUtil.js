export const login = () => {
    Meteor.loginWithGithub({
      requestPermissions: ["read:user"]
    }, (err) => {
    })
}
export const logout = () => {
    Meteor.logout()
}