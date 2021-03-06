import { Box } from "@material-ui/core";

interface IHtmlLogoProps {
    boxWidth?: string;
    boxHeight?: string;
    svgWidth?: string;
    svgHeight?: string;
    svgMargin?: string;
}

const HtmlLogo = ({boxWidth='80px', boxHeight='80px', svgWidth='80%', svgHeight='100%', svgMargin='5px 0 0'}: IHtmlLogoProps) => {
    return (
        <div>
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                width: boxWidth,
                height: boxHeight,
                background: '#1abc9c'
            }}>
                            
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width={svgWidth} height={svgHeight}
                    viewBox="0 0 172 172"
                    style={{fill:'#000000', margin: svgMargin}}>
                    <g fill="none" 
                        fillRule="nonzero" 
                        stroke="none" 
                        strokeWidth="1" 
                        strokeLinecap="butt" 
                        strokeLinejoin="miter" 
                        strokeMiterlimit="10" 
                        strokeDasharray="" 
                        strokeDashoffset="0" 
                        fontFamily="none" 
                        fontWeight="none" 
                        fontSize="none" 
                        textAnchor="none" 
                        style={{mixBlendMode: 'normal'}}>
                        <path d="M0,172v-172h172v172z" 
                                fill="none">
                        </path>
                        <g fill="#222222">
                            <path 
                                d="M145.7872,19.1092c-1.08933,-1.21547 -2.64307,-1.9092 -4.27133,-1.9092h-111.03173c-1.62827,0 -3.182,0.69373 -4.27133,1.9092c-1.08933,1.21547 -1.60533,2.838 -1.4276,4.4548l12.6248,113.65187c0.25227,2.31053 1.88627,4.24267 4.12227,4.87907l42.88533,12.25213c0.516,0.14907 1.0492,0.2236 1.57667,0.2236c0.52747,0 1.06067,-0.07453 1.57667,-0.2236l42.88533,-12.25213c2.236,-0.6364 3.86427,-2.56853 4.12227,-4.87907l12.63053,-113.65187c0.18347,-1.6168 -0.33253,-3.23933 -1.42187,-4.4548zM118.27293,59.79867h-51.19867l1.21547,14.57413h48.75053l-3.65787,43.05733l-27.3652,8.7032l-0.26947,-0.086l-27.06133,-8.62867l-1.4792,-17.544h13.25547l0.57907,6.81693l15.1188,3.33107l14.85507,-3.3368l1.57667,-18.4212h-46.38267l-3.58907,-42.398h66.84493z">
                            </path>
                        </g>
                    </g>
                </svg>
            
            </Box>
        </div>
    )
}

export default HtmlLogo;