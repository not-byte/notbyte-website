import React, { useEffect, useRef, useState, forwardRef, memo } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    portalId: string;
}

function withPortal<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  portalProps: PortalProps
) {
  return memo(
    forwardRef<any, P>(function PortalWrapper(
      props: any,
      ref: React.ForwardedRef<any>
    ) {
      const { portalId } = portalProps;
      const [mounted, setMounted] = useState<boolean>(false);
      const portalContainerRef = useRef<Element | null>(null);

      useEffect(() => {
        setMounted(true);
        portalContainerRef.current = document.querySelector<HTMLElement>(portalId);
        return () => {
          portalContainerRef.current = null;
        };
      }, [portalId]);

      if (!portalContainerRef.current || !mounted) {
        return null;
      }

      return createPortal(
        <WrappedComponent {...props} ref={ref} />,
        portalContainerRef.current
      );
    })
  );
}

export default withPortal;