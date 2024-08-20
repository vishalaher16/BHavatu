// import React, { useEffect } from "react";

// const Reyna = () => {
//   useEffect(() => {
//     const setupBotpress = async () => {
//       try {
//         // Load inject.js dynamically
//         const injectScript = document.createElement("script");
//         injectScript.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
//         injectScript.async = true;
//         document.body.appendChild(injectScript);

//         // Load config.js after inject.js is loaded
//         injectScript.onload = () => {
//           const configScript = document.createElement("script");
//           configScript.src =
//             "https://mediafiles.botpress.cloud/2c7c3470-aa41-49c7-bcbf-a8863d66f224/webchat/config.js";
//           configScript.defer = true;
//           document.body.appendChild(configScript);
//         };
//       } catch (error) {
//         console.error("Error loading Botpress Webchat:", error);
//       }
//     };

//     setupBotpress();

//     return () => {
//       // Cleanup code if needed
//     };
//   }, []);

//   const handleOpenChat = () => {
//     if (window.WebChat) {
//       window.WebChat.open();
//     }
//   };

//   return (
//     <div>
//       {/* Button or icon to toggle the chat */}
//       <button onClick={handleOpenChat}>Open Bot</button>
//     </div>
//   );
// };

// export default Reyna;
import React, { useEffect, useState } from "react";

const Reyna = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const setupBotpress = async () => {
      try {
        // Load inject.js dynamically
        const injectScript = document.createElement("script");
        injectScript.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
        injectScript.async = true;
        document.body.appendChild(injectScript);

        // Load config.js after inject.js is loaded
        injectScript.onload = () => {
          const configScript = document.createElement("script");
          configScript.src =
            "https://mediafiles.botpress.cloud/2c7c3470-aa41-49c7-bcbf-a8863d66f224/webchat/config.js";
          configScript.defer = true;
          document.body.appendChild(configScript);
        };
      } catch (error) {
        console.error("Error loading Botpress Webchat:", error);
      }
    };

    setupBotpress();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  const handleOpenChat = () => {
    if (window.WebChat) {
      window.WebChat.open();
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://your-backend-url/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("File uploaded successfully:", result);

      // Handle the response, e.g., display Vastu report in chat
      if (window.WebChat) {
        window.WebChat.sendMessage("Here is your Vastu report:", result);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      {/* Button or icon to toggle the chat */}
      <button onClick={handleOpenChat}>Open Bot</button>

      {/* File upload input */}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Analyze</button>
    </div>
  );
};

export default Reyna;

