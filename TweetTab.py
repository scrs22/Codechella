from demo1 import api
import tweepy as tw
class TweetTab:
    def __init__(self,search_q,date_since,num_tweets):
        self.search_q=search_q
        self.date_since=date_since
        self.num_tweets=num_tweets

    def get_tweets(self):
        tweets = tw.Cursor(api.search,
                           q=self.search_q,
                           lang="en",
                           since=self.date_since).items()

    def get_user(self,tweet):
        return tweet.user.screen_name

    def get_location(self,tweet):
        return tweet.user.location

