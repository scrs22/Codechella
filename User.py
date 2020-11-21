from DatabaseDemo import data
#user account information
#user goal information
#
class User:
    #define user information
    #user enters username and password-account information
    #goal_dataset
    def __init__(self,username):
        self.username=username
        self.udata=None

    def getGoalData(self,goal,date):
        #how to get data from database
        if date in data[self.username][goal]:
            return data[self.username][goal][date]
        else:
            return {"tweet":"","Media":""}

    def setGoalData(self,goal,date,info):
        data[self.username][goal.name][goal.hashtag][date]=info




    def set_data(self):
        pass
    def
