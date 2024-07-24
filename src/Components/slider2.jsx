import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function RangeDemo() {
    const [value, setValue] = useState([20,80]);

    return (
        <div className="card flex justify-content-center ">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-10rem" range />
        </div>
    )
}
        