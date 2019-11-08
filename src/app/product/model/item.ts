export class Item {
    id: number;
    title: string;
    description: string;
    price: Blob;
    market_price: string;
    images: [{ 
        url: string; 
    }];
}