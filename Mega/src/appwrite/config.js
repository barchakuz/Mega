import { Databases ,Client,Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectID);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.databaseID,
                conf.projectID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(error);
        }
    }
    async updatePost( slug, {title, content, featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                conf.databaseIDL,
                conf.collectionID,
                slug,
                {
                    title,content,featuredImage,status,userId
                }
    
            )
            
        } catch (error) {
            throw error;
        }
    }
    async deleteID(slug){
        try {
             await this.databases.deleteDocument(
                conf.databaseID,
                conf.collectionID,
                conf
            )
            return true
        } catch (error) {
            throw error;
            return false;
        }

    }
    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.databaseID,
                conf.collectionID,
                slug
            )
            return true
        } catch (error) {
            throw error;
            return false;
        }
    }
    async listPost(queries = [Query.equal("status","active")]){
        try {
            await this.databases.listDocuments(
                conf.databaseID,conf.collectionID, queries
            )
        } catch (error) {
            throw error
        }
    }

    //file upload service

    async uploadFile(file){
        try {
            await this.storage.createFile(
                conf.bucketID,
                file
            )
        } catch (error) {
            throw error
        }
    }
    async deleteFile(fileID){
        try {
            await this.storage.deleteFile(
                conf.bucketID,
                fileID
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }
    async previewFile(fileID){
        return this.storage.getFilePreview(
            conf.bucketID,
            fileID
        )
    }
};

const service = new Service();
export default service;