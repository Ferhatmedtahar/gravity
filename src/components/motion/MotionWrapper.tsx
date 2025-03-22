// "use client";

// import { motion } from "motion/react";
// import React from "react";

// const MotionWrapper = (
//   {
//     type,
//     children,
//     ...props
//   }: {
//     type: HTMLElement["tagName"];
//     [key: string]: any;
//     children: React.ReactNode;
//   },
//   ref: any
// ) => {
//   const Component = type ? (motion as any)[type] : motion.div;
//   // const Component = type ? motion[type] : motion.div;
//   return (
//     <Component ref={ref} {...props}>
//       {children}
//     </Component>
//   );
// };

// export { MotionWrapper };

"use client";

import { motion } from "motion/react";
import React, { ElementType, forwardRef } from "react";

interface MotionWrapperProps {
  type?: ElementType;
  children: React.ReactNode;
  [key: string]: any;
}

const MotionWrapper = forwardRef<HTMLElement, MotionWrapperProps>(
  ({ type = "div", children, ...props }, ref) => {
    const MotionComponent = (motion as any)[type] || motion.div; // Ensure motion[type] exists

    return (
      <MotionComponent ref={ref} {...props}>
        {children}
      </MotionComponent>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";

export { MotionWrapper };
