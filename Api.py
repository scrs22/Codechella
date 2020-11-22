import os
import tweepy as tw
import pandas as pd
import config
import pycountry
from datetime import date

auth = tw.OAuthHandler(config.consumer_key, config.consumer_secret)
auth.set_access_token(config.access_token, config.access_token_secret)
api = tw.API(auth, wait_on_rate_limit=True)
today = date.today()
tweets=api.search(q="#fitness" and ("#supportGroup" or "#support"),lang="en")
# user = api.get_user('shrutic22')

# print(len(tweets))
# print(user.screen_name)
# print(user.followers_count)
# for friend in user.friends():
#    print(1,friend.screen_name)

for tweet in tweets:
    #print(tweet.text,"\n")
    user = tweet.user.screen_name
    print(tweet.user.name)
    print(tweet.user.url)
    location = tweet.user.location
    print(tweet.user.followers_count)
    #print(location)
    #print("https://twitter.com/twitter/statuses/" + str(tweet.id))
