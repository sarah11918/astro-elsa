import React from "react"

const ErrorMessage = () => {
    return (
        <div className="error">
            <p className="error-text">Hmmm... there are no results for this location. Either this is not an eBird region ID (eg: CA-PR-PE, US-MD-003, SE-AB) ... or no one has recorded a sighting in the last 30 days. Maybe you could submit an eBird checklist!  ;)</p>
        </div>
    )
}

export default ErrorMessage