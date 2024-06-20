export interface Dealership {
    name: string;
    dealerCode: string;
    brand: string | null;
    province: string;
    country: string;
}

export interface Kpi {
    id: string;
    name: string;
    format: string;
}

export interface GroupedKpi {
    totals: Kpi[];
    customerPay: Kpi[];
    internal: Kpi[];
    warranty: Kpi[];
    expense: Kpi[];
    sublet: Kpi[];
    other: Kpi[];
}