import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { memo, forwardRef } from "react";

interface PortalProps {
  portalId: string;
}

function withPortal<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  portalProps: PortalProps
) {
  return memo(
    // eslint-disable-next-line
    forwardRef(function PortalWrapper(props: P, ref: React.ForwardedRef<any>) {
      const { portalId } = portalProps;
      const [mounted, setMounted] = useState<boolean>(false);
      const portalContainerRef = useRef<Element | null>(null);

      useEffect(() => {
        setMounted(true);
        portalContainerRef.current =
          document.querySelector<HTMLElement>(portalId);
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
