import {OrderModel} from "../model/Order-model";

import {Filters} from "../model/Filter";
import {getUrl} from "./urlUtils";

export class ApiCaller {
    public static getOrderFromDb = async (filters: Filters): Promise<OrderModel[]> => {
        let url = getUrl("order");
        const requestInit = this.createDefaultRequestInit()
        let response;
        url += "/orders";
        url += filters ? "?filters=" + JSON.stringify(filters) : '';
        response = await fetch(url, requestInit);
        return await response.json()
    }

    private static createDefaultRequestInit = (): RequestInit => {
        return {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-key-middleware': 'devapikey'
            }
        }
    }
}