
interface BalloonSVGProps {
    color?: string;
    size?: string;
}

const BalloonSVG = ({ color = '#6AD200', size = '100%' }: BalloonSVGProps) => {
    return (
        <svg
            className="balloon-svg"
            width={size}
            height={size}
            viewBox="0 0 60 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Bday" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Balloon">
                    {/* Cord */}
                    <line
                        id="cord"
                        x1="28.9235788"
                        y1="79.6153846"
                        x2="28.4081633"
                        y2="138"
                        stroke="#BEBEBEFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Balloon Body */}
                    <ellipse
                        id="Oval"
                        fill={color}
                        fillRule="nonzero"
                        cx="28.853187"
                        cy="34.963309"
                        rx="28.853187"
                        ry="34.963309"
                    />
                    {/* Base of the Balloon */}
                    <path
                        id="base"
                        d="M30.5904187,68.6764432 L34.1884764,74.8227275 C34.6070008,75.5376603 34.3667142,76.4565088 33.6517814,76.8750332 C33.4219064,77.0096029 33.1603434,77.0805328 32.8939761,77.0805328 L25.6978606,77.0805328 C24.8694335,77.0805328 24.1978606,76.40896 24.1978606,75.5805328 C24.1978606,75.3141656 24.2687906,75.0526025 24.4033603,74.8227275 L28.001418,68.6764432 C28.4199424,67.9615104 29.3387909,67.7212239 30.0537237,68.1397482 C30.2756736,68.2696785 30.4604884,68.4544933 30.5904187,68.6764432 Z"
                        fill={color}
                    />
                    {/* Highlight */}
                    <ellipse
                        id="highlight"
                        fill="#FFFFFF"
                        opacity="0.5"
                        cx="11.9573855"
                        cy="36.9769231"
                        rx="4.78406712"
                        ry="13.6230769"
                    />
                </g>
            </g>
        </svg>
    );
};

export default BalloonSVG;
