import React, {useState} from 'react';
import "../ifoodcounter/Ifoodcounter.css"

export default function Ifoodcounter() {

    const [value, setValue] = useState(1);
    const [buttonStyle, setbuttonStyle] = useState("counter-buton-minus-active");

    function down(){

        if (value <= 1){
            // muda o css
            setbuttonStyle("counter-buton-minus-desactive");
        }

        if (value > 0) {
            setValue(value-1);            
        }
    }

    function up(){
        setValue(value+1);
        setbuttonStyle("counter-buton-minus-active");
    }

    return (
        <div className="countex-wrapper">
            <button 
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>
            <p>{value}</p>
            <button 
                className="counter-buton-plus-active"
                onClick={up}
            >
                +
            </button>            
        </div>
    )
}
