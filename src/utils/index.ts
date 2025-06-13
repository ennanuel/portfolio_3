
import { Client, Databases, ID } from "appwrite";
import { getCalApi } from "@calcom/embed-react";

type Payload = {
  [key: string]: string;
};

const PROJECT_ID = String(import.meta.env.NEXT_PUBLIC_PROJECT_ID);
const DATABASE_ID = String(import.meta.env.NEXT_PUBLIC_DB_ID);
const COLLECTION_ID = String(import.meta.env.NEXT_PUBLIC_COLLECTION_ID2);

async function getIpAddress() {
    try {
        const response = await fetch("https://ipinfo.io/json");
        const data = await response.json();

        return data.ip;
    } catch (error) {
        return "Unable to retrieve IP address.";
    }
};

const saveToDB = (payload: Payload, collectionId: string) => new Promise(async (resolve, reject) => {
    try {
        const client = new Client();
        client
            .setEndpoint('https://fra.cloud.appwrite.io/v1')
            .setProject(PROJECT_ID);

        const database = new Databases(client);

        await database.createDocument(
            DATABASE_ID, 
            collectionId, 
            ID.unique(), 
            payload
        );
        resolve(null);
    } catch (error) {
        reject(error);
    }
});

export async function saveVisitorToDB() {
    try {
        const location = await getIpAddress();
        const payload = {
            location,
            url: window.location.href,
            platform: "Portfolio",
            userAgent: navigator.userAgent
        };

        saveToDB(payload, COLLECTION_ID);
    } catch (error) {
        console.error('Could not send request');
    }
};

export async function initializeCalApi() {
    const cal = await getCalApi({ namespace: "30min" });
    cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
    });
}