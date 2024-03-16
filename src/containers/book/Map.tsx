import React, { HTMLAttributes } from 'react'

export interface MapProps extends HTMLAttributes<HTMLDivElement> {
    params: { id: number }
}

const Map: React.FC<MapProps> = ({params}) => {
    return (
        <div className="flex flex-col items-center">
            <svg className="svgIcon-use" x="0px" y="0px" width="800" height="800">
                <rect x="537" y="24" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="537" y="218" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="537" y="582" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="451" y="582" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="420" y="582" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="232" y="582" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="232" y="24" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="321" y="24" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="352" y="24" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="466" y="24" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="435" y="24" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="321" y="218" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="352" y="218" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="466" y="218" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <rect x="435" y="218" fill='#B3B3B3' stroke="#000" stroke-miterlimit="10" width="31" height="194" />
                <polygon fill='none' stroke="#000000" stroke-width="3" stroke-miterlimit="10" points="231.6,121.7 231.6,776 567.4,776 567.4,23.5 231.6,23.5 " />
                <circle fill='#DE2828' stroke="#000000" stroke-miterlimit="10" cx="546.5" cy="436.5" r="22" />
                <text transform="matrix(1 0 0 1 237.6421 687.7061)" fill={params?.id == 1 ? "red" : "black"} font-size="36">1</text>
                <text transform="matrix(1 0 0 1 425.6421 687.7061)" fill={params?.id == 2 ? "red" : "black"} font-size="36">2</text>
                <text transform="matrix(1 0 0 1 459.6421 687.7061)" fill={params?.id == 3 ? "red" : "black"} font-size="36">3</text>
                <text transform="matrix(1 0 0 1 237.2197 123.3711)" fill={params?.id == 10 ? "red" : "black"} font-size="21">10</text>
                <text transform="matrix(1 0 0 1 325.2197 123.3711)" fill={params?.id == 11 ? "red" : "black"} font-size="21">11</text>
                <text transform="matrix(1 0 0 1 356.2197 123.3711)" fill={params?.id == 12 ? "red" : "black"} font-size="21">12</text>
                <text transform="matrix(1 0 0 1 440.2197 123.3711)" fill={params?.id == 13 ? "red" : "black"} font-size="21">13</text>
                <text transform="matrix(1 0 0 1 470.2197 123.3711)" fill={params?.id == 14 ? "red" : "black"} font-size="21">14</text>
                <text transform="matrix(1 0 0 1 541.2197 123.3711)" fill={params?.id == 15 ? "red" : "black"} font-size="21">15</text>
                <text transform="matrix(1 0 0 1 543.6421 326.7061)" fill={params?.id == 9 ? "red" : "black"} font-size="36">9</text>
                <text transform="matrix(1 0 0 1 472.6421 326.7061)" fill={params?.id == 8 ? "red" : "black"} font-size="36">8</text>
                <text transform="matrix(1 0 0 1 440.6421 326.7061)" fill={params?.id == 7 ? "red" : "black"} font-size="36">7</text>
                <text transform="matrix(1 0 0 1 359.6421 326.7061)" fill={params?.id == 6 ? "red" : "black"} font-size="36">6</text>
                <text transform="matrix(1 0 0 1 326.6421 326.7061)" fill={params?.id == 5 ? "red" : "black"} font-size="36">5</text>
                <text transform="matrix(1 0 0 1 543.6421 687.7061)" fill={params?.id == 4 ? "red" : "black"} font-size="36">4</text>
            </svg>
        </div>
    )
}

export default Map
