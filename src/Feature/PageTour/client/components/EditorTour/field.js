import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    overflow: hidden;
    margin: 10px;
    padding: 6px 6px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 150ms linear;
    text-align: center;
    white-space: nowrap;
    text-decoration: none !important;
    text-transform: none;
    text-transform: capitalize;
    border-style: solid;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    justify-content: center;
    align-items: center;
    flex: 0 0 160px;
    box-shadow: 2px 5px 10px var(--color-smoke);
    background: var(--color-flower);
    margin-left: auto;
    margin-right: auto;
    border-color:#0b80d6;
    color:#0b80d6;
`;

class Field extends React.Component {

    render() {
        return (
            <>
                <div text-align="center"><b>Field:</b> {this.props.name}</div>
                <div text-align="center"><b>Type:</b> {this.props.type}</div>
                <div text-align="center"><b>Parent:</b> {this.props.parentComponent}</div>
                <div>
                    <Button onClick={() => this.props.goTo(this.props.next)}>Next Component</Button>
                </div>
            </>
        );
    }
}

export default Field;