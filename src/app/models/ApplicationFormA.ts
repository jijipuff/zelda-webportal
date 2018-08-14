export interface ApplicationFormA {
    submitted?: boolean;
    firstName?: string;
    lastName?: string;
    gender?: string;
    emailAddress?: string;
    homeOrigin?: string;
    contactNo?: string;
    altContactNo?: string;
    address?: {
        city?: string;
        line1?: string;
        line2?: string;
        province?: string;
        zip?: string;
    }

}