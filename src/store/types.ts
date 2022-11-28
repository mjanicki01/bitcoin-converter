export interface ICurrencyData {
    name: string;
    code: string;
    symbol: string;
    rateToBC: number;
    rateToUSD: number;
    lastRateVerification?: Date;
}

export interface IGraphData {
    xValues: any[];
    yValues: number[];
}

export interface IStoreData {
    currencyData: ICurrencyData[],
    graphData: IGraphData[]
}

export interface IRespData {
    code: string,
    symbol: string,
    rate: string,
    description: string,
    rate_float: number
}

export interface BcConversion {
    time?:       Time;
    disclaimer?: string;
    chartName?:  string;
    bpi?:        Bpi;
}

export interface Bpi {
    USD?: Eur;
    GBP?: Eur;
    EUR?: Eur;
}

export interface Eur {
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
