import React, { Component } from 'react';

const Player = ({ number, object }) => {
    return (
        <div className="player">
            <div style={{ float: number === 1 ? 'left' : 'right' }}>
                {object.name === '?'
                    ? 'Waiting for an opponent...'
                    : object.name}
            </div>
        </div>
    );
};

export default Player;
