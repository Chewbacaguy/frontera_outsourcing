import { card, card2} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CFOServiceCard = ({ title, description }) => (
  <div className="mb-4">
    <h3 className="font-bold text-xl">{title}</h3>
    <p className="font-light text-white-300 max-w-[470px] mt-5">{description}</p>
  </div>
);

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        CFO Support Services
        <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Frontera Outsourcing, we provide a range of CFO support services designed to elevate your financial management. 
        Our team of experienced accountants and finance professionals are here to assist you in the following areas:
      </p>
      <br />

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card2} alt="billing" className="w-[100%] h-[100%]" />
    </div>

    <br />

    {/* <div className="font-poppins font-semibold text-[20px]max-w-[470px] mt-5 text-white">
        {cfoServices.map((service, index) => (
          <CFOServiceCard key={index} title={service.title} description={service.description} />
        ))}
    </div> */}

  </section>

);

const cfoServices = [
  {
    title: "Right-hand CFO Solutions",
    description: "Discover the support you've always needed from our seasoned accountants, allowing you to delegate low-impact tasks and focus on your high-priority activities.",
  },
  {
    title: "Audit Assistance & Preparation",
    description: "Collaborate with our expert audit professionals to streamline your preparations for internal and external audits, ensuring your company meets all necessary requirements.",
  },
  {
    title: "Business Analysis and Reporting",
    description: "Harness the power of business intelligence and modern data analytics tools to extract valuable insights from your organizational data, enhance processes, and stay informed about market trends.",
  },
  
];

export default CardDeal;
