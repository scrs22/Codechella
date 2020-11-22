import pycountry
from Api import api
import tweepy as tw
from datetime import date

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
                               tweet_mode='extended',
                               since=self.date_since).items(self.num_tweets)
        else:
            tweets = tw.Cursor(api.search,
                               q=self.search_q,
                               lang="en",
                               tweet_mode='extended',
                               location=self.country,
                               since=self.date_since).items(self.num_tweets)

        return tweets

    def TweetCount(self):
        today = date.today()
        tweets = tw.Cursor(api.search,
                           q=self.search_q,
                           lang="en",
                           location=self.country,
                           since=today)
        return len(tweets)

    def get_user(self,tweet):
        return tweet.user.screen_name

    def get_location(self,tweet):
        return tweet.user.location

    def get_trend(self):
        trendList=[]
        for tweet in self.get_tweets():
            user=self.get_user(tweet)
            location=self.get_location(tweet)
            trendList.append([tweet.text,"https://twitter.com/twitter/statuses/"+str(tweet.id),user,location])




