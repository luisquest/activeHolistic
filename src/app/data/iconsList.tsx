import ClockIcon from "../components/icons/clock";
import MailIcon from "../components/icons/mail";
import MapPinIcon from "../components/icons/map-pin";
import PhoneIcon from "../components/icons/phone";
import IIconsList from "./interfaces/iiconslist";

const IconsListData: IIconsList[] = [
    {
        iconImage: <MapPinIcon className="size-16 text-blue-600" />,
        title: "Dirección",
        subtitle: [
            "av. Mariscal La Mar 550, Oficina 204, Miraflores",
        ]
    },
    {
        iconImage: <PhoneIcon className="size-16 text-blue-600" />,
        title: "Teléfonos",
        subtitle: [
            "+51 965 836 372", 
        ]
    },
    {
        iconImage: <MailIcon className="size-16 text-blue-600" />,
        title: "Correo electrónico",
        subtitle: [
            "citas@activeholistic.pe",
        ]

    },
    {
        iconImage: <ClockIcon className="size-16 text-blue-600" />,
        title: "Horario de atención",
        subtitle: [
            "Lunes - Viernes | 7:00 AM - 5:00 PM", "Sábados | 7:00 AM - 2:00 PM"
        ]
    }
];

export default IconsListData;