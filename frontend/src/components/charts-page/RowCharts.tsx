import React from "react";
import styled from "styled-components";

const RowCards = styled.div`
    display: flex;
    flex-direction: row;

    align-items: end;

    width: 100%;
    height: 300px;
`;

interface DivCentroProps {
    children?: React.ReactNode;
};

const RowCards1: React.FC<DivCentroProps> = ({ children }) => {
    return (
        <RowCards>
            {children}
        </RowCards>
    );
};

export default RowCards1;