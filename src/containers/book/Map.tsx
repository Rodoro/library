import React, { HTMLAttributes } from 'react'

export interface MapProps extends HTMLAttributes<HTMLDivElement> {
    idBook: number
}

const Map: React.FC<MapProps> = ({idBook}) => {
    return (
        <div>
            <svg className="svgIcon-use" x="0px" y="0px" width="335.4" height="752">
                <rect x="305" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="305" y="194" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="305" y="558" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="219" y="558" fill='#B3B3B3' stroke="#000"width="31" height="194" />
                <rect x="188" y="558" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect y="558" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="89" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="120" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="234" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="203" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="89" y="194" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="120" y="194" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="234" y="194" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <rect x="203" y="194" fill='#B3B3B3' stroke="#000" width="31" height="194" />
                <polygon fill='none' stroke="#000000" points="-0.4,97.7 -0.4,752 335.4,752 335.4,-0.5 -0.4,-0.5 " />
                <circle fill='#DE2828' stroke="#000000" cx="314.5" cy="412.5" r="22" />
                <text transform="matrix(1 0 0 1 5.6421 663.7061)" fill={idBook == 1 ? "red" : "black"} fontSize="36">1</text>
                <text transform="matrix(1 0 0 1 193.6421 663.7061)" fill={idBook == 2 ? "red" : "black"} fontSize="36">2</text>
                <text transform="matrix(1 0 0 1 227.6421 663.7061)" fill={idBook == 3 ? "red" : "black"} fontSize="36">3</text>
                <text transform="matrix(1 0 0 1 5.2197 99.3711)" fill={idBook == 10 ? "red" : "black"} fontSize="21">10</text>
                <text transform="matrix(1 0 0 1 93.2197 99.3711)" fill={idBook == 11 ? "red" : "black"} fontSize="21">11</text>
                <text transform="matrix(1 0 0 1 124.2197 99.3711)" fill={idBook == 12 ? "red" : "black"} fontSize="21">12</text>
                <text transform="matrix(1 0 0 1 208.2197 99.3711)" fill={idBook == 13 ? "red" : "black"} fontSize="21">13</text>
                <text transform="matrix(1 0 0 1 238.2197 99.3711)" fill={idBook == 14 ? "red" : "black"} fontSize="21">14</text>
                <text transform="matrix(1 0 0 1 309.2197 99.3711)" fill={idBook == 15 ? "red" : "black"} fontSize="21">15</text>
                <text transform="matrix(1 0 0 1 311.6421 302.7061)" fill={idBook == 9 ? "red" : "black"} fontSize="36">9</text>
                <text transform="matrix(1 0 0 1 240.6421 302.7061)" fill={idBook == 8 ? "red" : "black"} fontSize="36">8</text>
                <text transform="matrix(1 0 0 1 208.6421 302.7061)" fill={idBook == 7 ? "red" : "black"} fontSize="36">7</text>
                <text transform="matrix(1 0 0 1 127.6421 302.7061)" fill={idBook == 6 ? "red" : "black"} fontSize="36">6</text>
                <text transform="matrix(1 0 0 1 94.6421 302.7061)" fill={idBook == 5 ? "red" : "black"} fontSize="36">5</text>
                <text transform="matrix(1 0 0 1 311.6421 663.7061)" fill={idBook == 4 ? "red" : "black"} fontSize="36">4</text>
            </svg>
        </div>
    )
}

export default Map
