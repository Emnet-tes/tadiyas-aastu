import { Client,Storage } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') 
.setProject('67fa0e7f002455a94234')
const storage = new Storage(client);

export { client, storage };