import { Subscription } from './Subscription';

export interface Client {
    id: string;
    title: string;
    link: string;
    admins: string[];
    subscription: Subscription;
}
