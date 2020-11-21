from DatabaseDemo import data

class SignUp:
    def __init__(self,username,password,twitterHandle,contact):
        self.username=username
        self.password=password
        self.twitterHandle=twitterHandle
        self.contact=contact
        self.oAuthaccesstoken=None
        self.oAuthsecretkey=None

    def checkUserNameExists(self):
        if self.username in data:
            return True
        else:
            return False

    def setuserAccountAccess(self,oAuthaccesstoken,oAuthsecretkey):
        self.oAuthaccesstoken=oAuthaccesstoken
        self.oAuthsecretkey=oAuthsecretkey

    def addUser(self):
        if self.checkUserNameExists()==False:
            data[self.username]={"UserId":self.username,
                                "password":self.password,
                                "twitterHandle":self.twitterHandle,
                                "contact":self.contact,
                                "oAuthAccesstoken":self.oAuthaccesstoken,
                                "oAuthSecretkey":self.oAuthsecretkey,
                                "goal":{}}

    def addUserGoal(self,goal):
        data[self.username]["goal"]={goal.getName:{goal.getHashTag:{}}}



