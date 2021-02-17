import React from 'react';
import { reportsData } from './reportsData.js';

export default function Report() {
    return ( reportsData.map(e => <div className="reportContainer" key={e.id}>
                    <h1>{e.title}</h1>
                    <li>{e.icon}</li>   
                    <p>{e.description}</p>
                </div>)
            )
}
