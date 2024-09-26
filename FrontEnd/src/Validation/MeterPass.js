import React from 'react';
import zxcvbn from 'zxcvbn';
import "./Passwordstrength.css"

function MeterPass({ password }) {
    const testResult = zxcvbn(password);
    const num = testResult.score * 100 / 4
    const ChangePasswordColor = () => ({
        width: `${num}%`,
        background: funcProgressColor(),
        height: "7px"
    })
    const funcProgressColor = () => {
        switch (testResult.score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    }

    const createPassLabel = () => {
        switch (testResult.score) {
            case 0:
                return 'veryweek';
            case 1:
                return 'week';
            case 2:
                return 'fear';
            case 3:
                return 'good';
            case 4:
                return 'strong';
            default:
                return 'none';
        }
    }

    return (
        <>
            <div className="progress" style={{ height: '7px' }}>
                <div className="progress-bar" style={ChangePasswordColor()}></div>
            </div>

            <p className='metererror' style={{ color: funcProgressColor() }}>{createPassLabel()}</p>



        </>
    )
}

export default MeterPass