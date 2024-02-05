import BionicLegIcon from "../components/icons/bionicLeg";
import BrainCloudIcon from "../components/icons/brainCloud";
import DiplomaIcon from "../components/icons/diploma";
import DoctoraIcon from "../components/icons/dotora";
import IIconsAnimatedList from "./interfaces/iiconsanimatedlist";

const IconsAnimatedListData: IIconsAnimatedList[] = [
    {
        iconImage: <BionicLegIcon className="size-24 text-blue-600" />,
        title: "Perfect Design",
        subtitle: [
            "Every device is a unique reflection of its user's needs and personality."
        ]
    },
    {
        iconImage: <BrainCloudIcon className="size-24 text-blue-600" />,
        title: "AI Technologies",
        subtitle: [
            "Te best tech is the one that empowers the user to live their life to the fullest."
        ]
    },
    {
        iconImage: <DiplomaIcon className="size-24 text-blue-600" />,
        title: "Certified Products",
        subtitle: [
            "Prosthetics is the bridge that connects physical disability to ability."
        ]

    },
    {
        iconImage: <DoctoraIcon className="size-24 text-blue-600" />,
        title: "Perfect Design",
        subtitle: [
            "With prosthetics, we can turn a disability into an opportunity."
        ]
    }
];

export default IconsAnimatedListData;