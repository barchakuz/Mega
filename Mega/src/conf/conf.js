const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    projectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    bucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    collectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)

}
export default conf