export interface ICurrencyData {
    currname: string;
    code: string;
    symbol: string;
    rateToBC: number;
    rateToUSD: number;
}

export interface IGraphData {
    xValues: any[];
    yValues: number[];
}

export interface IStoreData {
    isLoading?: boolean;
    getData?: () => any;
    data?: IStoreDataModules;
}

export interface IStoreDataModules {
    currencyData?: ICurrencyData[];
    graphData?: IGraphData[];
}


export interface IRespData {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

export interface BcConversion {
    time?:       Time;
    disclaimer?: string;
    chartName?:  string;
    bpi?:        Bpi;
}

export interface Bpi {
    USD?: CurrencyObj;
    GBP?: CurrencyObj;
    EUR?: CurrencyObj;
}

export interface CurrencyObj {
    code?:        string;
    symbol?:      string;
    rate?:        string;
    description?: string;
    rate_float?:  number;
}

export interface Time {
    updated?:    string;
    updatedISO?: Date;
    updateduk?:  string;
}
