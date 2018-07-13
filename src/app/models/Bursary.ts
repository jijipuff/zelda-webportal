export interface Bursary {
    bursaryId?: string;
    clientId?: string;
    title?: string;
    bursaryUrl?: string;
    fields?: string[];
    applicableFields?: string[];
    description?: string;
    applicationProcess?: string;
    supportProvided?: string;
    requirements?: string;
    closingDate?: Date;
}
