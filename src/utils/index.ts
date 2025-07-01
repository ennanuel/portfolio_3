
import { Client, Databases, ID } from "appwrite";
import { getCalApi } from "@calcom/embed-react";
import { COLLECTION_ID, DATABASE_ID, ENDPOINT_URL, IP_URL, PROJECT_ID } from "../assets/constants";

type Payload = {
  [key: string]: string;
};

async function getIpAddress() {
    try {
        const response = await fetch(IP_URL);
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
            .setEndpoint(ENDPOINT_URL)
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

export async function saveVisitorToDB(avoidVisitor: boolean) {
    const skipRecordingVistor = avoidVisitor || Date.now() <= Number(localStorage.getItem('omit'));

    if(skipRecordingVistor) {
        const nextThreeDays = Date.now() + 259200000;
        localStorage.setItem('omit', String(nextThreeDays));
    } else {
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
    }
};

export async function initializeCalApi() {
    const cal = await getCalApi({ namespace: "30min" });
    cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
    });
}