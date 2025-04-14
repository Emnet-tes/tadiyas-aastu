import { Client,Storage } from 'appwrite';

const APPWRITE_ID = process.env.NEXT_PUBLIC_APPWRITE_ID
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') 
.setProject(APPWRITE_ID as string
 )
const storage = new Storage(client);

export { client, storage };