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