import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Our gym boasts state-of-the-art facilities equipped with cutting-edge exercise equipment and amenities to provide the ultimate fitness experience.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Enjoy a wide variety of fitness options with our gym's extensive selection of over 100 diverse classes to suit every interest and fitness level.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experts and Pro Trainers",
    description:
      "Experts and Pro Trainers at our gym are highly qualified professionals who provide top-notch guidance and training to help you achieve your fitness goals effectively.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20 overflow-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="my-5 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN MOST GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers, and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="md:flex justify-center items-center gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Graphic and Description */}
      <div className="md:flex items-center justify-between gap-20 md:mt-28 mt-16">
        {/* Graphic */}
        <img
          src={BenefitsPageGraphic}
          alt="Benefits Page Graphic"
          className="mx-auto"
        />
        {/* Description */}
        <div className="md:mt-0 mt-28">
          {/* Title */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>.
              </HText>
            </motion.div>
          </div>
          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Welcome to our bustling fitness haven where millions of delighted
              members embark on their journey to a healthier, fitter self. At
              our gym, we've created a vibrant, energetic environment that
              caters to all fitness levels, from beginners to seasoned athletes.
              Our state-of-the-art facilities, top-notch equipment, and expert
              trainers ensure that every visit is a step closer to achieving
              your fitness goals, leaving our members brimming with happiness
              and a newfound zest for life.
            </p>
            <p className="mb-5">
              With a diverse range of workout options, personalized training
              plans, and a supportive community, our gym provides an inclusive
              space where everyone can thrive. Our millions of satisfied members
              are a testament to our commitment to their well-being, and we're
              here to inspire, motivate, and guide you on your transformative
              fitness journey. Join our gym and become a part of our
              ever-growing family of happy, fit, and thriving individuals.
            </p>
          </motion.div>
          {/* Button */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-10 lg:before:right-40 before:-z-[1] before:content-sparkles">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
