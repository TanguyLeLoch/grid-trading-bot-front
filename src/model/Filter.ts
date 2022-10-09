import {OrderStatus} from "./Order-model";

export type Filters = {
    status: OrderStatus | OrderStatus[];
}