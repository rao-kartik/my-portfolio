import { Box } from "@material-ui/core";

interface IReduxLogoProps {
    boxWidth?: string;
    boxHeight?: string;
    svgWidth?: string;
    svgHeight?: string;
}

const ReduxLogo = ({boxWidth='80px', boxHeight='80px', svgWidth='80%', svgHeight='70%'}: IReduxLogoProps) => {
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
                    style={{fill:'#000000'}}>
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
                        <path 
                            d="M0,172v-172h172v172z" 
                            fill="none">
                        </path>
                        <g fill="#222222">
                            <path 
                                d="M82.41667,14.33333c-22.102,0 -39.41667,25.67313 -39.41667,58.43913c0,14.835 3.59823,28.14786 9.53223,38.33886c-0.33683,1.1395 -0.57389,2.30834 -0.57389,3.55534c0,6.923 5.61867,12.54167 12.54167,12.54167c6.923,0 12.54167,-5.61867 12.54167,-12.54167c0,-6.923 -5.61867,-12.54167 -12.54167,-12.54167c-0.172,0 -0.33191,0.04883 -0.50391,0.05599c-4.085,-7.86899 -6.66276,-18.19269 -6.66276,-29.40852c0,-23.908 11.48817,-44.1058 25.08333,-44.1058c9.21633,0 17.45061,9.29461 21.80794,22.71777c5.32483,0.85283 10.6332,2.3089 15.91504,4.12923c-4.859,-24.08717 -19.69165,-41.18034 -37.72298,-41.18034zM81.52083,60.91667c-6.923,0 -12.54167,5.61867 -12.54167,12.54167c0,6.923 5.61867,12.54167 12.54167,12.54167c4.9235,0 9.14108,-2.8567 11.19792,-6.9847c9.2665,0.41567 19.57822,3.10294 29.31055,8.37044c14.04667,7.611 24.64236,19.29166 27.63085,30.50033c1.54083,5.75483 0.99147,10.81237 -1.5957,15.0192c-5.14567,8.37067 -17.44098,11.72232 -31.46615,9.95215c-4.1495,4.2355 -8.88689,8.127 -14.02539,11.64583c7.16667,2.09267 14.2676,3.17741 20.9541,3.17741c16.01033,0 29.71983,-5.84229 36.74316,-17.25879c4.67267,-7.59667 5.7919,-16.66362 3.2334,-26.23112c-4.042,-15.10017 -17.00605,-29.84234 -34.65755,-39.40267c-12.89283,-6.9875 -26.31052,-10.24027 -38.45085,-10.1901c-2.27183,-2.279 -5.40568,-3.68132 -8.87435,-3.68132zM29.36654,84.15235c-10.46333,8.66449 -17.96795,19.23824 -20.85612,30.03841c-2.5585,9.5675 -1.43927,18.63479 3.2334,26.21712c7.009,11.4165 20.72566,17.25879 36.74316,17.25879c12.126,0 25.56619,-3.32209 38.40885,-10.28809c12.255,-6.63633 22.15687,-15.78536 28.4707,-25.7972c5.72617,-1.161 10.05013,-6.21955 10.05013,-12.28972c0,-6.923 -5.61867,-12.54167 -12.54167,-12.54167c-6.923,0 -12.54167,5.61867 -12.54167,12.54167c0,2.33633 0.68766,4.50515 1.80566,6.38281c-5.06683,7.27417 -12.77906,14.08261 -22.0599,19.10645c-22.35283,12.1045 -48.07389,11.23968 -56.14355,-1.88965c-2.58717,-4.20683 -3.12254,-9.25037 -1.58171,-15.00521c1.56233,-5.84083 5.22025,-11.81178 10.33008,-17.27279c-1.56233,-5.19583 -2.67238,-10.7061 -3.31738,-16.46093z">
                            </path>
                        </g>
                    </g>
                </svg>
            
            </Box>
        </div>
    )
}

export default ReduxLogo;