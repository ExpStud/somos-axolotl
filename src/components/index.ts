import dynamic from "next/dynamic";

//icons
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const ExchangeIcon = dynamic(() => import("./@icons/ExchangeIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
const PatternSVG = dynamic(() => import("./@icons/PatternSVG"));
//atoms
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const CheckBox = dynamic(() => import("./atoms/CheckBox"));
const LoadCircle = dynamic(() => import("./atoms/LoadSpinner"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const Logo = dynamic(() => import("./atoms/Logo"));
const ValidatorCtaButton = dynamic(() => import("./atoms/ValidatorCtaButton"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const NavItem = dynamic(() => import("./molecules/NavItem"));
const Modal = dynamic(() => import("./molecules/Modal"));  
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const HeaderContent = dynamic(() => import("./molecules/HeaderContent"));
const Gallery = dynamic(() => import("./molecules/Gallery"));
const TextDropdown = dynamic(() => import("./molecules/TextDropdown"));
const TeamHeader = dynamic(() => import("./molecules/TeamHeader"));
const Topography = dynamic(() => import("./molecules/Topography"));
const LanguageSwitcher = dynamic(() => import("./molecules/LanguageSwitcher"));
const CardPurchaseProtection = dynamic(() => import("./molecules/CardPurchaseProtection").then(mod => mod.CardPurchaseProtection));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const ImageModal = dynamic(() => import("./organisms/ImageModal"));
const Menu = dynamic(() => import("./organisms/Menu"));
const Home = dynamic(() => import("./organisms/Home"));
const Description = dynamic(() => import("./organisms/Description"));
const Infographics = dynamic(() => import("./organisms/Infographics"));
const Partners = dynamic(() => import("./organisms/Partners"));
const Donate = dynamic(() => import("./organisms/Donate"));
const Goals = dynamic(() => import("./organisms/Goals"));
const TeamCard = dynamic(() => import("./organisms/TeamCard"));
const AboutDescription = dynamic(() => import("./organisms/AboutDescription"));
const Validator = dynamic(() => import("./organisms/Validator"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));

export {
  PageHead,
  Logo,
  Header,
  Footer,
  PageLayout,
  ArrowIcon,
  NumberInput,
  TextInput,
  CheckBox,
  TwitterIcon,
  DiscordIcon,
  LoadCircle,
  ExpIcon,
  MenuIcon,
  NavItem,
  ExchangeIcon,
  CloseIcon,
  Modal,
  DownloadIcon,
  IconBar,
  SplashScreen,
  LandingView,
  ImageShimmer,
  HeaderContent,
  ImageModal,
  Menu,
  Home,
  Gallery,
  Description,
  TextDropdown,
  PatternSVG,
  Infographics,
  Partners,
  Donate,
  Goals,
  AboutView,
  TeamCard,
  AboutDescription,
  TeamHeader,
  Topography,
  LanguageSwitcher,
  CardPurchaseProtection,
  Validator,
  ValidatorCtaButton
}