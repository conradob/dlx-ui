import { BigNumber } from 'ethers/utils';

export interface IPostInfo {
    id: number;
    title: string;
    author: string;
    date: string;
    intro: string;
}
export interface IMeetupContractStruct {
    status: BigNumber;
    date: BigNumber;
    seats: BigNumber;
    ipfs: string;
}
export interface IMeetupIPFSData {
    title: string;
    description: string;
    location: string;
}
export interface IMeetupInfo {
    id: number;
    author: string;
    status: number;
    date: number;
    seats: number;
    title: string;
    description: string;
    location: string;
}
