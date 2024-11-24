import React, { useEffect, useRef, useState, ForwardedRef, ComponentType } from "react";
import { createPortal } from "react-dom";
import { memo, forwardRef } from "react";

interface PortalProps {
    portalId: string;
}

function withPortal<P extends object>(
  WrappedComponent: ComponentType<P>,
  portalProps: PortalProps
) {
  // eslint-disable-next-line react/display-name
  const PortalWrapper = forwardRef<unknown, P>((props, ref) => {
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
  });

  // Wracamy z memo, aby optymalizować renderowanie
  return memo(PortalWrapper);
}

export default withPortal;
