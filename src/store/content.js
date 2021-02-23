
import solarImg from '../img/sol1.png';
import turbineImg from '../img/wind1.png';
import converterImg from '../img/b8FnIRj5KP4.png';

const productsData = [
    {
        id: 1,
        isReleased: true,
        name: 'Solar Panel X',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Mauris at tellus vel elit luctus ultricies in ut lectus.
        In vel odio nec urna volutpat pulvinar sit amet ac nunc.
        Aliquam erat volutpat. Aenean sagittis tortor a sagittis cursus.
        Integer elementum, lectus eu aliquet posuere, nisl risus dapibus sem, sed rutrum purus ipsum\n sed elit.`,
        googleLink: 'https://play.google.com/store/apps/details?id=com.revolve44.solarpanelx',
        huaweiLink: 'https://appgallery.huawei.com/#/app/C103806869',
        img: solarImg,
    },
    {
        id: 2,
        isReleased: true,
        name: 'My Wind Turbine',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Mauris at tellus vel elit luctus ultricies in ut lectus.
        In vel odio nec urna volutpat pulvinar sit amet ac nunc.
        Aliquam erat volutpat. Aenean sagittis tortor a sagittis cursus.
        Integer elementum, lectus eu aliquet posuere, nisl risus dapibus sem, sed rutrum purus ipsum\n sed elit.`,
        googleLink: 'https://play.google.com/store/apps/details?id=com.revolve44.mywindturbine',
        huaweiLink: '',
        img: turbineImg,
    },
    {
        id: 3,
        isReleased: false,
        name: 'Wireless DC Converter for Solar Panels',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Mauris at tellus vel elit luctus ultricies in ut lectus.
        In vel odio nec urna volutpat pulvinar sit amet ac nunc.
        Aliquam erat volutpat. Aenean sagittis tortor a sagittis cursus.
        Integer elementum, lectus eu aliquet posuere, nisl risus dapibus sem, sed rutrum purus ipsum\n sed elit.`,
        googleLink: '',
        huaweiLink: '',
        img: converterImg,
    }
];

export default productsData;