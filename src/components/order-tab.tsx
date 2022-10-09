import {Component} from "react";
import {OrderModel, OrderStatus} from "../model/Order-model";
import {Order} from "./order";
import {ApiCaller} from "../api/ApiCaller";


type props = {}
type state = {
    orders: OrderModel[]
}

export class OrderTab extends Component<props, state> {

    constructor(props: any) {
        super(props);
        this.state = {
            orders: [] as OrderModel[]
        }
    }

    componentDidMount() {

        const fetchData = async () => {

            const filter = {
                status: [OrderStatus.NEW, OrderStatus.PARTIALLY_FILLED],
            }
            const orders = await ApiCaller.getOrderFromDb(filter);
            if (orders) {
                this.setState({orders: orders})
            }
        }
        fetchData()

    }

    render() {
        const {orders} = this.state;
        return (<div>
            <h1>Your active orders</h1>
            {orders.map(order => <Order key={order._id} order={order}/>)}
        </div>);
    }


}
