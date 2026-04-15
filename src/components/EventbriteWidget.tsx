"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface EventbriteWidgetProps {
  eventId: string;
  containerId: string;
  height?: number;
  onOrderComplete?: () => void;
}

declare global {
  interface Window {
    EBWidgets: {
      createWidget: (options: any) => void;
    };
  }
}

export function EventbriteWidget({
  eventId,
  containerId,
  height = 425,
  onOrderComplete,
}: EventbriteWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initWidget = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: eventId,
          iframeContainerId: containerId,
          iframeContainerHeight: height,
          onOrderComplete: onOrderComplete,
        });
      }
    };

    if (isLoaded || window.EBWidgets) {
      initWidget();
    }
  }, [isLoaded, eventId, containerId, height, onOrderComplete]);

  return (
    <>
      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        onLoad={() => setIsLoaded(true)}
      />
      <div id={containerId} className="w-full bg-[#111]/30 backdrop-blur-md border border-[#C9A84C]/10 shadow-inner" style={{ minHeight: height }} />
    </>
  );
}
