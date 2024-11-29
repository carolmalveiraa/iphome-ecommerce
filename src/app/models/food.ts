export interface Food {
    id: number;
    title: string;
    serves: string;
    description: string;
    imageLink: string;
    price: number;
    availableInStock?: number;
}
