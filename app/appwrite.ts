import { Account, Client, Databases, Functions, ID, Query, Storage, TablesDB } from "appwrite";

export const client = new Client();

client.setEndpoint("https://fra.cloud.appwrite.io/v1").setProject("69173b1a002aa262e36f");

export const account = new Account(client);
export { ID } from "appwrite";

export const auth = new Account(client);
export const db = new Databases(client);
export const tables = new TablesDB(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const id = ID;
export const query = Query;
