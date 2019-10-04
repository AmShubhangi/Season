import React from 'react';

const Spinner = (props) => {
    return (
        <div class="ui segment">
            <div class="ui active inverted dimmer">
                <div class="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    );
};

export default Spinner;