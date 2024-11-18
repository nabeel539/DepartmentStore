import { assets } from "../assets/assets";
import NewslatterBox from "../components/Newslaterbox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500 ">
            60624 Chicago <br />
            United States
          </p>
          <p className="text-gray-500">
            Tel: +1-212-456-7890
            <br />
            Email: contact@dstore.com
          </p>
        </div>
      </div>
      <NewslatterBox />
    </div>
  );
};

export default Contact;