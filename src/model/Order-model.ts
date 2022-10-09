import {Pair} from "./Pair";

export interface OrderModel {
    _id: string
    planId?: string;
    pair: Pair;
    amount: number;
    status: OrderStatus;
    price: OrderPrice;
    side: Side;
}

export type OrderPrice = {
    type: PriceType;
    value?: number;
};

export enum PriceType {
    LIMIT = 'LIMIT',
    MARKET = 'MARKET',
}

export enum Side {
    BUY = 'BUY',
    SELL = 'SELL',
}

export enum OrderStatus {
    NEW = 'NEW',
    FILLED = 'FILLED',
    PARTIALLY_FILLED = 'PARTIALLY_FILLED',
    CANCELLED = 'CANCELLED',
}