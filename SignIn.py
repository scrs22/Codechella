from DatabaseDemo import data
class SignIn:
    def __init__(self,username,password):
        self.username=username
        self.password=password
        #@todo encrypt password

    def check_user(self):
        if self.username in data:
            if data[self.username]["password"]==self.password:
                return True
        return False


    def getAccountAccess(self):
        if self.check_user():
            #display page for trends
            #@Todo shreeram
            pass

