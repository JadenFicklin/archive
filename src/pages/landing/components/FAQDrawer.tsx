import { useState } from "react";
import { cn } from "~/utils/cn";
import { Drawer } from "~/components/Drawer";

type FAQDrawerProps = {
  number: number;
  title: string;
  duration?: string;
  showNumbers?: boolean;
  children: React.ReactNode;
  className?: string;
  showPlus?: boolean;
  showUnderline?: boolean;
};

export const FAQDrawer: React.FC<FAQDrawerProps> = (props) => {
  const {
    number,
    title,
    duration = "200ms",
    showNumbers,
    children,
    className,
    showPlus,
    showUnderline,
  } = props;
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  const order = number < 10 ? `0${number}` : String(number);

  const splitOrder = order.split("");
  const splitTitle = title.split(" ");

  const determineDirection = (items: string[]) => {
    return items.map((item, index): AnimatedWords => {
      const direction = index % 2 ? "up" : "down";
      return { item, direction };
    });
  };

  const animatedOrder = determineDirection(splitOrder);
  const animatedTitle = determineDirection(splitTitle);

  const wrapperClasses = cn(
    "py-8 relative group border-b border-max",
    className,
    !showUnderline && "border-none",
  );
  const handleClasses = "flex items-center justify-between cursor-pointer";
  const hoverBorder = cn(
    "absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-max duration-500 ease-in-out bg-max",
    !showUnderline && "hidden",
  );
  return (
    <div className={wrapperClasses}>
      <div className={handleClasses} onClick={toggle}>
        <div className="flex gap-6">
          {showNumbers && (
            <AnimatedWords
              words={animatedOrder}
              className="gap-0.5 text-base md:text-xl"
            />
          )}
          <AnimatedWords
            words={animatedTitle}
            className="xs:text-2xl gap-2 text-xl sm:text-3xl md:text-4xl"
          />
        </div>
        {showPlus && (
          <div className="relative size-7">
            <div
              className={cn(
                "bg-max absolute top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full duration-200",
                show ? "rotate-180" : "rotate-0",
              )}
            ></div>
            <div
              className={cn(
                "bg-max absolute left-1/2 h-full w-[3px] -translate-x-1/2 rounded-full duration-200",
                show ? "rotate-90" : "rotate-0",
              )}
            ></div>
          </div>
        )}
      </div>
      <Drawer show={show} duration={duration}>
        {children}
      </Drawer>
      <div className={hoverBorder} />
    </div>
  );
};

type AnimatedWords = {
  item: string;
  direction: "up" | "down";
};

type AnimatedWordsProps = {
  words: AnimatedWords[];
  className?: string;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = (props) => {
  const { words, className } = props;

  const wrapperClasses = cn("flex self-start overflow-hidden", className);

  return (
    <div className={wrapperClasses}>
      {words.map(({ item, direction }, index) => {
        const isUp = direction === "up";
        const isDown = direction === "down";

        const wordClasses = "duration-700";

        const initialWordClassIsUp = "absolute top-0 group-hover:-top-[200%]";
        const replacementWordClassIsUp =
          "absolute top-[200%] group-hover:top-0";

        const initialWordClasses = cn(
          wordClasses,
          isUp && initialWordClassIsUp,
          isDown && "absolute -top-[200%] group-hover:top-0",
        );

        const replacementWordClasses = cn(
          wordClasses,
          isUp && replacementWordClassIsUp,
          isDown && "absolute top-0 group-hover:top-[200%]",
        );

        return (
          <div
            className="text-max relative flex select-none flex-col"
            key={index}
          >
            <span className="opacity-0">{item}</span>
            <span className={initialWordClasses}>{item}</span>
            <span className={replacementWordClasses}>{item}</span>
          </div>
        );
      })}
    </div>
  );
};
