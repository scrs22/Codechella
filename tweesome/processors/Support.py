from Api import api
class Support:
    def __init__(self,goal,location=None):
        self.goal=goal
        self.location=location
        self.supportGroups=None

    def getSupportGroupList(self):
        tweets = api.search(q=self.goal.hashtag and ("#supportGroup" or "#support"), lang="en",location=self.location)
        self.supportGroups=[]
        for tweet in tweets:
            # print(tweet.text,"\n")
            user = tweet.user
            name=user.name
            url="https://twitter.com/"+name
            location = user.location
            followerCount=user.followers_count
            if followerCount>50 and user.url!=None:
                self.supportGroups.append(["@"+name,url,location,followerCount])
        return self.supportGroups

    def follow(self, user):
        user.follow()