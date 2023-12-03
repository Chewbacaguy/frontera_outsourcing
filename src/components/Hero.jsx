import styles from "../style";
import { discount, robot, robot2 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"></span> Maquiladora {" "}
            <span className="text-white"> Accounting </span> Services in Mexico.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Your Trusted <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Partner</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          for Accounting Support Services. 
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At Frontera Outsourcing, we specialize in providing top-tier accounting services tailored 
          to American accounting firms. Our expertise aligns 
          seamlessly with the needs of US CPA FIRMS and US BOOKKEEPING FIRMS, ensuring precision and 
          compliance. Additionally, we offer comprehensive Bookkeeping support, Accounting support, 
          and Outsourced Accounting solutions. We cater to Outsource Accounting Firms, providing a 
          proximity advantage for companies already leveraging Indian or Philippine outsourcing. Our 
          services act as a reliable 'Backup' or 'Redundancy' option, especially beneficial for companies
          seeking scale and safety in their financial processes.
        </p>

      </div>
    
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot2} alt="expertise frontera outsourcing" className="w-[90%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
    
  );
};

export default Hero;
