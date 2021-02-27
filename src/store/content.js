
import solarImg from '../img/sol1.png';
import turbineImg from '../img/wind1.png';
import converterImg from '../img/b8FnIRj5KP4.png';

const productsData = [
    {
        id: 1,
        isReleased: true,
        name: 'Solar Panel X',
        description: `App for solar panels: forecasting power output at 5 days* ahead, multitool for installing`,
        googleLink: 'https://play.google.com/store/apps/details?id=com.revolve44.solarpanelx',
        huaweiLink: 'https://appgallery.huawei.com/#/app/C103806869',
        img: solarImg,
    },
    {
        id: 2,
        isReleased: true,
        name: 'My Wind Turbine',
        description: `App for wind turbines: forecasting power output at 5 days* ahead`,
        googleLink: 'https://play.google.com/store/apps/details?id=com.revolve44.mywindturbine',
        huaweiLink: '',
        img: turbineImg,
    },
    {
        id: 3,
        isReleased: false,
        name: 'Wireless DC Controller for Solar Panels',
        description: `Remote+Wireless controller of energy output your PV station`,
        googleLink: '',
        huaweiLink: '',
        img: converterImg,
    }
];

export default productsData;