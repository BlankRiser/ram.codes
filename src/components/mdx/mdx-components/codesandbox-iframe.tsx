import React from 'react';

type CodesandboxIframeProps = {
  src: string;
  title: string;
};

export const CodesandboxIframe: React.FC<CodesandboxIframeProps> = ({
  src,
  title,
}) => {
  return (
    <div>
      <iframe
        src={src}
        title={title}
        style={{
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
    </div>
  );
};
