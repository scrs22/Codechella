from tweesome.utils.Utilities import get_current_timestamp, execute_qry
class user:
    id = None
    user_name = None
    email = None
    twitter_handle = None
    password = None
    location = None
    contact = None
    access_token = None
    secret_key = None


    def __init__(self):
        pass

    def set_id(self,id):
        self.id = id

    def get_id(self):
        return self.id

    def set_user_name(self,uname):
        self.user_name = uname

    def get_user_name(self):
        return self.user_name

    def set_email(self,uemail):
        self.email = uemail

    def get_email(self):
        return self.email

    def set_twitter_handle(self,tHandle):
        self.twitter_handle = tHandle

    def get_twitter_handle(self):
        return self.twitter_handle

    def set_password(self,pwd):
        self.password = pwd

    def get_password(self):
        return self.password

    def set_access_token(self,access_token):
        self.access_token = access_token

    def get_access_token(self):
        return self.access_token

    def set_secret_key(self,skey):
        self.secret_key = skey

    def get_secret_key(self):
        return self.secret_key

    def set_location(self,loc):
        self.location = loc

    def get_location(self):
        return self.location

    def set_contact(self,contact):
        self.contact = contact

    def get_contact(self):
        return self.contact

    def insert_signup_details(self):
        insert_qry = """
                    insert into users (user_email, password,contact, location,last_update_timestamp) values ('{}','{}','{}','{}','{}')
                    """.format(
            self.email,self.password,self.contact,self.location,get_current_timestamp()
        )

        print("executing insert query")
        print(insert_qry)
        if execute_qry(insert_qry):
            pass
        else:
            raise Exception


    def update_twitter_details(self,id):
        update_qry ="""
                    update users set twitter_handle = '{}',
                                 access_token = '{}',
                                 auth_secret_key = '{}'
                                 where id = {}                                  
                    """.format(self.twitter_handle,self.access_token,self.secret_key,self.id)

        execute_qry(update_qry)









