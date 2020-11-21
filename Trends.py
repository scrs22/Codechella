import pycountry
from Api import api
import tweepy as tw
class Trends:
    def __init__(self,goal,date_since,num_tweets=50,location="No Preference"):
        self.search_q=goal.search_q
        self.date_since=date_since
        self.num_tweets=num_tweets
        self.country=None

    def get_tweets(self):
        try:
            self.country=pycountry.countries.search_fuzzy(self.location)
        except:
            self.country =""

        if self.country =="":
            tweets = tw.Cursor(api.search,
                               q=self.search_q,
                               lang="en",
                               since=self.date_since).items(self.num_tweets)
        else:
            tweets = tw.Cursor(api.search,
                               q=self.search_q,
                               lang="en",
                               location=self.country,
                               since=self.date_since).items(self.num_tweets)

        return tweets

    def get_user(self,tweet):
        return tweet.user.screen_name

    def get_location(self,tweet):
        return tweet.user.location

    def get_trend(self):


