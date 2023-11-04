import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Weight training classes at the gym offer structured and guided workouts that help participants build strength, sculpt their bodies, and improve overall fitness through lifting weights and resistance exercises.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Yoga classes at the gym offer a peaceful and rejuvenating experience, combining physical postures and mindfulness to promote flexibility, strength, and inner tranquility.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Ab Core Classes at the gym offer a dynamic and intense workout focused on strengthening and sculpting your core muscles for a lean and powerful midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Adventure classes at the gym offer a dynamic and engaging fitness experience that combines elements of traditional workouts with exciting challenges and outdoor-inspired activities to keep participants motivated and active.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Fitness classes at the gym offer engaging group workouts led by experienced instructors to help you achieve your health and fitness goals.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Training classes at the gym offer a dynamic and motivating group fitness experience, led by experienced instructors, to help you achieve your fitness goals through structured workouts and camaraderie.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sequi minus inventore autem, sint repudiandae adipisci optio
              officiis aliquid fugit sapiente et voluptatem possimus nulla totam
              voluptas numquam maiores recusandae?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-auto w-5/6 mx-auto overflow-x-auto overflow-y-hidden">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {classes.map((item: ClassType, index) => (
              <Class
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
