import {ID,Client,Account} from 'appwrite'
import conf from '../conf/conf';


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectID)
        this.account= new Account(this.client)
    }

    async createAccount({name, email, password}){
       try {
         const userAccount = await this.account.create(ID.unique(), email,password, name)
         if(userAccount){
            //
         }else{
            return userAccount;
         }
       } catch (error) {
        throw error;
       }

    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
            
        } catch (error) {
            return error
        }
    }

    async logout (){
        try {
            return await this.account.deleteSession()
        } catch (error) {
            throw error
        }
        return null;
    }

    async currentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }

}
const authService = new AuthService()

export default authService