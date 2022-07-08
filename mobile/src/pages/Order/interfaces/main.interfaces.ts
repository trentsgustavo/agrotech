interface ICustomer {
    id: number,
    name: string
}
  
interface IDataCustomer {
    customers: ICustomer[];
}

interface IProduct {
    id: number,
    name: string
}

interface IDataProduct {
    products: IProduct[];
}