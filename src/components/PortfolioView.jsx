import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const PortfolioView = ({ name, email, phone, address }) => {
  return (
    <div className="p-10 bg-[#0e374e] rounded-md mt-20 h-1/3 w-4/5">
      <div className="text-white">
        <div className="flex justify-center">
          <span className="text-3xl">{name}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-20 mt-20">
          <span>
            {email && <FontAwesomeIcon icon={faEnvelope} />} {email}
          </span>
          <span>
            {phone && <FontAwesomeIcon icon={faPhone} />} {phone}
          </span>
          <span>
            {address && <FontAwesomeIcon icon={faAddressBook} />} {address}
          </span>
        </div>
      </div>
    </div>
  );
};
export default PortfolioView;
