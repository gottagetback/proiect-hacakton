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

export const VERIFY_INSTITIUTIONS_EMAIL_FUNCTION_ID = "691842da0037bbede318";

export const DB_ID = "691740b5001599f2ca93";

export const USERS_COLLECTION_ID = "691839b300076aef6e8c";
export const CAMERA_COLLECTION_ID = "691745b7000f19c48458";
export const CITY_COLLECTION_ID = "691740c2000da1b5cc83";
export const COUNT_COLLECTION_ID = "69174b7800001ff2f462";
export const DETECTION_COLLECTION_ID = "691746d10020a3c10b2f";
export const DETECTION_OBJECT_COLLECTION_ID = "6917474c0037868dfd0c";
export const INTERSECTION_COLLECTION_ID = "6918393d000a72c621bf";
export const LOCATIONS_COLLECTION_ID = "6917448f0011a801481b";
export const TRAFFIC_LIGHTS_COLLECTION_ID = "6917414c0039bd665287";
export const TRAFFIC_STATS_COLLECTION_ID = "69174c450003e4a0a234";
