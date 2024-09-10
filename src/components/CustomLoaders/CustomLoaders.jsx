import RingLoader from "react-spinners/RingLoader";
import PulseLoader from "react-spinners/PulseLoader";
import PuffLoader from 'react-spinners/PuffLoader'

import {RingLoaderStyled, DataLoaderStyled, RotatingStyled } from "./CustomLoaders.styled";



export const Loading = () => {
    return (
        <RingLoaderStyled>
            <RingLoader 
                color={"#36d7b7"} 
                loading = {true} 
                size={150}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RingLoaderStyled>
    );
};


export const RefreshLoading = () => {
    return (
        <RingLoaderStyled
            style={{backgroundColor: 'rgba(0, 0, 0, 0.8)',}}
        >
            <RingLoader 
                color={"#36d7b7"}
                loading = {true} 
                size={150}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RingLoaderStyled>
    );
};


export const DataLoading = () => {
    return (
        <DataLoaderStyled>
            <PulseLoader 
                color={"#E3FFA8"}
                loading = {true} 
                size={20}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </DataLoaderStyled>
    );
};


export const RotatingLoader = () => {
    return (
        <RotatingStyled>
            <PuffLoader 
                size={160}
                color={"#E3FFA8"}
                loading = {true} 
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RotatingStyled>
    )
}