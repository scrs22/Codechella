from utils import config
import tweepy as tw
from datetime import date
class Track:
    def __init__(self,user,goal):
        self.user=user
        self.goal=goal
        self.api=None

    def tweet(self,tweetText,media=None):
        auth = tw.OAuthHandler(config.consumer_key, config.consumer_secret)
        key,secret=self.user.getAccess()
        auth.set_access_token(key, secret)
        self.api = tw.API(auth, wait_on_rate_limit=True)
        self.api.update_status(status=tweetText)
        d=date.today()
        self.user.setGoalData(self.goal,d.strftime("%d/%m/%Y"),{"tweet":tweetText,"Media":media})


    def getInfo(self,date):
        return self.user.getGoalData(self.goal,date)