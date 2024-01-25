import styled from "styled-components";


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 150px 250px 1fr 250px;
    gap: 16px;
    background-color: #6d5353;

    .controls{
        width: 100%;
        height: 100%;
        background-color: #6d4040;
        grid-column: 2 / -2;
        grid-row: 2 / 3;
    }
    .card-container{
        grid-column: 2 / -2;
        grid-row: 3 / 4;
    }
`
export default GridContainer;