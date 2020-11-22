from Api import api
class Track:
    def __init__(self,user,goal):
        self.user=user
        self.goal=goal

    def tweet(self):
        auth = tw.OAuthHandler(config.consumer_key, config.consumer_secret)
        auth.set_access_token(user.access_token, user.access_token_secret)
        api = tw.API(auth, wait_on_rate_limit=True)
