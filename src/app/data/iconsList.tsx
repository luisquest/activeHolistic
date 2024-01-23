import ClockIcon from "../components/icons/clock";
import MailIcon from "../components/icons/mail";
import MapPinIcon from "../components/icons/map-pin";
import PhoneIcon from "../components/icons/phone";
import IIconsList from "./interfaces/iiconslist";

const IconsListData: IIconsList[] = [
    {
        iconImage: <MapPinIcon className="size-16 text-blue-600" />,
        title: "Location",
        subtitle: [
            "29 Nicolas str, New York,", "987597-50"
        ]
    },
    {
        iconImage: <PhoneIcon className="size-16 text-blue-600" />,
        title: "Phones",
        subtitle: [
            "0(800) 890-90-609", "0(800) 890-90-620"
        ]
    },
    {
        iconImage: <MailIcon className="size-16 text-blue-600" />,
        title: "Email",
        subtitle: [
            "sale@like-themes.com", "tech@like-themes.com"
        ]

    },
    {
        iconImage: <ClockIcon className="size-16 text-blue-600" />,
        title: "Working Hours",
        subtitle: [
            "Wednesday - Sunday", "7:00 AM - 5:00 PM"
        ]
    }
];

export default IconsListData;