from DatabaseDemo import data

class SignUp:
    def __init__(self,username,password,twitterHandle,contact):
        self.username=username
        self.password=password
        self.twitterHandle=twitterHandle
        self.contact=contact
        self.accesstoken=None
        self.secretkey=None

    def twitterSignIn(self):
        pass

    def checkUserNameExists(self):
        if self.username in data:
            return True
        else:
            return False

    def addUser(self):
        if checkUserNameExists():
            return
            #@todo ask for a different username
        else:
            data[s]


    def IncorrectUserName(self):
        if


    def storeInfo(self):
        pass