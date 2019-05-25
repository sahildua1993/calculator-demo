import React from 'react';
import Button from './buttons';
import './App.css';

class Result extends React.Component {
    render() {
        return (
            <div className="cal-container">
                <Button
                    displayName={ '1'}
                    calType={'1'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '2'}
                    calType={'2'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '3'}
                    calType={'3'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '4'}
                    calType={'4'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '5'}
                    calType={'5'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '6'}
                    calType={'6'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '7'}
                    calType={'7'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '8'}
                    calType={'8'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '9'}
                    calType={'9'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '+'}
                    calType={'add'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '-'}
                    calType={'sub'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '/'}
                    calType={'div'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '*'}
                    calType={'mul'}
                    onClick={() => {}}
                />
                <Button
                    displayName={ '='}
                    calType={'equal'}
                    onClick={() => {}}
                />

            </div>
        )
    }

}

export default Result;