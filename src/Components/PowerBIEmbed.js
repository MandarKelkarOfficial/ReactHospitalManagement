// // src/Components/PowerBIDashboard.js
// import React, { useEffect, useRef } from 'react';
// import * as powerbi from 'powerbi-client';

// const PowerBIDashboard = () => {
//   const reportContainer = useRef(null);

//   useEffect(() => {
//     const embedConfig = {
//       type: 'report', // You can also use 'dashboard' or 'tile'
//       id: '<YOUR_REPORT_OR_DASHBOARD_ID>',
//       embedUrl: '<YOUR_EMBED_URL>',
//       accessToken: '<YOUR_EMBED_TOKEN>',
//       tokenType: powerbi.models.TokenType.Embed,
//       settings: {
//         filterPaneEnabled: false,
//         navContentPaneEnabled: false,
//       }
//     };

//     const powerbiService = new powerbi.service.Service(
//       powerbi.factories.hpmFactory,
//       powerbi.factories.wpmpFactory,
//       powerbi.factories.routerFactory
//     );

//     powerbiService.embed(reportContainer.current, embedConfig);
//   }, []);

//   return <div ref={reportContainer} style={{ height: '100vh' }} />;
// };

// export default PowerBIDashboard;
import React from 'react';

const PowerBIReport = () => {
  return (
    <div style={styles.container}>
      <iframe
        title="hospitalMGMT"
        src="https://app.powerbi.com/reportEmbed?reportId=8f6b847c-088a-4694-83e6-b402c602df48&autoAuth=true&ctid=80422497-e632-410a-964a-2cee17aa1964"
        style={styles.iframe}
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
 
    height: '100%',
    width: '100%',
    backgroundColor: '#f0f0f0', // Optional: background color for the container
  },
  iframe: {
    width: '190vw',
    height: '100vh',
    border: 'none',
  },
};

export default PowerBIReport;
