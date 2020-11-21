import os
import tweepy as tw
import pandas as pd
import config
import pycountry


auth = tw.OAuthHandler(config.consumer_key, config.consumer_secret)
auth.set_access_token(config.access_token, config.access_token_secret)
api = tw.API(auth, wait_on_rate_limit=True)
tweets=api.search("#losingweight",lang="en",location="India",count=50)
user = api.get_user('shrutic22')

print("tweets")
print(user.screen_name)
print(user.followers_count)
for friend in user.friends():
   print(1,friend.screen_name)

for i in tweets:
    print(i,"\n")
